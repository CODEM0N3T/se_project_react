import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-container">
        <img src={avatar} alt="User avatar" className="profile__avatar" />
        <p className="profile__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
