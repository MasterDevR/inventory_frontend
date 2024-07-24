"use client";
import React from "react";
import useStore from "@/components/store/store";
const OpenItemListBtn = () => {
  const { isDisplaySupplyModal, toggleSupplyModal } = useStore();
  const btnHandler = () => {
    document.getElementById("item-list-table").showModal();
    console.log(isDisplaySupplyModal);
    toggleSupplyModal(true);
  };
  return (
    <button
      className="w-auto rounded-lg border-2 border-emerald-500 p-2 text-emerald-500 transition-all delay-75 ease-in-out hover:bg-emerald-500 hover:text-white"
      onClick={btnHandler}
    >
      View
    </button>
  );
};

export default OpenItemListBtn;
