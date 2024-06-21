import React from "react";
import Badges from "../../Badges/Badges";
import { IconTrash } from "../../icons/regular/trash";
import { rowContentProp } from "../CartItemTable";
import { IconReset } from "../../icons/regular/reset";

interface tableRowProp {
  items: rowContentProp[];
  desiredRows: number;
}

export const TableRow: React.FC<tableRowProp> = ({ items, desiredRows }) => {
  // Create an extended array of the desired length by cycling through the original array
  const extendedItems = Array.from(
    { length: desiredRows },
    (_, index) => items[index % items.length],
  );

  return (
    <>
      {extendedItems.map((item, index) => (
        <tr
          key={index}
          className="border-test p-2 text-center border border-transparent border-b-grayColor last:border-b-transparent hover:border-[#9D9CA4] hover:border-b-[#9D9CA4] rounded-lg my-1"
        >
          <td data-title="Size">{item.size}</td>
          <td data-title="LeadTime">{item.leadTime}</td>
          <td data-title="Status">
            <Badges varient="default" classes="p-3">
              {item.itemStatus}
            </Badges>
          </td>
          <td data-title="Quanttiy">
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                className="border p-2 rounded-lg max-md:w-full"
                placeholder="Qty"
                defaultValue={item.quantity}
              />
              <div className="flex gap-2">
                <IconReset fill="black" size={18} />
                <IconTrash fill="black" size={18} />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};
