const RestaurantCard = ({restaurant}) => {
  const {cloudinaryImageId, name, cuisines, sla} = restaurant?.info
  return(
  <div className="card">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{sla?.lastMileTravelString}</h4>
  </div>
)};

export default RestaurantCard