import RestaurantCard from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { filterRestaurant } from "../utils/helper.js";
import useRestaurant from "../utils/useRestaurant.js";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {allRestaurants, restaurant, setRestaurant} = useRestaurant();

  const {user, setUser} = useContext(UserContext)

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
    <div className="p-5">
      <div className="search-container m-2">
        <input
          type="text"
          className="border-2"
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
          className="bg-amber-600 text-white mx-1 rounded-md px-2 cursor-pointer"
          onClick={() => {
            const data = filterRestaurant(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
        <input type="text" value={user.name} className="border-2" onChange={(e)=>setUser({...user, name: e.target.value})}/>
      </div>
      <div className="flex flex-wrap gap-3">
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
    </div>
  );
};

export default Body;
