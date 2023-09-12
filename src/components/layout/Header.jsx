import React from "react";
import { Container, Navbar } from "react-bootstrap";
import covidIcon from "../../Compressed/SC/images/covid-19-icon.png";
import "./Header.css";
import NavbarCom from "./Navbar";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary bgColorCss  " expand="lg">
        <Container fluid className="justify-content-center">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="mr-2">CoronaVirus Update</span>
            <img
              src={covidIcon}
              alt="Covid-19 Icon"
              height="40px"
              width="40px"
            />
            <span className="ml-2">
              As of 05/10/21 there is no delay in orders.
            </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <NavbarCom/>
     
    </>
  );
}

export default Header;
