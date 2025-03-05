import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const response = await data.json();
    setRestaurantMenu(response?.data?.cards[2]?.card?.card?.info);
  };
  return restaurantMenu;
};

export default useRestaurantMenu;