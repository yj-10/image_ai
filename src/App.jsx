import "./App.css";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import infosense from "../src/assest/Infosense.png";
import Footer from "./Component/Footer";
import Cultivator from "./assest/cultivator.png";

import { BsTelephone } from "react-icons/bs";

import UploadData from "./Component/UploadData";
function App() {
  const [filename, setFile] = useState(null);

  return (
    <>
      <div className="wrapper">
        <div className="headers">
          {" "}
          <Container>
            <Row
              className="d-flex align-items-center"
              style={{ padding: "10px 0px" }}
            >
              <Col lg={8} md={6} sm={12}>
                <img src={infosense} className="img-fluid w-25" alt="no-img" />
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div style={{ marginTop: "12px" }}>
                  <p>
                    <BsTelephone /> Contact Us :- +91 - 9343017165
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="Marquee_container">
          <marquee direction="right" className="h6 text-uppercase">
            Digital Image Processing By Infosense
          </marquee>
        </div>

        <Container>
          <div className="Wrapper_title">
            <h1 className="text-center text-uppercase">Image</h1>
          </div>

          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={12} md={6} lg={6} className="" >
              <div className="mb-3 ">
                <input
                  className="form-control form-control-sm mb-2"
                  id="formFileSm"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
                {filename && (
                  <div>
                    <img
                      alt="not found"
                      height={"250px"}
                      className="w-100 mb-2"
                      src={URL.createObjectURL(filename)}
                    />
                    <br />
                    <button className="btn btn-info" onClick={() => setFile(null)}>Remove</button>
                  </div>
                )}
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="Image_col">
                <img src={Cultivator} className="img-fluid" alt="no-image" />
              </div>
            </Col>
          </Row>

          <div>
            <button className="btn btn-info">Predict</button>
          </div>
        </Container>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
