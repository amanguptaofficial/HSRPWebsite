import React from "react";
import ProcessBox from "./processBox.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/process.css";

const Process = () => {
  return (
    <div className="box1">
      <div className="title1">
        <h3>PROCESS</h3>
      </div>
      <div className="box-container-process">
        <ProcessBox
          icon={faInfoCircle}
          title="Submit Details"
          color="#82E0AA"
          content="To Apply For HSRP Plate you have to fill the form and Submit the Details in the First Step"
        />
        <ProcessBox
          icon={faHandHoldingDollar}
          title="Payment"
          color="#F7DC6F"
          content="when you Submit the details then you have to Pay some Minimal Charge of Amount."
        />
        <ProcessBox
          icon={faThumbsUp}
          title="Confirm Details"
          color="#45B39D"
          content="When you submit the payment after that all Details has been confirmed by tea"
        />
        <ProcessBox
          icon={faCheckCircle}
          title="Confirm Booking"
          color="#2ECC71"
          content="when Your All Details are confirm then team will be contact you regarding to booking confirm."
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Process;
