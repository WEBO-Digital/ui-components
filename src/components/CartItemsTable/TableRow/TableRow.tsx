import Badges from "../../Badges/Badges";
import { IconAdd } from "../../icons/regular/add";
import { IconTrash } from "../../icons/regular/trash";
import { rowContentProp } from "../CartItemTable";

interface tableRowProp {
  items: rowContentProp[];
}
export const TableRow: React.FC<tableRowProp> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <tr className="border-test p-2 text-center border border-transparent border-b-grayColor last:border-b-transparent hover:border-[#9D9CA4] hover:border-b-[#9D9CA4] rounded-lg my-1">
          <td data-title="Size">{item.size}</td>
          <td data-title="LeadTime">{item.leadTime}</td>
          <td data-title="Status">
            <Badges
              varient="default"
              children={item.itemStatus}
              classes="p-3"
            />
          </td>
          <td data-title="Quanttiy">
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                className="border p-2 rounded-lg"
                placeholder="Qty"
              />
              <IconAdd fill="black" size={18} />
              <IconTrash fill="black" size={18} />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};
