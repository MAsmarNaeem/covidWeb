import React from "react";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import productPic from "../Compressed/SC/images/bigproductwhitlogo.png";
import slidercontent from "../Compressed/SC/images/home-slider-content.png";
import Button from "react-bootstrap/Button";
import featuredicond1 from "../Compressed/SC/images/feature-icon-1.png";
import featuredicond2 from "../Compressed/SC/images/feature-icon-2.png";
import featuredicond3 from "../Compressed/SC/images/feature-icon-3.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";

import footerbanner from "../Compressed/SC/images/footer-banner.png";

const Home = () => {
  const [productData, setProductsData] = useState([]);
  // console.log("products data is :",productData);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}v1/home`);
      //  console.log("api response is :",response);

      const data = await response.json();
      // console.log("api data is :",data);
      setProductsData(data.data.products);
      //setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      // setLoading(false);
    }
  };
  console.log("product data is :", productData);
  return (
    <div>
       <Header/>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Container>
          <Row className="py-5 pb-3">
            <Col className="d-flex justify-content-center">
              <Image src={productPic} height="400px" width="300px" rounded />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <Image
                  src={slidercontent}
                  height="300px"
                  width="300px"
                  rounded
                />
                <br />
                <br />{" "}
                <p className="text-center w-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  dicta fugiat pariatur at cumque animi quam, minus maxime
                  beatae.
                </p>
                <Button
                  variant="outline-secondary"
                  className="w-50 rounded-pill"
                  rounded
                >
                  Buy
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="row py-5 d-flex justify-content-center">
        <div className="col-md-3 text-center">
          <Image src={featuredicond1} height="80px" width="80px" rounded />
          <h5 className="pt-2">Anti-Anging Breathtrough</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {" >>"}</Link>
        </div>
        <div className="col-md-3 text-center">
          <Image src={featuredicond2} height="80px" width="80px" rounded />
          <h5 className="pt-2">Say Goodbye to Whinkless</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {" >>"}</Link>
        </div>
        <div className="col-md-3 text-center">
          <Image src={featuredicond3} height="80px" width="80px" rounded />
          <h5 className="pt-2">Try Now 30 Day Trial</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            ratione quod in tempora qui blanditiis, ducimus consectetur!
            Aliquid, necessitatibus maxime.
          </p>
          <Link className="text-decoration-none">Read More {" >>"}</Link>
        </div>
      </div>
      <div>
        <div>
          <h5 className="text-center">LIFECELL PRODUCTS</h5>
          <div className="row text-center justify-content-center ">
            {productData.map((image, index) => (
              <div
                className="col-md-2 mx-2 mb-4 mt-1 d-flex pt-3justify-content-center "
                style={{ backgroundColor: "whitesmoke" }}
                key={index}
              >
                <div
                  className="d-inline-block pb-3 pt-3"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <img
                    src={image.images[0].image}
                    height="100px"
                    width="50px"
                    className="mx-auto px-2"
                    alt={`Product ${index + 1}`}
                  />
                </div>
                <div
                  className="d-inline-block text-left pb-3 pt-3"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <h6>LifeCell Cooling</h6>
                  <h6>Under Eye Treatment</h6>
                  <p>{`$${image.price}`}</p>
                  <Link to={`/product/${index}`} className="text-decoration-none">Learn more {">>"}</Link>
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
        <div className="col-md-2 text-center">
          <h5>Life Cell resources</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
            architecto alias esse sit nostrum odit quis odio eaque nobis.
          </p>
        </div>
        <div className="col-md-2 text-center">
          <h5>More then LifeCell</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
            architecto alias esse sit nostrum odit quis odio eaque nobis.
          </p>
        </div>
        <div className="col-md-2 text-center">
          <h5>Contact us </h5>
          <p>
            Email:support@gmail.com <br />
            Tel:03306864993 <br />
            Moday-Friday:9AM-5PM EST
          </p>
        </div>
        <div className="col-md-2 text-center">
          <h5>Life Cell resources</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
            architecto alias esse sit nostrum odit quis odio eaque nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
