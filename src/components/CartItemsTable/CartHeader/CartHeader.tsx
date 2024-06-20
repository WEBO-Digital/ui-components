import Button from "../../button/Button";
import { IconHide } from "../../icons/regular/Hide";
import { IconAdd } from "../../icons/regular/add";
// import { shoe } from "../assets/shoe.png";
export const CartHeader = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex">
        <figure className="w-24 border p-8">
          <img src="../assets/shoe.png" alt="image" />
        </figure>
        <div className="flex flex-col p-4 gap-4">
          <div className="font-semibold text-2xl">V231o Lynx IGS</div>
          <div className="flex gap-4">
            <span>
              SKU <b>V2130</b>
            </span>
            <span>MIDNIGHT BLACK</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end p-4">
        <div className="text-right text-base tracking-wider uppercase">
          <span className="text-primary-500 font-black border-r-2 p-4">
            Remove
          </span>
          <span className="p-4">34353</span>
        </div>
        <div className="flex items-center justify-between gap-8">
          <Button
            size="medium"
            type="button"
            designType={"tertiary"}
            varient={"primary"}
            leftIcon={<IconAdd fill="blue" size={18} />}
            classes="text-blue-500 text-base font-semibold"
          >
            Add more Variant{" "}
          </Button>
          <span>
            Total Selection quantity <b>48 pairs</b>
          </span>
          <span className="flex items-center gap-4">
            <IconHide fill="black" size={18} />
            Hide Varirants
          </span>
        </div>
      </div>
    </div>
  );
};
