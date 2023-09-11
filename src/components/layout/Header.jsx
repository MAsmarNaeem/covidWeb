import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import covidIcon from "../../Compressed/SC/images/covid-19-icon.png";
import "./Header.css";
import NavbarCom from "./Navbar";

function Header() {
  return (
    <>
      <Navbar className="fixed-top w-100 bg-body-tertiary bgColorCss header">
        <Container>
          <Navbar.Brand href="#home" style={{ paddingLeft: "200px" }}>
            CoronaVirus Update{" "}
            <img
              src={covidIcon}
              alt="Covid-19 Icon"
              height="40px"
              width="40px"
            />
            As of 05/10/21 there is no delay in orders.
          </Navbar.Brand>
        </Container>
      </Navbar>
    <NavbarCom/>
    </>
  );
}

export default Header;
