"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
const HideModal = ({ id }) => {
  const modalHandler = () => {
    document.getElementById(`${id}`).close();
  };
  return (
    <button
      className="flex w-auto justify-center rounded-lg border-2 border-red-500 p-2 text-red-500 transition-all delay-75 ease-in-out hover:bg-red-500 hover:text-white"
      onClick={modalHandler}
    >
      <RxCross2 size={"1.5rem"} className="block lg:hidden" />
      <span className="hidden md:block">Close</span>
    </button>
  );
};

export default HideModal;
