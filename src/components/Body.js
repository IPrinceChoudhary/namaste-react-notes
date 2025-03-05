import RestaurantCard from "./RestaurantCard";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { filterRestaurant } from "../utils/helper.js";
import useRestaurant from "../utils/useRestaurant.js";
import useOnline from "../utils/useOnline.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {allRestaurants, restaurant, setRestaurant} = useRestaurant();

  const isOnline = useOnline()
  if(!isOnline){
    return <h1>Offline, please check your internet connection</h1>
  }

  // don't render component (early return)
  if (!allRestaurants) return null;

  if (restaurant?.length === 0 && allRestaurants?.length > 0) {
    return <h3>NO restaurant matches your filter !!!</h3>;
  }

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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const data = filterRestaurant(searchText, allRestaurants);
              setRestaurant(data);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurant(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          restaurant.map((res) => {
            return (
              <Link to={`restaurant/${res?.info?.id}`} key={res?.info?.id}>
                <RestaurantCard restaurant={res} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
