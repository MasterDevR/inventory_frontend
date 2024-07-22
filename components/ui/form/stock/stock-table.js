"use client";
import useStore from "@/components/store/store";
import React, { useEffect } from "react";

const StockTable = () => {
  const { addSupplyData } = useStore();

  return (
    <div className="w-full overflow-x-auto">
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
          </tr>
        </thead>
        <tbody>
          {addSupplyData?.length > 0 ? (
            addSupplyData.map((data, index) => (
              <tr className="bg-base-200" key={index}>
                <td>{data.item}</td>
                <td>{data.description}</td>
                <td>{data.measurement}</td>
                <td>{data.stock}</td>
                <td>{data.order}</td>
                <td>{data.quantity}</td>
                <td>{data.reference}</td>
                <td>{data.Consume}</td>
                <td>{data.image?.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
              <th>No Data Found.</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
