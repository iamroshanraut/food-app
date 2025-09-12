// RestaurantCard Component
// This component renders a single restaurant card

import { CDN_URL } from "../assets/images";

// You can pass different restaurant data via props (name, cuisine, location, forTwo, image)
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, areaName, costForTwo, image } = resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
