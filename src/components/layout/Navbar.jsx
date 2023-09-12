import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Cart from "../Cart";
import { useState } from "react";
import lifecello from "../../Compressed/SC/images/lifecelllogo@2x.png";
import us from "../../Compressed/SC/images/us.png";

function NavbarCom() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="w-100"
        style={{ position: "fixed", marginTop: "60px" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={lifecello}
              alt="Covid-19 Icon"
              height="40px"
              width="40px"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="text-white px-4">
                Shop
              </Nav.Link>
              <Nav.Link href="#features" className="text-white px-4">
                What's New
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white px-4">
                Science
              </Nav.Link>
              <Nav.Link href="#about" className="text-white px-4">
                Blog
              </Nav.Link>
              <Nav.Link href="#about" className="text-white px-4">
                Company
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav>
            <NavDropdown
              title={<img src={us} height="20px" alt="Profile Icon" />}
              id="basic-nav-dropdown dropdown-menu-start"
            >
              <NavDropdown.Item
                href="#profile"
                className="text-white"
              ></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
            <p className="text-white pt-2">United States</p>
            <Cart />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;
