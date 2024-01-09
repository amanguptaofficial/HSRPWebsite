import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-box">
        <div className="sub-footer-div">
          <h4>Disclaimer</h4>
          <br />
          <p className="disc-text">
            This website is not official website of HSRP Number plate. Our page
            is only to guide peoples or help to how they can book HSRP number
            plate from official website. We are not associated with any
            government filings. These images is copyrights images of official
            website.
          </p>
        </div>
        <div className="sub-footer-div useful">
          <h4>Useful Links</h4>
          <br />
          <div className="nav-elements1">
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
                <Link to="/about">Safe And Secure Transaction</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/term-and-conditions">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h6
        style={{
          textAlign: "center",
          backgroundColor: "black",
          padding: "10px",
          color: "white",
        }}
      >
        HSRP Help © 2023. All Rights Reserved.
      </h6>
    </>
  );
};

export default Footer;
