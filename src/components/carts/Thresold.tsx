import { IconInfo } from "../icons/fill/Info";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Thresold = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <h6>Free Carriage Thresold</h6>
        <IconInfo size={18} fill="gray" />
      </div>
      <ProgressBar color="blue" min={0} max={100} percentage={40} />
    </div>
  );
};
