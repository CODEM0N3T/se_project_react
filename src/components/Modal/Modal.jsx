// components/Modal/Modal.jsx
import React from "react";
import useModalClose from "../../hooks/useModalClose";
import "./Modal.css"; // add a universal modal style sheet if not yet created

export const Modal = ({ name, isOpen, onClose, children }) => {
  useModalClose(isOpen, onClose);

  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        {children}
        <button
          className="modal__close"
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default Modal;
