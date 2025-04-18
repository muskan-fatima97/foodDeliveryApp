import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Control type="text" placeholder="login" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Control type="password" placeholder="password" />
      </Form.Group>

      <div className="mb-3 text-end">
        <a href="#" className="text-decoration-none">Forgot Password</a>
      </div>

      <div className="d-flex justify-content-start">
        <Button className="custom-submit-btn" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default SignIn;
