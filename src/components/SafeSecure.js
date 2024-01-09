import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
const SafeSecure = () => {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            margin: "10px",
            fontFamily: "sans-serif",
          }}
        >
          Safe And Secure Transaction
          {/* <span style={{ color: "green" }}>Safe</span> &{" "}
          <span style={{ color: "skyblue" }}>Secure</span>{" "}
          <span style={{ color: "red" }}>Transaction</span> */}
        </h2>
      </div>

      <Card>
        <Card.Body>
          <Card.Title>Beware of Fraud/Scam</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            We giving an advice to you to read all the following points and
            written things that’s already given in every website in privacy and
            term and conditions Some website do scam with emails that is
            spoofing and phising. Just read all the written things which is
            given in all websites.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Phishing?</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            You know what is phising? If no then i’ll tell. Fraudster try to
            fish your details like:- Personal details, Bank details, etc. Some
            mails are scams which is called phising. If you get any email like
            they was a link in email and they faith you to click on that link
            then your personal data got hacked. These type of mails designed or
            decode like this to fish your personal details.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Spoofing?</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Some mails are spoof they send you a mail for job and then they ask
            for money. They offer many things to disturb your mind and made your
            mindset to pay. When you get mails for any job from any fraudlent
            his/her sender address is fake and sender provide you to all the
            wrong information about himself.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default SafeSecure;
