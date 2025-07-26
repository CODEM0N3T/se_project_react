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
  onSignOut,
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
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__user-container">
            <p className="header__username">{currentUser?.name}</p>
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
          <button className="header__signout" onClick={onSignOut}>
            Sign out
          </button>
        </>
      ) : (
        <div className="header__auth-links">
          <button onClick={onSignUpClick} className="header__link">
            Sign Up
          </button>
          <button onClick={onSignInClick} className="header__link">
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
