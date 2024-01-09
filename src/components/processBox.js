import React from "react";
import "../css/processBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProcessBox = ({ icon, title, content, color }) => {
  return (
    <div>
      <div class="image-box-process">
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color, fontSize: "2em" }}
        />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ProcessBox;
