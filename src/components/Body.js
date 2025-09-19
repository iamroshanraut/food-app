import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";
import Shimmer from "./shimmer";

// Body component: shows the list of restaurants
const Body = () => {
  // State to store the list of restaurants
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="toolbar">
        {/* Search Bar */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filtered);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        {/* Filter button: shows only restaurants with rating > 4.2 */}
        <div className="filter">
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
            className="filter-btn"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Container for all restaurant cards */}
      <div className="res-container">
        {filteredRestaurant.length === 0 ? (
          <h2>No restaurants found 🚫</h2>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant.info}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
