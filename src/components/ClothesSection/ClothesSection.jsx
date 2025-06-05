import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
  return (
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
  );
}

export default ClothesSection;
