import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, result } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Result!</h2>
        {Object.keys(result).map((key, index) => (
          <p key={index}>
            {key} : {result[key]}%
          </p>
        ))}
        <button className="close-btn" onClick={closeModal}>
          Test again
        </button>
      </div>
    </div>
  );
};

export default Modal;
