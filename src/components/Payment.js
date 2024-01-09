import React from "react";
import "../css/payment.css";
import Footer from "./Footer";
const Payment = () => {
  return (
    <>
      <div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "skyblue",
            textAlign: "center",
          }}
        >
          <h3>
            Scan Q
            <span style={{ borderBottom: "4px solid red" }}>R To Pay Pl</span>
            ate Fee..
          </h3>
        </div>
        <div className="qr-code-container">
          <img src="https://hsrphelp.site/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-15-at-19.58.37_17c64932.jpg" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
