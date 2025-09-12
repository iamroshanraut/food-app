import RestaurantCard from "./RestaurantCard";
import resList from "../utils/resList";

// Body Component
// This component renders multiple RestaurantCard components
// Different restaurant data is passed as props to each card
const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id} // unique key required by React
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
