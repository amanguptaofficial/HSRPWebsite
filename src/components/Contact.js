import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import '../css/contact.css'
const Contact = () => {
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
         Contact Us
        </h2>
      </div>
    <Card>
        <Card.Body>
         
          <Card.Text> Thank you for your interest in indiahsrp.online. We are here to assist you and welcome your inquiries. Please choose the most convenient way for you to get in touch.</Card.Text>
          <br/>
          <Card.Title>Customer Support:</Card.Title>
          <Card.Text>
            Email: support@indiahsrp.online<br/>
            Phone: [Your Customer Support Phone Number]<br/>
            Hours of Operation: 24*7<br/>
          </Card.Text>
         
          <Card.Title>Visit Us:</Card.Title>
          <Card.Text>If you prefer an in-person visit, our office is located at:<br/>
[Your Company Address]</Card.Text>
          <Card.Title>Connect With Us:</Card.Title>
          <Card.Text>Follow us on [Social Media Platforms] for the latest updates, news, and promotions.</Card.Text>
          <Card.Title>Quick Contact Form:</Card.Title>
          <Card.Text>If you have a specific question or request, please fill out the form below, and we will get back to you as soon as possible.</Card.Text>
          </Card.Body>
          </Card>
         
          <Card style={{margin:"10px", padding:'10px'}}>
       <ContactForm/>
          </Card>
         
      <Footer />
    </>
  );
};
export default Contact;
