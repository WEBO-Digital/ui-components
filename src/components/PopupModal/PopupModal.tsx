import React, { ReactNode, useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import { IconClose } from "../icons/regular/close";
export interface PopupProps {
  title: string;
  children: ReactNode;
}
const PopupModal: React.FC<PopupProps> = ({ title, children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <Button
        size="medium"
        type="button"
        designType={"solid"}
        varient={"primary"}
        handleClick={() => setShowModal(true)}
        classes="text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150"
      >
        {title}
      </Button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div
              ref={modalRef}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white p-5 relative">
                {children}
                <span
                  className="-top-3 right-0 absolute"
                  onClick={() => setShowModal(false)}
                >
                  <IconClose fill="red" size={22} />
                </span>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default PopupModal;
