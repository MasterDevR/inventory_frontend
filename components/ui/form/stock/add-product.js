"use client";
import React from "react";
import { GrAdd } from "react-icons/gr";
import Modal from "./modal";
import SupplyList from "./display-supply-list";
const AddProduct = () => {
  const modalHandler = () => {
    document.getElementById("add-stock").showModal();
  };

  return (
    <div>
      <button
        className="btn btn-success font-bold text-white"
        onClick={modalHandler}
      >
        <GrAdd size={"1.5rem"} color="white" className="block lg:hidden" />
        <span className="hidden md:block">ADD ITEM</span>
      </button>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      <SupplyList />
      <Modal />
    </div>
  );
};

export default AddProduct;
