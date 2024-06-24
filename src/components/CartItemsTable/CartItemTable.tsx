// import { TableHead } from "./TableHead/TableHead";
import React, { useEffect, useState } from "react";
import { TableRow } from "./TableRow/TableRow";
import "./cartTable.css";
import Pagination from "../Pagination/Pagination";
import { CartHeader } from "./CartHeader/CartHeader";
import TableLoader from "./TableSkeleton";

export interface rowContentProp {
  size: number;
  leadTime: string;
  itemStatus: string;
  quantity: number;
  orderQuantity: number;
  amount: number;
  returnInfo: string;
}
export interface cartTableProps {
  items: rowContentProp[];
  desiredRows: number;
  returnOrder?: boolean;
}
export const CartItemTable: React.FC<cartTableProps> = ({
  items = [
    {
      size: 6,
      leadTime: "5 - 7 Days (Est. 17th Mar, 2024)",
      itemStatus: "badge",
      quantity: 7,
      orderQuantity: 5,
      amount: 232499,
      returnInfo: "dsfsfsfsfsfsfsfsf",
    },
  ],
  desiredRows = 1,
  returnOrder = false,
}) => {
  const totalPages = Math.ceil(items.length);
  const [currentPage, setCurrentPage] = useState(1);
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const [loading, setLoading] = useState(true);
  const [showVariant, setShowVariant] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [returnOrder]);
  return (
    <div className="border-2 rounded-lg border-dashed p-4">
      <CartHeader
        variant="Hide Variant"
        setShowVariant={setShowVariant}
        showVariant={showVariant}
        returnOrder={returnOrder}
      />

      {showVariant && (
        <div className="responsive-table border-dashed border-t-2 border-b-2  bg-white rounded-lg overflow-x-auto pb-2 w-full p-4 transition-all ease-in-out delay-150">
          {loading ? (
            <TableLoader returnOrder={returnOrder} />
          ) : (
            <table className="table-auto w-full text-center ">
              <thead className="uppercase text-primary  text-sm">
                <tr className="border-b border-grayColor p-8 ">
                  <th>Size(Uk)</th>

                  {returnOrder ? (
                    <>
                      <th>Order Quantity</th>
                      <th>Return Quantity</th>
                      <th>Amount</th>
                      <th>Return Info</th>
                    </>
                  ) : (
                    <>
                      <th>Lead Time</th>
                      <th>Item Status</th>
                      <th>Quantity</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                <TableRow
                  items={items}
                  desiredRows={desiredRows}
                  returnOrder={returnOrder}
                />
              </tbody>
            </table>
          )}
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
      )}
    </div>
  );
};
