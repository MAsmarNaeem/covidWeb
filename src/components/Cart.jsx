import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBagCheck } from "react-icons/bs";


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="nav-link padding-Top text-white pb-3"
      >
        <BsBagCheck />
      </Button>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="padding-Top mx-1"
          style={{ top: "66px", width: "280px", height: "400px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>MY CART </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            Subtotal:<p className="px-5 d-inline">$0.00SD <br/> </p> 
            shipping calculated at checkout
            <Button className="text-dark w-100" variant="outline-danger">Checkout {"->"}</Button>{' '}
          </Offcanvas.Body>
         
        </Offcanvas>
      </div>
    </>
  );
}

export default Example;
