import "../css/body.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import SmallCheckIcon from "../utils/SmallCheckIcon";
import BenifitsOfHSRP from "./BenifitsOfHSRP";
import Process from "./process";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const [validated, setValidated] = useState(false);
  const [plateNumber, setPlatNumber] = useState("");
  const [state, setState] = useState("");
  const [vehicleNumber, setVehicle] = useState("");
  const [name, setUserName] = useState("");
  const [mobile, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  useEffect(() => {}, []);

  async function saveFormData(data) {
    let res = await axios.post(
        "https://hsrp-9ca53947876f.herokuapp.com/api/v1/hrsp/vehicle/upload",
      data
    );
   
    if(res?.data?.code==200){
      
    }
   
  }

  function callMeToRedirectPayementPage() {
    window.open("/payment");
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity()) {
      let obj = { plateNumber, state, name, mobile, emailId, vehicleNumber };
      saveFormData(obj);
      callMeToRedirectPayementPage();
      form.reset();
      setValidated(false);
    }
  };
  function setPlatNum(number) {
    setPlatNumber(number);
  }
  function setStateName(state) {
    setState(state);
  }
  function setVehicleNumber(event) {
    setVehicle(event?.target?.value);
  }
  function setName(event) {
    setUserName(event?.target?.value);
  }

  function setMobile(event) {
    
    setMobileNumber(event?.target?.value);
  }
  function setEmail(event) {

    setEmailId(event?.target?.value);
  }

  return (
    <>
      <div className="parent-container">
        <div className="main-head-line">
          <h2 className="head-line">APPLY HSRP Online</h2>
        </div>
        {/* form start */}
        <div className="parent-body-container">
          <div className="child">
            <div style={{ margin: "40px", marginTop: "0px" }}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label htmlFor="basic-url">
                  Select Plate Type/ प्लेट प्रकार *
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  size="lg"
                  onChange={(event) => setPlatNum(event.target.value)}
                >
                  <option>Select Plate Type... </option>
                  <option value="Two Wheeler">Two Wheeler</option>
                  <option value="Three Wheeler">Three Wheeler</option>
                  <option value="Four Vehicle">Four Vehicle</option>
                </Form.Select>
                <br />
                <Form.Label htmlFor="basic-url">State /राज्य *</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  size="lg"
                  onChange={(event) => setStateName(event.target.value)}
                >
                  <option>Select State... </option>
                  {indianStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Select>
                <br />
                <Form.Label htmlFor="basic-url">
                  Vehicle Registration No /वाहन पंजीकरण संख्या *
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Vehicle Registration No
                  </InputGroup.Text>
                  <Form.Control
                    required
                    style={{width:'55%'}}
                    type="text"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={setVehicleNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your Vehicle Registration No
                  </Form.Control.Feedback>
                </InputGroup>
                <br />
                <Form.Label htmlFor="basic-url">
                  Your Name /आवेदक का नाम *
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Your Name
                  </InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={setName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name
                  </Form.Control.Feedback>
                </InputGroup>
                <br />
                <Form.Label htmlFor="basic-url">
                  Mobile No /मोबाइल नंबर *
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Mobile No
                  </InputGroup.Text>
                  <Form.Control
                    maxLength="10"
                    pattern="^\d{10}$"
                    required
                    type="text"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={setMobile}
                  />
                  <Form.Control.Feedback type="invalid">
                  Please provide a valid 10-digit mobile number.
                  </Form.Control.Feedback>
                </InputGroup>
                <br />
                <Form.Label htmlFor="basic-url">
                  E-mail ID /ईमेल आईडी *
                </Form.Label>
                <InputGroup className="mb-3" size="lg">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    E-mail ID
                  </InputGroup.Text>
                  <Form.Control
                    pattern="^[a-zA-Z0-9](\.?[a-zA-Z0-9]){2,}@gmail\.com$"
                    type="email"
                    aria-label="Default"
                    required
                    aria-describedby="inputGroup-sizing-default"
                    onChange={setEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address (only gmail id accepeted )
                  </Form.Control.Feedback>
                </InputGroup>
                <br />
                <div className="btn-33">
                <button type="submit" class="button-33" role="button"> Clik To Submit</button>

                </div>
                {/* <Button  variant="primary">
                  Clik To Submit
                </Button>{" "} */}
              </Form>
            </div>
          </div>

          <div className="child">
            <h3 className="key-features">Key Features </h3>

            <div className="key-continer">
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  Security Hologram: HSRPs often include a security hologram
                  that is difficult to replicate, providing a visual
                  authentication feature.
                </div>
              </div>

              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Chromium-Based Ashoka Chakra: The Ashoka Chakra on HSRPs is
                  typically made using chromium, making it non-reproducible and
                  adding an additional layer of security.
                </div>
              </div>

              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Non-Removable Snap Lock: HSRPs are equipped with a
                  non-removable snap lock system, making it challenging for
                  unauthorized individuals to tamper with or remove the plate.
                </div>
              </div>

              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Unique Serial Number:Each HSRP is assigned a unique serial
                  number, providing individual identification for every plate
                  issued.
                </div>
              </div>
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Hot Stamping:Information on HSRPs is often hot-stamped,
                  ensuring that details like the registration number and other
                  identifiers are securely imprinted.
                </div>
              </div>
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Security Features for Stickers:If HSRPs come with stickers
                  (e.g., for fuel type or pollution norms), these stickers may
                  have additional security features to prevent tampering.{" "}
                </div>
              </div>
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Reflectorization:HSRPs are designed with reflectorized
                  materials to enhance visibility during low-light conditions,
                  contributing to road safety.{" "}
                </div>
              </div>
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  Tamper-Evident:Tampering with an HSRP is made difficult due to
                  its design and materials, providing a level of evidence in
                  case of unauthorized alterations.{" "}
                </div>
              </div>
              <div classname="key-con-para" style={{ display: "flex" }}>
                <div className="smallCheckIconDiv">
                  {" "}
                  <SmallCheckIcon />
                </div>
                <div className="textDiv">
                  {" "}
                  National Standards Compliance:HSRPs adhere to national
                  standards, ensuring consistency in design and security
                  features across different regions.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BenifitsOfHSRP />
      <Process />
      <Footer />
    </>
  );
};

export default Body;
