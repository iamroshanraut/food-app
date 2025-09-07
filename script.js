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

// RestaurantCard Component
// This component renders a single restaurant card
// You can pass different restaurant data via props (name, cuisine, location, forTwo, image)
const RestaurantCard = (props) =>{
    const {name,cuisine,location,forTwo,image} = props;
    return(
        <div className="restaurant-card">
            <img className="restaurant-img" src={image}/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h5>{location}</h5>
            <h5>{forTwo}</h5>
        </div>
    )
};

// Body Component
// This component renders multiple RestaurantCard components
// Different restaurant data is passed as props to each card
const Body = () => {
    return(
        <div className="body">
            <RestaurantCard 
            name="China Bistro" 
            cuisine="Japanese, chinese, korean" 
            location="Select City Mall, Saket, Delhi" 
            forTwo="1200 for Two" 
            image = "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1687793147/b573955b816463d0adce9f87a6e30812.jpg"
            />
            <RestaurantCard 
            name="Only Bar" 
            cuisine="Continental, North Indian" 
            location="Raj Lok Building, Nehru Place" 
            forTwo="2200 for Two"
            image= "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1671831467/869e211944e782937f4f7f38b33c85b0.jpg"
            />

        </div>
    )
}

// AppLayout component → Main root component
// (Right now it only renders Header, but later we can add more)
const AppLayout = () => {
    return (
        <div>
            <Header /> 
            <Body />
        </div>
        
    )
};

// Root element of React app (div with id="root" in index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering AppLayout component inside root
root.render(<AppLayout />);
