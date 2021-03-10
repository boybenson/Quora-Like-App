import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import CreateIcon from "@material-ui/icons/Create";
import HomeIcon from "@material-ui/icons/Home";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Quora-Like</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/">
              <Nav.Link href="#deets">
                Home <HomeIcon />{" "}
              </Nav.Link>
            </NavLink>

            <NavLink to="/">
              <Nav.Link href="#deets">Signin</Nav.Link>
            </NavLink>

            <NavLink to="/">
              <Nav.Link href="#deets">Signup</Nav.Link>
            </NavLink>

            <NavDropdown title={"More"} id="collasible-nav-dropdown">
              <NavLink to="/">
                <Nav.Link href="#">
                  <NavDropdown.Item href="#action/3.1">
                    Update Profile
                  </NavDropdown.Item>
                </Nav.Link>
              </NavLink>
              <NavLink to="/">
                <Nav.Link href="#">
                  <NavDropdown.Item href="#action/3.1">
                    My Stories
                  </NavDropdown.Item>
                </Nav.Link>
              </NavLink>
              <NavLink to="/">
                <Nav.Link href="#">
                  <NavDropdown.Item href="#action/3.1">
                    The Developer
                  </NavDropdown.Item>
                </Nav.Link>
              </NavLink>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/">
              <Nav.Link href="#deets">
                Create A Story <CreateIcon />
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
