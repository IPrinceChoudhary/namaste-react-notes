import { useParams } from "react-router";
import { IMG_CONFIG_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
   const restaurantMenu = useRestaurantMenu(id);

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
