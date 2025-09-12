// RestaurantCard Component
// Shows details of a single restaurant

import { CDN_URL } from "../assets/images";

// You can pass different restaurant data via props (name, cuisines, location, cost, image, etc.)
const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure the data for easy use
  const {
    name,
    cuisines,
    areaName,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    sla: { deliveryTime },
  } = resData;

  return (
    <div className="restaurant-card">
      {/* Restaurant image */}
      <img
        className="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Restaurant details */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Star</h5>
      <h5>{deliveryTime} Mins</h5>
    </div>
  );
};

export default RestaurantCard;
