import { useState } from "react";
import { logo } from "../Config";
import { NavLink } from "react-router";

const Title = () => (
  <NavLink to="/" end>
    <h1 id="title3" key="h1" className="font-extrabold text-4xl">
      {logo}
    </h1>
  </NavLink>
);

const Header = () => {
  const [first, setFirst] = useState(false);

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
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
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
