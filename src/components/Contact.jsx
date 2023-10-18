import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ChooseHeading from "./ChooseHeading";
import { FaMapMarkerAlt, FaHeadphones, FaAt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Contact.scss";
export default function Contact() {
  return (
    <section id="contact" className="contact_area section-padding">
      <ChooseHeading
        first="Contact Us"
        second="If You Have Any Question"
        third="Drop A Message"
      />
      <Container fluid>
        <Row className="flex align-items-center">
          <Col
            lg={7}
            sm={12}
            xs={12}
            className="db-lock mx-auto aos-init aos-animate custom-padding"
            data-aos="fade-up"
          >
            <div className="contact">
              <Form id="contact-form" method="post">
                <Row className="flex">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                    ></Form.Control>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                    ></Form.Control>
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                    ></Form.Control>
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      placeholder="Your Message"
                    ></Form.Control>
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      type="submit"
                      name="submit"
                      id="submitButton"
                    ></Form.Control>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col lg={5} sm={12} xs={12} className="d-block mx-auto">
            <div className="contact_address text-left">
              <div className="single-contact-info">
                <i><FaMapMarkerAlt /></i>
                <p>
                  2369 Robinson Lane Jackson
                  <br />
                  OH 45650
                </p>
              </div>
              <div className="single-contact-info">
                <i><FaHeadphones /></i>
                <p>
                  2369 Robinson Lane Jackson
                  <br />
                  OH 45650
                </p>
              </div>
              <div className="single-contact-info">
                <i><FaAt /></i>
                <p>
                  2369 Robinson Lane Jackson
                  <br />
                  OH 45650
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="google-map" style={{ margin: "0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805202.1152718647!2d144.39372013317418!3d-37.96964296983705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1697290563774!5m2!1sen!2sin"
          width="1800"
          height="450"
          allowfullscreen=""
          //   style="border:0;"
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"x
        ></iframe>
      </div>
    </section>
  );
}
