import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../Config";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // stores original list
  const [restaurant, setRestaurant] = useState([]); // stores filtered list

  useEffect(() => {
    getRestaurant();
  }, []); 

  const getRestaurant = async () => {
    const data = await fetch(RESTAURANT_URL);
    const res = await data.json();
    const restaurantsData =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setAllRestaurants(restaurantsData);
    setRestaurant(restaurantsData);
  };
  return {allRestaurants, restaurant, setRestaurant}
}
export default useRestaurant;