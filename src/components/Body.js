import { restaurantList } from "../Config.js";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  // let searchText = "text";
  //* hooks are also functions comes with some functionality

  //* every time if we want our variables to be sync with UI(for eg. updating them) we should use state variable as react does not track the normal variables(for eg. we changed using functions)

  // searchText is a local state variable
  const [searchText, setSearchText] = useState("text"); // to create state variables and other is function provided by useState hook
  //* this useState hook returns an array and first element of an array is the variable name

  const [searchClicked, setSearchClicked] = useState("true")

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <h2>{searchClicked}</h2>
        <button onClick={()=>{
          if(searchClicked === "true"){
            setSearchClicked("false")
          }else{
            setSearchClicked("true")
          }
        }}>submit</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((res) => {
          return <RestaurantCard restaurant={res} key={res.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
