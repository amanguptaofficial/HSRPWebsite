import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
const Refund = () => {
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
          Refund and Cancelation
        </h2>
      </div>

      <Card>
        <Card.Body>
          <Card.Title>Refund Policy</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            <span>1. </span>We are ready to refund your money if you not
            satisfied by our experts help. If we didn’t contact you in 2-3 days
            so your money will be refund to your account.
          </Card.Text>
          <Card.Text>
            <span>2. </span>If you wanna refund your money that you pay for
            experts help then you need to mail us at (Website Email) our team
            will be reply you in just few hours
          </Card.Text>
          <Card.Text>
            <span>3. </span>You just need to send transaction id of your payment
            or you can share us screenshot of your payment to our service email
            address. Our email is given in 2nd line of refund policy or just
            click on our contact us button.
          </Card.Text>
          <Card.Text>
            <span>4. </span>If you don't want any experts helps but you paid for
            that so we are not responsible for that. If our experts contact you
            once from us then you need to apply for refund then we’ll refund
            half of your given amount.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title>Cancellation Policy</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            <span>1. </span>If you don't get any experts help by us then we’ll
            refund your money or re-arrange experts help by us without any cost.
          </Card.Text>
          <Card.Text>
            <span>2. </span>We’ll notify you if your refund or cancellation
            policy approved or not if yes then your money refund to your same
            account. We only re-arrange experts help if you are not satisfied by
            our experts guide. If you want to arrange other experts help then
            you need to pay extra for that.
          </Card.Text>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default Refund;
