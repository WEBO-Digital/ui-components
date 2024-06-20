// import { TableHead } from "./TableHead/TableHead";
import React, { useState } from "react";
import { TableRow } from "./TableRow/TableRow";
import "./cartTable.css";
import Pagination from "../Pagination/Pagination";
import { CartHeader } from "./CartHeader/CartHeader";
export interface rowContentProp {
  size: number;
  leadTime: string;
  itemStatus: string;
  quantity: number;
}
export interface cartTableProps {
  items: rowContentProp[];
  tableHead: string;
}
export const CartItemTable: React.FC<cartTableProps> = ({ items }) => {
  //dummy
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <CartHeader />
      <div className="responsive-table border-dashed border-t-2 border-b-2  bg-white rounded-lg overflow-x-auto pb-2 w-full p-4 ">
        <table className="table-auto w-full text-center ">
          <thead className="uppercase text-primary  text-sm">
            <tr className="border-b border-grayColor p-8 ">
              <th>Size(Uk)</th>
              <th>Lead Time</th>
              <th>Item Status</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <TableRow items={items} />
          </tbody>
        </table>
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={10}
          totalItems={250}
          currentPage={currentPage}
          showCount={25}
        />
        <div className="text-right p-8 border-t-2 w-full">
          Total: <span className="text-xl font-black">£425.99</span>
        </div>
      </div>
      <CartHeader />
    </>
  );
};
