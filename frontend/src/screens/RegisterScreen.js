import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <Container className="mt-5">
      <Container>
        <Form>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>UserName :</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address :</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Register
          </Button>

          <Form.Group className="mt-2">
            Already Have An Account ? <NavLink to="/auth/login">Login</NavLink>{" "}
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default RegisterScreen;
