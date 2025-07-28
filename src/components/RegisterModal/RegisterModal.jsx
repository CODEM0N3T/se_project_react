import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./RegisterModal.css";

export default function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  onSwitchToLogin,
  isLoading,
  errorMessage,
}) {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <ModalWithForm
      name="register"
      title={<span className="modal__title-register">Sign Up</span>}
      buttonText={isLoading ? "Signing up..." : "Sign Up"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonClassName={
        values.email && values.password
          ? "modal__submit-register modal__submit-register--active"
          : "modal__submit-register"
      }
      isSubmitDisabled={
        !values.email || !values.password || !values.name || !values.avatar
      }
    >
      <label className="modal__label-register">
        Email*
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
          className="modal__input-register"
        />
      </label>
      <label className="modal__label-register">
        Password*
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
          className="modal__input-register"
        />
      </label>
      <label className="modal__label-register">
        Name *
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
          className="modal__input-register"
        />
      </label>
      <label className="modal__label-register">
        Avatar URL *
        <input
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
          className="modal__input-register"
        />
      </label>
      {errorMessage && <p className="modal__error-message">{errorMessage}</p>}
      <button
        type="button"
        className="modal__link-auth"
        onClick={onSwitchToLogin}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
}
