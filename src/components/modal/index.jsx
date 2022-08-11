import React, { useState } from "react";
import { updatePayment } from "api";
export const Modal = ({
  paymentData: { _id, paid, refund },
  isOpen,
  handleClose,
}) => {
  const [value, setValue] = useState(0);
  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };
  const handleModal = (state) => {
    setValue(0);
    handleClose(state);
  };
  const handleClickValidate = () => {
    updatePayment(_id, value);
  };
  return (
    isOpen && (
      <div
        id="defaultModal"
        className=" fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Remboursement
              </h3>
              <button
                onClick={() => handleModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Quel montant voulez vous rembourser?
              </p>
              <input
                onChange={handleChangeInput}
                value={value}
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                placeholder={0}
              />
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              {parseFloat(value) + parseFloat(refund) > paid ? (
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-white disabled: bg-gray-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Valeur invalide
                </button>
              ) : (
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  onClick={handleClickValidate}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Valider
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
