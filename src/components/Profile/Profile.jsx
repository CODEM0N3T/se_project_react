import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  onAddClick,
  onEditProfile,
  onSignOut,
  onCardLike,
}) {
  return (
    <div className="profile">
      <SideBar onEditProfile={onEditProfile} onSignOut={onSignOut} />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddClick={onAddClick}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
