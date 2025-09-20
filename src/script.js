// Importing React library (needed for JSX)
import React from "react";
// Importing ReactDOM to render React components to the DOM
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// AppLayout component → Main root component
// (Right now it only renders Header, but later we can add more)
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// Root element of React app (div with id="root" in index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering AppLayout component inside root
root.render(<RouterProvider router={appRouter} />);
