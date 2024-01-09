import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
const TermConditions = () => {
  return (
    <>
      <Card style={{ margin: "10px" }}>
        <h2
          style={{
            textAlign: "center",
            margin: "10px",
            fontFamily: "sans-serif",
          }}
        >
          Terms & Conditions
        </h2>
        <Card.Body>
          {/* <Card.Title>Refund Policy</Card.Title> */}
          {/* <Card.Subtitle style={{fontSize:'20px'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Welcome to [HSRP Guide Website]. By accessing or using our website,
            you agree to comply with and be bound by the following terms and
            conditions. If you disagree with any part of these terms, please do
            not use our website.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>1. Acceptance of Terms</Card.Title>
          <br />

          <Card.Text>
            a. By using [HSRP Guide Website], you agree to abide by these Terms
            and Conditions and our Privacy Policy.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>2. User Conduct</Card.Title>
          <br />
          <Card.Text>
            a. You agree to use the website for lawful purposes only and in a
            manner consistent with all applicable laws and regulations.{" "}
          </Card.Text>
          <Card.Text>
            b. You must not engage in any activities that may disrupt or
            interfere with the proper functioning of the website.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>3. HSRP Booking Process</Card.Title>
          <br />

          <Card.Text>
            a. [HSRP Guide Website] provides guidance and information related to
            the HSRP booking process. We are not responsible for the actual HSRP
            booking, which is conducted through official channels.
          </Card.Text>
          <Card.Text>
            b. Users are responsible for providing accurate and up-to-date
            information during the HSRP booking process.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>4. Intellectual Property</Card.Title>
          <br />

          <Card.Text>
            a. The content on [HSRP Guide Website], including text, graphics,
            logos, images, and software, is the property of [HSRP Guide Website]
            and is protected by applicable intellectual property laws
          </Card.Text>
          <Card.Text>
            b. Users may not reproduce, distribute, modify, or republish any
            content from the website without our prior written consent.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>5. External Links</Card.Title>
          <br />

          <Card.Text>
            a. [HSRP Guide Website] may contain links to third-party websites.
            We do not endorse or control the content of these websites and are
            not responsible for their practices or policies.
          </Card.Text>
          <Card.Text>
            b. Users access external links at their own risk, and [HSRP Guide
            Website] is not liable for any damages or losses incurred.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>6. Termination</Card.Title>
          <br />

          <Card.Text>
            a. [HSRP Guide Website] reserves the right to terminate or suspend
            access to the website, without notice, for any reason, including a
            breach of these terms.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>7. Limitation of Liability</Card.Title>
          <br />

          <Card.Text>
            a. [HSRP Guide Website] is not liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of your
            access to or use of the website.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>8. Changes to Terms and Conditions</Card.Title>
          <br />

          <Card.Text>
            a. [HSRP Guide Website] may revise these terms at any time without
            notice. Users are responsible for reviewing the terms periodically.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>9. Governing Law</Card.Title>
          <br />

          <Card.Text>
            a. These terms and conditions are governed by and construed in
            accordance with the laws of [Your Jurisdiction].
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>10. Contact Information</Card.Title>
          <br />

          <Card.Text>
            a. If you have any questions or concerns regarding these terms and
            conditions, please contact us at [Contact Email Address].
          </Card.Text>
          <br />
          <Card.Text>
            Thank you for using [HSRP Guide Website]. We appreciate your
            cooperation and hope our website enhances your experience with the
            HSRP booking process.
            <br />
            [HSRP Guide Website]
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default TermConditions;
