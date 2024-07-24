"use client";
import React from "react";
import { GrAdd } from "react-icons/gr";
import Modal from "./modal";
import DisplaySupplyList from "@/components/ui/form/stock/display-supply-list";
import useStore from "@/components/store/store";

const AddProduct = () => {
  const { isDisplaySupplyModal } = useStore();

  const modalHandler = () => {
    document.getElementById("add-stock").showModal();
  };

  return (
    <div>
      <button className="btn btn-success text-white" onClick={modalHandler}>
        <span>ADD ITEM</span>
      </button>
      <DisplaySupplyList />
      <Modal />
    </div>
  );
};

export default AddProduct;
