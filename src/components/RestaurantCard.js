import { IMG_CONFIG_URL } from "../Config";

const RestaurantCard = ({restaurant}) => {

  const {cloudinaryImageId, name, cuisines, sla} = restaurant?.info
  return(
  <div className="card">
    <img src={IMG_CONFIG_URL+cloudinaryImageId} alt="" />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{sla?.lastMileTravelString}</h4>
  </div>
)};

export default RestaurantCard