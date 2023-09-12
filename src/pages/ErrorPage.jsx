import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarCom from "../components/layout/Navbar";


function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");
  }, [navigate]);

  return (
    <div className="text-center " >
      <NavbarCom/>
        <div>
       
      
      <h1 style={{paddingTop:"150px"}}>
        404  
      </h1>
      <h6>SORRY! PAGE YOU ARE LOOKING CAN’T BE FOUND.</h6>
      <Nav.Link>
      Go back to the 
                   &nbsp; <Link
                          className=""
                          to="/"
                        >
                            Home Page
                        </Link>
                     
                    </Nav.Link>
      </div>
      <div style={{marginTop:"400px"}}>
       
      </div>
  
     
    </div>
  );
}

export default ErrorPage;
