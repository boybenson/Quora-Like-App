import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Handle logout action
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Quora-Like</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                Home <HomeIcon />
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <>
                <NavDropdown title={"More"} id="collasible-nav-dropdown">
                  <LinkContainer to="/t">
                    <NavDropdown.Item className="dropdown__link">
                      Update Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/j">
                    <NavDropdown.Item>My Stories</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/user/create-a-story">
                  <Nav.Link>
                    Create A Story <CreateIcon />
                  </Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/auth/login">
                  <Nav.Link>Signin</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/auth/register">
                  <Nav.Link>Signup</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
