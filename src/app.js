import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.js";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Router,
} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Body from "./components/Body.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SafeSecure from "./components/SafeSecure.js";
import Refund from "./components/Refund.js";
import TermConditions from "./components/TermConditions.js";
import PrivacyPolicy from "./components/PrivacyPolicy.js";
import Payment from "./components/Payment.js";
import "../style.css";

export const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />

      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
      {
        path: "/safesecure",
        element: <SafeSecure />,
      },
      {
        path: "/refund",
        element: <Refund />,
      },
      {
        path: "/term-and-conditions",
        element: <TermConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
    errorElement: <Error />,
  },
]);

// export default App
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
