// Header component
// Shows the top part of the app with logo and navigation menu

import { useEffect, useState } from "react";
import { LOGO_URL } from "../assets/images";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="header">
      {/* Logo section */}
      <div className="logo">
        <img
          className="logo-img"
          src={LOGO_URL}
          alt="Food Logo" // alt text for accessibility
        />
      </div>

      {/* Navigation menu */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
