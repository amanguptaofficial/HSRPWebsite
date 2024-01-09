import React from "react";
import "../css/BenifitsBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BenifitsBox = ({ icon, title, content, color }) => {
  return (
    <div>
      <div className="image-box">
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color, fontSize: "2em", margin: "14px" }}
        />
        <br />
        <h4>{title}</h4>
        <br />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BenifitsBox;
