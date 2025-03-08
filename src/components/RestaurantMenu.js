import { useParams } from "react-router";
import { IMG_CONFIG_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurantMenu = useRestaurantMenu(id);
  const dispatch = useDispatch()

  const handleItem = (cuisine)=>{
    dispatch(addItem(cuisine))
  }

  if (!restaurantMenu) {
    return <Shimmer />;
  }
  return (
    <div className="flex gap-5">
      <div>
        <h3>{restaurantMenu?.name}</h3>
        <img src={IMG_CONFIG_URL + restaurantMenu?.cloudinaryImageId} alt="" />
        <p>{restaurantMenu?.city}</p>
      </div>
      <div>
        <ul className="flex-col">
          {restaurantMenu?.cuisines?.map((cuisine, index) => {
            return (
              <div key={index} className="flex gap-2 mb-2">
                <li>{cuisine}</li>
                <button className="px-3 border-2 bg-amber-300 cursor-pointer text-sm" onClick={()=>handleItem(cuisine)}>Add item</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
