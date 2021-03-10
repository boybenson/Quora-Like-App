import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/authActions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  const patterns = {
    // eslint-disable-next-line
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\d\w@-]{8,20}$/i,
  };

  const ValidateInput = (e, field, regex) => {
    e.preventDefault();
    if (regex.test(field.value)) {
      field.className = "form-control valid";
    } else {
      field.className = "form-control invalid";
    }
  };

  return (
    <Container className="mt-5">
      <Container>
        <Form onSubmit={HandleFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address :</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              onKeyUp={(e) =>
                ValidateInput(
                  e,
                  e.target,
                  patterns[e.target.attributes.name.value]
                )
              }
            />
            <small>Please Enter A Valid Email Address</small>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) =>
                ValidateInput(
                  e,
                  e.target,
                  patterns[e.target.attributes.name.value]
                )
              }
            />
            <small>
              Password must alphanumeric (@, _ and - are also allowed) and be 8
              - 20 characters
            </small>
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Login
          </Button>

          <Form.Group className="mt-2">
            A new User ? <NavLink to="/auth/register">Register</NavLink>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginScreen;
