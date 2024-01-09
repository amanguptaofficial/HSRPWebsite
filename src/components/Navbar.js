import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav style={{  position: "sticky",
        top: "0",
        zIndex: "1"}} className="navbar">
      <div className="container">
        <div className="logo">
          {/* <h1>Brand Name</h1> */}
          <img
            src="https://hsrphelp.site/wp-content/uploads/2023/07/logo.jpeg"
            width="40%"
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/refund">Refund and Cancelation </Link>
            </li>
            <li>
              <Link to="/safesecure">Safe And Secure Transaction</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
