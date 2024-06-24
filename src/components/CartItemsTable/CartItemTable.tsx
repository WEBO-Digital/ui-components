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
  desiredRows: number;
  variant?: string;
}
export const CartItemTable: React.FC<cartTableProps> = ({
  items,
  desiredRows,
  variant = "Show Variant",
}) => {
  //dummy
  const totalPages = Math.ceil(items.length);
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div className="border-2 rounded-lg border-dashed p-4">
      <CartHeader variant="Hide Variant" />
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
            <TableRow items={items} desiredRows={desiredRows} />
          </tbody>
        </table>
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={desiredRows}
          currentPage={currentPage}
          showCount={8}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
        <div className="text-right p-8 border-t-2 w-full text-base ">
          Total: <span className="text-xl font-black">£425.99</span>
        </div>
      </div>
      <CartHeader variant={variant} />
    </div>
  );
};
