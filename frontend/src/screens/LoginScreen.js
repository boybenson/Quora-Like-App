import React, { useEffect, useState } from "react";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/authActions";

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();

  // Pulling data from redux state
  const user = useSelector((state) => state.userLogin);
  const userLoginFromStore = useSelector((state) => state.userLogin);
  const { userInfo, errorData } = userLoginFromStore;

  // State To Handle Any Empty Input Error
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  // State To Hanlde Any Server Error
  const [serverError, setServerError] = useState(false);

  // internal states to handle control inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function to handle form submit
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    setIsEmptyInput(false);
    setServerError(false);
    if (email === "" || password === "") {
      setIsEmptyInput(true);
    } else {
      dispatch(userLogin(email, password));
    }
  };

  // regex patterns
  const patterns = {
    // eslint-disable-next-line
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\d\w@-]{8,20}$/i,
  };

  // function to validate regex
  const ValidateInput = (e, field, regex) => {
    e.preventDefault();
    if (regex.test(field.value)) {
      field.className = "form-control valid";
    } else {
      field.className = "form-control invalid";
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  // Handle server error
  useEffect(() => {
    if (errorData) {
      setServerError(true);
    }
  }, [setServerError, errorData]);

  return (
    <Container className="mt-5">
      <Form onSubmit={HandleFormSubmit}>
        {/* Alert To Show Is Empty Input */}
        {isEmptyInput && (
          <Alert
            className="text-center"
            variant="danger"
            onClose={setTimeout(() => {
              setIsEmptyInput(false);
            }, 3000)}
            dismissible
          >
            <small>Please Input All Fields</small>
          </Alert>
        )}

        {/* Alert To show Server Error */}

        {serverError && (
          <Alert
            variant="danger"
            onClose={setTimeout(() => {
              setServerError(false);
            }, 3000)}
            dismissible
          >
            {errorData.message}
          </Alert>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address :</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
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
            value={password}
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
            Password must alphanumeric (@, _ and - are also allowed) and be 8 -
            20 characters
          </small>
        </Form.Group>

        {/* Dynamically rendering buttons */}
        {!user.loading && (
          <Button variant="outline-dark" type="submit">
            Login
          </Button>
        )}

        {user.loading && (
          <Button variant="outline-dark" type="submit">
            <Spinner animation="border" size="sm" />
            Loading...
          </Button>
        )}

        {/* Link To Register Route */}
        <Form.Group className="mt-2">
          A new User ? <NavLink to="/auth/register">Register</NavLink>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginScreen;
