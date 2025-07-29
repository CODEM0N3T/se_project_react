import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import liked from "../../assets/liked.svg";
import unliked from "../../assets/unlike.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked =
    item?.likes && Array.isArray(item.likes) && currentUser
      ? item.likes.includes(currentUser._id)
      : false;

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLikeClick = () => {
    onCardLike(item);
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && currentUser._id && (
          <button className="card__like-button" onClick={handleLikeClick}>
            <img
              src={isLiked ? liked : unliked}
              alt={isLiked ? "Unlike" : "Like"}
              className="card__like-icon"
            />
          </button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
