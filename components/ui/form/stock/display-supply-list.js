"use client";
import React, { useEffect, useState } from "react";
import StockTable from "./stock-table";
import useStore from "@/components/store/store";
import HideModal from "./hide-modal";
import axios from "axios";
import Loader from "../../loader/Loader";
const DisplaySupplyList = () => {
  const { addSupplyData } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <dialog id="item-list-table" className="modal p-5">
      <div className="container h-[90dvh] overflow-auto rounded-xl bg-gray-100 p-3">
        <div className="flex justify-end">
          <HideModal id={"item-list-table"} />
        </div>
        <div className="my-5 mt-20 flex flex-col items-center gap-y-5 border-b border-gray-500">
          <h3 className="text-lg font-bold">New Stock List</h3>
          <p className="md:text-md text-sm lg:text-lg">
            Double Check the stock information before submitting
          </p>
        </div>
        <div className="w-full">{isLoading ? <Loader /> : <StockTable />}</div>
        {addSupplyData.length > 0 && (
          <FinishTransaction setIsLoading={setIsLoading} />
        )}
      </div>
    </dialog>
  );
};

export default DisplaySupplyList;

const FinishTransaction = ({ setIsLoading }) => {
  const { addSupplyData, clearAddSupplyData } = useStore();
  const [enableBtn, setEnableBtn] = useState(false);

  const url = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    if (addSupplyData.length > 0) {
      setEnableBtn(false);
    } else {
      setEnableBtn(true);
    }
  }, [addSupplyData]);
  const submitHandler = async () => {
    try {
      if (addSupplyData.length > 0) {
        const directory = "public/images/item-image-dummy";
        await axios.post(`/api/clear-directory`, {
          directory,
        });
        clearAddSupplyData();
      }
    } catch (err) {
      // Handle error
    } finally {
      setEnableBtn(true);
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`btn btn-success mt-5 w-full ${!enableBtn ? "font-bold text-white" : "font-b text-red-600"}`}
      type="submit"
      onClick={submitHandler}
    >
      Done
    </button>
  );
};
