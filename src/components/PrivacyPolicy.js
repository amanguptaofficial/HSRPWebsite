import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
const PrivacyPolicy = () => {
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
          Privacy Policy
        </h2>
        <Card.Body>
          {/* <Card.Title>Refund Policy</Card.Title> */}
          {/* <Card.Subtitle style={{fontSize:'20px'}} className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Welcome to [HSRP Guide Website]! This Privacy Policy outlines how we
            collect, use, disclose, and protect the information you provide
            while using our website to guide you through the process of booking
            High-Security Registration Plates (HSRP) and stay updated with the
            latest news. By using our website, you agree to the terms outlined
            in this Privacy Policy.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>1. Information We Collect</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Personal Information
          </Card.Subtitle>
          <Card.Text>
            When you book HSRP through our website, we may collect personal
            information such as your name, contact details, and vehicle
            registration details to facilitate the booking process.
          </Card.Text>

          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Newsletter Subscription
          </Card.Subtitle>
          <Card.Text>
            If you choose to subscribe to our newsletter for the latest HSRP
            news, we collect your email address.{" "}
          </Card.Text>
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Non-Personal Information
          </Card.Subtitle>
          <Card.Text>
            We automatically collect non-personal information, including IP
            addresses, browser types, and device information, to improve our
            website's performance.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>2. How We Use Your Information</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; HSRP Booking Process:
          </Card.Subtitle>
          <Card.Text>
            Your personal information is used solely for the purpose of
            facilitating the HSRP booking process, including verification and
            communication regarding your application.
          </Card.Text>

          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Newsletter Communications
          </Card.Subtitle>
          <Card.Text>
            If you subscribe to our newsletter, we use your email address to
            send you updates, news, and relevant information related to HSRP.
          </Card.Text>
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Website Improvement
          </Card.Subtitle>
          <Card.Text>
            Non-personal information helps us analyze user behavior and enhance
            our website's functionality to provide a better user experience.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>3. How We Protect Your Information</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Secure Technologies
          </Card.Subtitle>
          <Card.Text>
            We employ secure technologies to protect your personal and
            non-personal information during transmission.{" "}
          </Card.Text>

          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Access Control
          </Card.Subtitle>
          <Card.Text>
            Access to your personal information is restricted to authorized
            personnel only.{" "}
          </Card.Text>
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Data Encryption
          </Card.Subtitle>
          <Card.Text>
            Sensitive information transmitted on our website is protected
            through encryption protocols.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>4. Third-Party Disclosure</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Service Providers
          </Card.Subtitle>
          <Card.Text>
            We may share your information with trusted third-party service
            providers involved in the HSRP booking process, such as payment
            processors{" "}
          </Card.Text>

          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Legal Compliance
          </Card.Subtitle>
          <Card.Text>
            We may disclose your information when required by law or in response
            to legal requests.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>5. Cookies and Tracking</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Cookies:
          </Card.Subtitle>
          <Card.Text>
            We use cookies to enhance your browsing experience. You can manage
            cookie preferences through your browser settings.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>6. Your Choices</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Opting Out
          </Card.Subtitle>
          <Card.Text>
            You can opt-out of receiving communications from us by following the
            instructions provided in our emails.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>7. Changes to this Privacy Policy</Card.Title>
          <br />
          <Card.Subtitle
            style={{ fontSize: "20px" }}
            className="mb-2 text-muted"
          >
            &#8618; Notification
          </Card.Subtitle>
          <Card.Text>
            Any changes to this Privacy Policy will be communicated through our
            website.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>8. Contact Us</Card.Title>
          <br />

          <Card.Text>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at [Contact Email Address].
            <br />
            Thank you for choosing [HSRP Guide Website]. We are committed to
            providing a secure and informative platform for your HSRP booking
            needs and keeping you updated with the latest news. [HSRP Guide
            Website]
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
