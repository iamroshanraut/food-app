// Importing React library (needed for JSX)
import React from "react";

// Importing ReactDOM to render React components to the DOM
import ReactDOM from "react-dom/client";

// Header component (functional component)
// Represents the top section of the app with logo and navigation menu
const Header = () => {
    return (
        <div className="header">
            {/* Logo Section */}
            <div className="logo">
                <img 
                    className="logo-img" 
                    src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"
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
    )
};

// AppLayout component → Main root component
// (Right now it only renders Header, but later we can add more)
const AppLayout = () => {
    return (
        <Header />
    )
};

// Root element of React app (div with id="root" in index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering AppLayout component inside root
root.render(<AppLayout />);
