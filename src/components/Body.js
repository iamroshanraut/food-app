import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

// Body component: shows the list of restaurants
const Body = () => {
  // State to store the list of restaurants
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      {/* Filter button: shows only restaurants with rating > 4.2 */}
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
          className="filter-btn"
        >
          Filter
        </button>
      </div>

      {/* Container for all restaurant cards */}
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id} // unique key for React
            resData={restaurant.info} // pass restaurant info to the card
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
