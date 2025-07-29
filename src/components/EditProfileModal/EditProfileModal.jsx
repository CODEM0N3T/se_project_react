import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import "./EditProfileModal.css";

export default function EditProfileModal({
  isOpen,
  onClose,
  currentUser,
  onUpdateUser,
}) {
  const { values, handleChange, setValues } = useForm({ name: "", avatar: "" });

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(values);
    onClose();
  };

  return (
    <ModalWithForm
      name="edit-profile"
      title={<span className="modal__title-register">Change profile data</span>}
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonClassName={
        values.email && values.password
          ? "modal__submit-edit "
          : "modal__submit-edit"
      }
    >
      <label className="modal__label-edit">
        Name *
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
          className="modal__input"
        />
      </label>
      <label className="modal__label-edit">
        Avatar *
        <input
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
          className="modal__input"
        />
      </label>
    </ModalWithForm>
  );
}
