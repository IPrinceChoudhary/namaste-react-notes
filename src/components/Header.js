import { useState } from "react";
import { logo } from "../Config";
import { NavLink } from "react-router";

const Title = () => (
  <NavLink to="/" end>
    <h1 id="title3" key="h1">
      {logo}
    </h1>
  </NavLink>
);

const Header = () => {
  const [first, setFirst] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
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
      <div className="loginLogout">
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
