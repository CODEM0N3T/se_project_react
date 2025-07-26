import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

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
      title="Edit Profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={values.name}
        onChange={handleChange}
        className="modal__input"
      />
      <input
        name="avatar"
        type="url"
        placeholder="Avatar URL"
        required
        value={values.avatar}
        onChange={handleChange}
        className="modal__input"
      />
    </ModalWithForm>
  );
}
