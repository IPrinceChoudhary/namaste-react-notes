import { useState, useContext } from "react";
import { logo } from "../Config";
import { NavLink } from "react-router";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import foodLogo from "../assets/images/foodLogo.png";

const Title = () => (
  <NavLink to="/" end>
    <img
      data-testid="logo"
      id="title3"
      key="image"
      className="h-16"
      src={foodLogo}
      alt="logo"
    />
    {/* jest recognizes data-testid */}
  </NavLink>
);

const Header = () => {
  const [first, setFirst] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="p-3 flex justify-between items-center bg-amber-100">
      <Title />
      <div className="">
        <ul className="flex">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <li className="pr-3">Home</li>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <li className="pr-3">About</li>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <li className="pr-3">Contact</li>
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "red" : "black",
            })}
          >
            <li data-testid="cart" className="pr-3">
              Cart - {cartItems.length}
            </li>
          </NavLink>
        </ul>
      </div>
      <p data-testid="online-status">{isOnline ? "🟢" : "🔴"}</p>
      <p className="text-black">{user?.name}</p>
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
