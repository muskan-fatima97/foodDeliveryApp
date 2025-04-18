import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faWindows } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  return (
    <Form>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

      <div className="d-flex justify-content-center mb-3">
        <Button className="custom-submit-btn" type="submit">
          SignUp
        </Button>
      </div>

      <Row className="gy-2">
        <Col>
          <Button variant="outline-primary" className="w-100">
            <FontAwesomeIcon icon={faFacebookF} className="me-2" />
            Facebook
          </Button>
        </Col>
        <Col>
          <Button variant="outline-danger" className="w-100">
            <FontAwesomeIcon icon={faGoogle} className="me-2" />
            Gmail
          </Button>
        </Col>
        <Col>
          <Button variant="outline-secondary" className="w-100">
            <FontAwesomeIcon icon={faWindows} className="me-2" />
            Hotmail
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUp;
