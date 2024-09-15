import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container className='contact'>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your message" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
