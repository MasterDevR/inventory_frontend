"use client";
import React, { useEffect } from "react";
import HideModal from "./hide-modal";
import useStore from "@/components/store/store";
const Modal = () => {
  const { addSupplyData, setsAddSupplyData } = useStore();
  const submitHandler = (e) => {
    console.log("im in");
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const newSupplyData = {};
      formData.forEach((value, key) => {
        newSupplyData[key] = value;
      });
      const itemName = newSupplyData.item;
      const exists = addSupplyData.some((obj) => obj.item === itemName);
      console.log(exists);
      if (exists) {
        return; // Item already exists, exit the handler
      }

      console.log(exists);
      console.log(newSupplyData);
      setsAddSupplyData(newSupplyData);
    } catch (err) {}
  };

  useEffect(() => {
    console.log(addSupplyData);
  }, [addSupplyData]);
  return (
    <dialog id="add-stock" className="modal">
      <div className="modal-box w-full">
        <HideModal id="add-stock" />
        <button
          className="relative w-2/6 rounded-lg border-2 border-green-500 p-2 text-green-500 transition-all delay-75 ease-in-out hover:bg-green-500 hover:text-white lg:w-1/6"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          open modal
        </button>
        <h3 className="pt-2 text-center text-lg font-bold tracking-widest text-black">
          ADD ITEM
        </h3>
        <div className="divider"></div>
        <div className="modal-action flex flex-col">
          <form method="dialog" className="w-full" onSubmit={submitHandler}>
            <label className="input input-bordered flex items-center gap-2">
              Item |
              <input
                type="text"
                className="grow"
                placeholder="Item"
                name="item"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Description |
              <input
                type="text"
                className="grow"
                placeholder="Description"
                name="description"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Measurement |
              <input
                type="text"
                className="grow"
                placeholder="Measurement"
                name="measurement"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Stock No. |
              <input
                type="text"
                className="grow"
                placeholder="Stock No."
                name="stock"
                required
              />
            </label>{" "}
            <label className="input input-bordered flex items-center gap-2">
              Re-order Point |
              <input
                type="text"
                className="grow"
                placeholder="Re-order Point"
                name="order"
                required
              />
            </label>{" "}
            <label className="input input-bordered flex items-center gap-2">
              Quantity |
              <input
                type="text"
                className="grow"
                placeholder="Quantity"
                name="quantity"
                required
              />
            </label>{" "}
            <label className="input input-bordered flex items-center gap-2">
              Reference |
              <input
                type="text"
                className="grow"
                placeholder="Reference"
                name="reference"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              No. Date to Consume |
              <input
                type="text"
                className="grow"
                placeholder="No. Date to Consume"
                name="Consume"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Image |
              <input
                type="file"
                className="grow"
                placeholder="Select Image"
                name="image"
                id="image"
                required
              />
            </label>
            <button
              className="btn btn-success mt-5 w-full font-bold text-white"
              type="submit"
            >
              Finish
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
