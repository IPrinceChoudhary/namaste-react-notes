import { restaurantList } from "../Config.js";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterRestaurant = (searchText, restaurants) => {
  if(!searchText){
    return restaurants
  }
  const searchFilteredRestaurant = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
  );
  return searchFilteredRestaurant
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants] = useState(restaurantList); // stores original list
  const [restaurant, setRestaurant] = useState(restaurantList); // stores filtered list

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              const data = filterRestaurant(searchText, allRestaurants);
              setRestaurant(data);
            }
          }}
        />
        <button
          className="search-btn"
          // need to filter data
          onClick={() => {
            const data = filterRestaurant(searchText, allRestaurants);
            // update the restaurants
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurant.map((res) => {
          return <RestaurantCard restaurant={res} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
