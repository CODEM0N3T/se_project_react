import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./LoginModal.css";

export default function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onSwitchToRegister,
  isLoading,
}) {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <ModalWithForm
      name="login"
      title={<span className="modal__title-register">Log In</span>}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Logging in..." : "Log In"}
    >
      <label className="modal__label-login">
        Email
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
          className="modal__input"
        />
      </label>
      <label className="modal__label-login">
        Password
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
          className="modal__input"
        />
      </label>

      <button
        type="button"
        className="modal__link-auth"
        onClick={onSwitchToRegister}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
}
