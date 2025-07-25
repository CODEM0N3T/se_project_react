import React from "react";
import "./DeleteConfirmationModal.css";
import xIcon from "../../assets/xHover.svg";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm, isLoading }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_confirm">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          style={{ backgroundImage: `url(${xIcon})` }}
          disabled={isLoading}
        ></button>
        <p className="modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <div className="modal__buttons">
          <button
            className="modal__button modal__button_confirm"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Yes, delete item"}
          </button>
          <button
            className="modal__button"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
