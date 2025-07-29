import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,

  onSignInClick,
  onSignUpClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const avatarPlaceholder = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : "?";

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />

      <div className="header__auth-links">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__link"
            >
              + Add clothes
            </button>
          </>
        ) : (
          <>
            <button onClick={onSignUpClick} className="header__link">
              Sign Up
            </button>
            <button onClick={onSignInClick} className="header__link">
              Log In
            </button>
          </>
        )}
      </div>

      {isLoggedIn && (
        <Link to="/profile" className="header__user-container">
          <span className="header__username">{currentUser?.name}</span>
          {currentUser?.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="header__avatar"
            />
          ) : (
            <div className="header__avatar header__avatar_placeholder">
              {avatarPlaceholder}
            </div>
          )}
        </Link>
      )}
    </header>
  );
}

export default Header;
