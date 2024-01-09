import React from "react";
import "../css/BenifitsOfHSRP.css";
import BenifitsBox from "./BenifitsBox";
import { faCertificate, faCogs, faDotCircle, faFile, faFingerprint, faLeaf, faLock, faPlug, faRuler, faShield, faSitemap, faTrafficLight, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";

const BenifitsOfHSRP = () => {
  return (
    <>
      <div className="box">
        <div className="title">
          <h3>Benefits Of HSRP</h3>
        </div>
        <div className="box-container">
          <BenifitsBox
            icon={faLaptopHouse}
            title="Easy Access"
            color="#E6B0AA"
            content="Get instant access to the latest requirements and procedures, right at your fingertips."
          />
          <BenifitsBox
            icon={faUserSecret}
            title="Enhanced Security"
            color="#D2B4DE"
            content="The tamper-resistant design of HSRPs reduces the risk of theft or tampering with vehicle registration plates, enhancing overall security"
          />
          <BenifitsBox
            icon={faCogs}
            title="Standardization"
            color="#AED6F1"
            content="HSRPs adhere to national standards, promoting uniformity in vehicle registration plates across different states and regions."
          />
          <BenifitsBox
            icon={faLock}
            title="Reduced Vehicle Theft"
            color="#A3E4D7"
            content="The unique identification provided by HSRPs helps in reducing vehicle theft by making it more challenging for thieves to replace plates."
          />
          <BenifitsBox
            icon={faFingerprint}
            title="Easy Verification"
            color="#FAD7A0"
            content="Authorities can easily verify the authenticity of HSRPs, reducing the chances of fraudulent activities related to vehicle registration."
          />
          <BenifitsBox
            icon={faTrafficLight}
            title="Improved Road Safety"
            color="#BB8FCE"
            content="Reflective coatings on HSRPs enhance visibility during low-light conditions, contributing to improved road safety."
          />
          <BenifitsBox
            icon={faFile}
            title="Online Application and Issuance"
            color="#73C6B6"
            content="Many HSRP systems offer online application and issuance processes, making it convenient for vehicle owners to comply with regulations."
          />
          <BenifitsBox
            icon={faSitemap}
            title="Traceability"
            color="#EC7063"
            content="The unique identification number on each HSRP allows for easy traceability of vehicles, which can be valuable for law enforcement and regulatory purposes."
          />
          <BenifitsBox
            icon={faLeaf}
            title="Environmental Benefits"
            color="#B3B6B7"
            content="Some HSRP systems use environmentally friendly materials, contributing to sustainability efforts in the automotive sector."
          />
          <BenifitsBox
            icon={faShield}
            title="Compliance with Regulations"
            color="#F39C12"
            content="HSRPs ensure that vehicles comply with government regulations regarding registration plates, helping maintain order on the roads."
          />
          <BenifitsBox
            icon={faPlug}
            title="Easy Integration with Technology"
            color="#48C9B0"
            content="HSRPs can be easily integrated with modern technology for electronic toll collection, parking systems, and other smart city initiatives."
          />
          <BenifitsBox
            icon={faUserSecret}
            title="Prevention of Misuse"
            color="#6C3483"
            content="The unique serial number and features of HSRPs help prevent the misuse of plates, such as using unauthorized or fake registration plates."
          />
        </div>
      </div>
    </>
  );
};

export default BenifitsOfHSRP;
