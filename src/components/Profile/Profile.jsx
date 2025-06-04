import "./Profile.css";
import avatar from "../../assets/avatar.png";
import ItemCard from "../ItemCard/ItemCard";

function Profile({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <div className="profile__sidebar-container">
          <img src={avatar} alt="User avatar" className="profile__avatar" />
          <p className="profile__username">Terrence Tegegne</p>
        </div>
      </div>
      <div className="profile__clothes-section">
        <div className="profile__header">
          <h2 className="profile__title">Your items</h2>
          <button
            className="profile__add-button"
            onClick={onAddClick}
            type="button"
          >
            + Add new
          </button>
        </div>
        <ul className="profile__items-list">
          {clothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
