import { useState } from "react";
import Button from "../button/Button";
import { IconClose } from "../icons/regular/close";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const checkButton = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        size="medium"
        type="button"
        designType={"solid"}
        varient={"primary"}
        handleClick={() => setShowModal(true)}
        classes="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Open Popup
      </Button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <Button
                    size="medium"
                    type="button"
                    designType={"solid"}
                    varient={"primary"}
                    classes="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    handleClick={() => setShowModal(false)}
                  >
                    <IconClose size={24} fill="black" />
                  </Button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vel minus sed atque hic veritatis mollitia esse ipsum iure
                    sint quos at nisi, fuga eius, sequi maxime sit. Reiciendis,
                    quas quidem!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => checkButton()}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default PopupModal;
