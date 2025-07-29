import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const avatarPlaceholder = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-container">
        {currentUser.avatar ? (
          <img
            src={currentUser.avatar}
            alt={`${currentUser.name}'s avatar`}
            className="profile__avatar"
          />
        ) : (
          <div className="profile__avatar profile__avatar_placeholder">
            {avatarPlaceholder}
          </div>
        )}
        <p className="profile__username">{currentUser.name}</p>
      </div>

      <button className="profile__button" onClick={onEditProfile}>
        Change profile data
      </button>

      <button
        className="profile__button profile__button_logout"
        onClick={onSignOut}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;
