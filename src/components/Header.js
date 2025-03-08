import { useState, useContext } from "react";
import { logo } from "../Config";
import { NavLink } from "react-router";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => (
  <NavLink to="/" end>
    <h1 id="title3" key="h1" className="font-extrabold text-4xl">
      {logo}
    </h1>
  </NavLink>
);

const Header = () => {
  const [first, setFirst] = useState(false);
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)

  return (
    <div className="p-3 flex justify-between items-center bg-amber-100">
      <Title />
      <div className="">
        <ul className="flex">
          <li className="pr-3">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="pr-3">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="pr-3">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li className="pr-3">
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Cart - {cartItems.length}
            </NavLink>
          </li>
        </ul>
      </div>
      {isOnline ? "🟢" : "🔴"}
      <p className="text-black">{user.name}</p>
      <div className="loginLogout border-2 p-2 cursor-pointer">
        {!first ? (
          <button
            onClick={() => {
              setFirst(true);
            }}
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              setFirst(false);
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
