import React, { useState } from "react";
import { Modal } from "components";
import { useFetchPayments } from "api";
import { dateFormator } from "utils";
const data = [
  {
    date: "22/09/2021",
    paid: 4.3,
    refund: 2,
    id: 1,
  },
  {
    date: "22/09/2021",
    paid: 430,
    refund: 20,
    id: 2,
  },
  {
    date: "22/09/2021",
    paid: 43,
    refund: 0,
    id: 3,
  },
  {
    date: "22/09/2021",
    paid: 4.3,
    refund: 0,
    id: 4,
  },
];
export const Payment = () => {
  const [isOpen, setOpen] = useState(false);
  const [paymentClicked, setPaymentClicked] = useState(null);
  const [reload, setReload] = useState(0);
  const payements = useFetchPayments(
    JSON.parse(localStorage.getItem("TFA")),
    reload
  );
  const handleModal = (state) => {
    setOpen(state);
  };
  const handleClickPayement = (data) => {
    setPaymentClicked(data);
    setOpen(true);
  };
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-lg drop-shadow p-6">
      <h1
        style={{ backgroundColor: "#faf8fc" }}
        className="text-lg font-bold mb-4 "
      >
        Paiements
      </h1>
      <table className=" w-96 uppercase text-left ">
        <thead style={{ backgroundColor: "#faf8fc" }}>
          <tr className="text-sm text-gray-500 ">
            <th>
              <span className=" font-semibold">Date du paiement</span>{" "}
            </th>
            <th className=" font-semibold">Montant</th>
          </tr>
        </thead>
        <tbody>
          {payements?.payments?.map((obj) => (
            <tr
              onClick={() => handleClickPayement(obj)}
              key={obj._id}
              className="cursor-pointer my-12"
            >
              <td>{dateFormator(obj.createdAt)}</td>
              <td>
                {obj.paid}€{obj.refund !== 0 && <span className="text-red-500">/{obj.refund}€</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        paymentData={paymentClicked ? paymentClicked : data[0]}
        isOpen={isOpen}
        handleClose={handleModal}
      />
    </div>
  );
};
