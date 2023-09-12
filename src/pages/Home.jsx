import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import fb from "../Compressed/SC/images/Facebook_icon_2013.svg.png";
import twitter from "../Compressed/SC/images/Twitter_2012_logo.svg.png";
import youtube from "../Compressed/SC/images/youtube.png";
import pinInterest from "../Compressed/SC/images/pin.png";
import footerbanner from "../Compressed/SC/images/footer-banner.png";
import productPic from "../Compressed/SC/images/bigproductwhitlogo.png";
import slidercontent from "../Compressed/SC/images/home-slider-content.png";
import featuredicond1 from "../Compressed/SC/images/feature-icon-1.png";
import featuredicond2 from "../Compressed/SC/images/feature-icon-2.png";
import featuredicond3 from "../Compressed/SC/images/feature-icon-3.png";
import { GrFacebook } from 'react-icons/gr';


const Home = () => {
  const [productData, setProductsData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}v1/home`);
      const data = await response.json();
      setProductsData(data.data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Container>
          <Row className="py-5 pb-5 ">
            <Col className="d-flex justify-content-center" style={{marginTop:"150px"}} md={6} lg={6} >
              <Image src={productPic} height="400px" width="auto" rounded />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center"
              style={{marginTop:"150px"}}
              md={6}
              lg={6}
            >
              <div>
                <Image
                  src={slidercontent}
                  height="300px"
                  width="auto"
                  rounded
                />
                <br />
                <br />
                <p className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing <br />{" "}
                  elit. Quis dicta fugiat pariatur at cumque animi quam,
                  <br /> minus maxime beatae.
                </p>
                <Button
                  variant="outline-secondary"
                  rounded
                  style={{ width: "400px", borderRadius: "19px" }}
                >
                  <h5>Buy</h5>
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="row py-5 d-flex justify-content-center">
        <div className="col-md-3 text-center">
          <Image src={featuredicond1} height="80px" width="auto" rounded />
          <h5 className="pt-2" style={{ color: "#697090" }}>
            Anti-Anging Breathtrough
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {">"}</Link>
        </div>
        <div className="col-md-3 text-center">
          <Image src={featuredicond2} height="80px" width="auto" rounded />
          <h5 className="pt-2" style={{ color: "#697090" }}>
            Say Goodbye to Whinkless
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {" >"}</Link>
        </div>
        <div className="col-md-3 text-center">
          <Image src={featuredicond3} height="80px" width="auto" rounded />
          <h5 className="pt-2" style={{ color: "#697090" }}>
            Try Now 30 Day Trial
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {">"}</Link>
        </div>
      </div>
      <div>
        <div>
          <h5 className="text-center" style={{ color: "#69696E" }}>
            LIFECELL PRODUCTS
          </h5>
          <div className="row text-center justify-content-center pt-4 ">
            {productData.map((image, index) => (
              <div
                className="col-md-2 mx-1 mb-4 mt-1 d-flex justify-content-center "
                style={{ backgroundColor: "whitesmoke", borderRadius: "17px" }}
                key={index}
              >
                <div
                  className="d-inline-block pb-3"
                  style={{ backgroundColor: "whitesmoke", paddingTop: "40px" }}
                >
                  <img
                    src={image.images[0].image}
                    height="150px"
                    width="50px"
                    className="mx-auto px-2"
                    alt={`Product ${index + 1}`}
                  />
                </div>
                <div
                  className="d-inline-block text-right pb-3 "
                  style={{ backgroundColor: "whitesmoke", paddingTop: "50px" }}
                >
                  <h6 style={{ color: "#696D8D" }}>LifeCell Cooling</h6>
                  <h6 style={{ color: "#696D8D" }}>Under Eye</h6>
                  <h6 style={{ color: "#696D8D" }}>Treatment</h6>
                  <p>{`$${image.price}`}</p>
                  <Link
                    to={`/product/${index}`}
                    className="text-decoration-none"
                  >
                    Learn more {">"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image src={footerbanner} className="w-100 h-50" rounded />
      <div
        className="row justify-content-center pt-4 "
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="col-md-2">
          <h5>Life Cell resources</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
            architecto alias esse sit nostrum odit quis odio eaque nobis.
          </p>
        </div>
        <div className="col-md-2">
          <h5>More than LifeCell</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
            architecto alias esse sit nostrum odit quis odio eaque nobis.
          </p>
        </div>
        <div className="col-md-2">
          <h5>Contact us </h5>
          <p>
            Email: support@gmail.com <br />
            Tel: 03306864993 <br />
            Monday-Friday: 9AM-5PM EST
          </p>
        </div>
        <div className="col-md-2">
          <h5>Social</h5>
        <Link ><img src={twitter} height="40px" alt="" srcset="" /></Link> 
          <img  src={fb} className="px-2" height="25px" alt="" srcset="" />
          
          <img src={youtube} className="px-2" height="35px" alt="" srcset="" />
          <img src={pinInterest} className="px-2" height="30px" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
