// Header component
// Shows the top part of the app with logo and navigation menu

import { LOGO_URL } from "../assets/images";

const Header = () => {
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
