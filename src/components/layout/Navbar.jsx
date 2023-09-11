import React from "react";
import { Container, Nav, Navbar, NavDropdown,Button } from "react-bootstrap";
import covidIcon from '../../Compressed/SC/images/covid-19-icon.png';

import Cart from "../Cart";
import { useState } from "react";

function NavbarCom() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
       
          <Navbar.Brand href="/"><img src={covidIcon} alt="Covid-19 Icon" height="40px" width="40px"/></Navbar.Brand>

         
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-white">Shop</Nav.Link>
            <Nav.Link href="#features" className="text-white">What's New</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Science</Nav.Link>
            <Nav.Link href="#about" className="text-white">Blog</Nav.Link>
            <Nav.Link href="#about" className="text-white">Company</Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown  title="Profile" id="basic-nav-dropdown dropdown-menu-start">
              <NavDropdown.Item href="#profile" className="text-white" >My Profile</NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown>
            <Cart />
            <div>
     
    </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCom;
