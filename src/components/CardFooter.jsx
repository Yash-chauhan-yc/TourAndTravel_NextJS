import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/CardFooter.scss";
import logo from '../assets/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function CardFooter() {
  return (
    <div className="footer">
      <Container>
        <Row className="flex">
          <Col lg={3}>
            <div className="footer-widget">
              <div className="foot-logo">
                <a href="#">
                  <Image src={logo} className="img"/>
                </a>
              </div>
              <p className="copyright_text">
                Copyright © 2019 | All Rights Reserved.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-widget">
              <h3 className="fot-title"> Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Term</a>
                </li>
                <li>
                  <a href="#">Privacy and Policy</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-widget">
              <h3 className="fot-title">About Us</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Travel Blog & Tips</a>
                </li>
                <li>
                  <a href="#">Working With Us</a>
                </li>
                <li>
                  <a href="#">Tour Guide</a>
                </li>
                <li>
                  <a href="#">Be Our Partner</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-widget">
              <h3 className="fot-title">Support</h3>
              <ul>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#">Term & Condition</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Tour Guide</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
