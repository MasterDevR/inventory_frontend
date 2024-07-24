"use client";
import React, { useEffect, useState } from "react";
import HideModal from "./hide-modal";
import useStore from "@/components/store/store";
import OpenItemListBtn from "./open-item-list-btn";
import styles from "@/public/style/modal-form.module.css";
import axios from "axios";
import SuccessToast from "../../toast/success";
const Modal = () => {
  const { addSupplyData, setsAddSupplyData } = useStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const newSupplyData = {};
      formData.forEach((value, key) => {
        newSupplyData[key] = value;
      });

      const itemName = newSupplyData.item;
      const exists = addSupplyData.some((obj) => obj.item === itemName);
      if (exists) {
        return;
      }
      const response = await axios.post(
        "/api/upload",
        {
          image: newSupplyData.image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response.data);
      setIsSuccess(true);
      setsAddSupplyData(newSupplyData);
      console.log(addSupplyData);
    } catch (err) {
      console.log("Cauth ERROR ", err);
    } finally {
      setIsSuccess(false);
    }
  };

  return (
    <dialog id="add-stock" className="modal">
      {isSuccess && <SuccessToast message="Adding Success." />}
      <div className="modal-box max-w-5xl">
        <div className="flex items-center justify-between">
          <OpenItemListBtn />
          <HideModal id="add-stock" />
        </div>
        <h3 className="pt-2 text-center text-lg font-bold tracking-widest text-black">
          ADD ITEM
        </h3>
        <div className="divider"></div>
        <div className="modal-action flex flex-col">
          <form
            method="dialog"
            className="flex w-full flex-wrap justify-between gap-5"
            onSubmit={submitHandler}
          >
            <div className={`${styles.inputGroup} `}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="item"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Item
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="description"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Description
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="measurement"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Measurement
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="stock"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Stock No.
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="order"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Re-Order Point
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="quantity"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Quantity
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="reference"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                Reference
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="userInput"
                className={styles.input}
                name="consume"
                required
              />
              <label className={styles.userLabel} htmlFor="userInput">
                No. Of Date To Consume
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="file"
                id="userInput"
                className={styles.input}
                name="image"
                required
                accept="image/jpeg, image/png"
              />
            </div>
            <button
              className="btn btn-success mt-5 w-full font-bold text-white"
              type="submit"
            >
              Add to list
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
