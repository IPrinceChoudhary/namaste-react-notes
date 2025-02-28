import { restaurantList } from "../Config.js";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((res)=>{
        return <RestaurantCard restaurant={res} key={res.info.id}/>
      })}
    </div>
  );
};

export default Body