"use client";
import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useStore from "@/components/store/store";
import axios from "axios";
axios;
const DeleteBtn = ({ data, image }) => {
  const { addSupplyData, overrideSupplyData } = useStore();

  const deleteBtn = async () => {
    await axios.post("/api/delete", { image });
    const updatedData = addSupplyData.filter((Item) => {
      return Item.item !== data;
    });
    overrideSupplyData(updatedData);
  };

  return (
    <button
      onClick={deleteBtn}
      className="m-auto flex w-full items-center justify-center gap-x-1 rounded-lg border-2 border-red-500 py-1 text-red-500 transition-all delay-75 ease-in-out hover:bg-red-500 hover:text-white"
    >
      <FaTrashAlt size={"1rem"} />
      <span className="hidden md:block">Delete</span>
    </button>
  );
};

export default DeleteBtn;
