import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector } from "react-redux";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Quora-Like</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">
              Home <HomeIcon />
            </Nav.Link>

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

                  <LinkContainer to="/i">
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/">
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
