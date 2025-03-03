import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CONFIG_URL } from "../Config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const response = await data.json();
    console.log(response?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(response?.data?.cards[2]?.card?.card?.info);
  };
  // how to read a dynamic url params
  const params = useParams();
  const { id } = params;

  if (!restaurantMenu) {
    return <Shimmer />;
  }
  return (
    <div>
      <h3>{restaurantMenu?.name}</h3>
      <img src={IMG_CONFIG_URL + restaurantMenu?.cloudinaryImageId} alt="" />
      <p>{restaurantMenu?.city}</p>
      <ul>
        {restaurantMenu?.cuisines?.map((cuisine, index) => {
          return <li key={index}>{cuisine}</li>;
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
