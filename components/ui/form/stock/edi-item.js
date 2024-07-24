"use client";
import React from "react";
import useStore from "@/components/store/store";
const SaveBtn = ({ id }) => {
  const { addSupplyData, setsAddSupplyData } = useStore((state) => ({
    addSupplyData: state.addSupplyData,
    setsAddSupplyData: state.setsAddSupplyData,
  }));

  const deleteBtn = () => {
    const updatedData = addSupplyData.filter((item) => item.id !== id);
    setsAddSupplyData(updatedData);
  };
  return (
    <button
      onClick={deleteBtn}
      className="flex w-auto justify-center rounded-lg border-2 border-red-500 p-1 text-red-500 transition-all delay-75 ease-in-out hover:bg-red-500 hover:text-white"
    >
      Delete
    </button>
  );
};

export default SaveBtn;
