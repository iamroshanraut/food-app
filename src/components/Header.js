// Header component (functional component)

import { LOGO_URL } from "../assets/images";

// Represents the top section of the app with logo and navigation menu
const Header = () => {
  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo">
        <img
          className="logo-img"
          src={LOGO_URL}
          alt="Food Logo" /* alt added for accessibility */
        />
      </div>

      {/* Navigation Section */}
      <div className="nav-itmes">
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
