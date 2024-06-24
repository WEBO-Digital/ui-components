import Button from "../../button/Button";
import { icons } from "../../icons/IconsComponent";
import { IconHide } from "../../icons/regular/Hide";
import { IconAdd } from "../../icons/regular/add";
import { Shoe } from "../assets/Shoe";
interface cartHeaderProps {
  variant?: string;
  icon?: typeof icons;
}
export const CartHeader: React.FC<cartHeaderProps> = ({ variant }) => {
  return (
    <div className="flex justify-between items-center py-4 max-md:flex-col">
      <div className="flex max-md:flex-col justify-start items-center">
        <figure className="w-24 border rounded-lg shadow-lg p-2">
          {<Shoe />}
        </figure>
        <div className="flex flex-col p-4 gap-4">
          <div className="font-semibold text-xl">V231o Lynx IGS</div>
          <div className="flex gap-4 text-sm">
            <span className="text-sm">
              SKU <b>V2130</b>
            </span>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-4 h-4 bg-black rounded-full"></span>MIDNIGHT
              BLACK
            </div>
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
        <div className="flex items-center justify-between gap-8 max-md:flex-col md:justify-start">
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
          <span className="flex items-center gap-4 font-semibold text-xl">
            <IconHide fill="black" size={18} />
            {variant}
          </span>
        </div>
      </div>
    </div>
  );
};
