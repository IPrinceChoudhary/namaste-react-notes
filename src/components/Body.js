import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const filterRestaurant = (searchText, restaurants) => {
  if (!searchText) {
    return restaurants;
  }
  const searchFilteredRestaurant = restaurants.filter((restaurant) =>
    restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.trim().toLowerCase())
  );
  return searchFilteredRestaurant;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]); // stores original list
  const [restaurant, setRestaurant] = useState([]); // stores filtered list

  useEffect(() => {
    // useEffect function takes 1st arg. call b. fn. and second is dependency array
    getRestaurant();
  }, []); //* dependency array is not dependent on anyone so it will call once after initial render. For e.g. if i put searchText state inside this dependent array it will call useEffect call back fn. every time searchText state changes because it is dependent on that state.

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    const restaurantsData =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurants(restaurantsData);
    setRestaurant(restaurantsData);
  };

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
