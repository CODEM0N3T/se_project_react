import "./ModalWithForm.css";
import { Modal } from "../Modal/Modal";
import xIcon from "../../assets/xHover.svg";

function ModalWithForm({
  name,
  children,
  buttonText,
  buttonClassName,
  isSubmitDisabled,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <Modal name={name} isOpen={isOpen} onClose={onClose}>
      <h2 className="modal__title">{title}</h2>
      <button
        onClick={onClose}
        type="button"
        className="modal__close"
        style={{ backgroundImage: `url(${xIcon})` }}
        aria-label="Close"
      />
      <form onSubmit={onSubmit} className="modal__form">
        {children}
        <button
          type="submit"
          className={buttonClassName}
          disabled={isSubmitDisabled}
        >
          {buttonText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
