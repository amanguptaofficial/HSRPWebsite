import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/contactForm.css'
import axios from "axios";
// ContactForm component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      await saveFormData(formData)
  
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });

      // Validation is reset after the form data is saved and form is reset
      setValidated(false);

    }
  };
  async function saveFormData(data){
   let res =  await axios.post('https://hsrp-9ca53947876f.herokuapp.com/api/v1/hrsp/vehicle/contact-us',data)
   if(res?.data?.code==200){
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
   }
   

  }

  return (
    <>
     <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  
    <Form onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group controlId="formName" style={{ margin: '5px' }}>
        <Form.Label className="label">Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label className="label">Email Address</Form.Label>
        <Form.Control
          required
          pattern='^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,}@gmail\.com$'
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label className="label">Phone Number</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your mobile number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          pattern="^\d{10}$"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid 10-digit mobile number.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label className="label">Your Message</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={4}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide your message.
        </Form.Control.Feedback>
      </Form.Group>

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Button  style={{ margin: '10px', alignItems: "center" }} variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    </>
  );
};

export default ContactForm
