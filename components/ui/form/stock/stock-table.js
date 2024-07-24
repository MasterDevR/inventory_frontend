"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/components/store/store";
import DeleteBtn from "./delete-item";
import Image from "next/image";

const StockTable = () => {
  const { addSupplyData, setsAddSupplyData } = useStore((state) => ({
    addSupplyData: state.addSupplyData,
    setsAddSupplyData: state.setsAddSupplyData,
  }));

  const [editItem, seteditItem] = useState(null);
  const [editData, setEditData] = useState(null);

  const handleEditClick = (data) => {
    setEditData({ ...data });
    seteditItem(data.name);
  };

  // const handleInputChange = (e, key) => {
  //   setEditData({
  //     ...editData,
  //     [key]: e.target.value,
  //   });
  // };

  // const handleSaveClick = () => {
  //   const updatedData = addSupplyData.map((item) =>
  //     item.id === editdata.name ? editData : item,
  //   );
  //   setsAddSupplyData(updatedData);
  //   seteditItem(null);
  // };

  return (
    <div
      className="mt-10 h-56 w-full overflow-auto rounded-lg bg-white"
      id="myTable"
    >
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Measurement</th>
            <th>Stock No.</th>
            <th>Re-order Point</th>
            <th>Quantity</th>
            <th>Reference</th>
            <th>No. Date to Consume</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addSupplyData?.length > 0 ? (
            addSupplyData?.map((data, index) => (
              <tr key={index}>
                <td>
                  {editItem === data.name ? (
                    <input
                      type="text"
                      value={editData.item}
                      onChange={(e) => handleInputChange(e, "item")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.item
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.description}
                      onChange={(e) => handleInputChange(e, "description")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.description
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.measurement}
                      onChange={(e) => handleInputChange(e, "measurement")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.measurement
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.stock}
                      onChange={(e) => handleInputChange(e, "stock")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.stock
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.order}
                      onChange={(e) => handleInputChange(e, "order")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.order
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.quantity}
                      onChange={(e) => handleInputChange(e, "quantity")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.quantity
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.reference}
                      onChange={(e) => handleInputChange(e, "reference")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.reference
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="text"
                      value={editData.consume}
                      onChange={(e) => handleInputChange(e, "consume")}
                      className="w-full rounded border p-1"
                    />
                  ) : (
                    data.consume
                  )}
                </td>
                <td>
                  {editItem === data.item ? (
                    <input
                      type="file"
                      className="w-full rounded border p-1"
                      defaultValue={data.image.name}
                    />
                  ) : (
                    <Image
                      src={`/images/item-image-dummy/${data.image.name}`}
                      width={50}
                      height={50}
                      alt={data.image.name}
                      className="m-auto"
                    />
                  )}
                </td>
                <td>
                  {/* {editItem === data.item ? (
                    <button onClick={handleSaveClick}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(data)}>Edit</button>
                  )} */}
                </td>
                <td>
                  <DeleteBtn data={data.item} image={data.image.name} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11" className="py-4 text-gray-500 lg:text-center">
                No Item Found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
