"use client";
import React from "react";
import StockTable from "./stock-table";
const DisplaySupplyList = () => {
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="text-lg font-bold">New Stock List</h3>
        <p className="py-4">
          Double Check the stock information before submitting
        </p>
        <div className="modal-action flex flex-col">
          <StockTable />

          <button
            className="btn mt-5"
            onClick={() => {
              document.getElementById("my_modal_4").close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DisplaySupplyList;
