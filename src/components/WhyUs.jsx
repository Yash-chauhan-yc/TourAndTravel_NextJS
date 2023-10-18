'use client'
import React, { useEffect } from "react";
import "../styles/WhyUs.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/aos/dist/aos.css";
import img from "../assets/why-choose-us/why-choose-us.png";
import ChooseHeading from "./ChooseHeading";
import Image from "next/image";
import { FaCreditCard, FaGlobe, FaUser, FaLock } from "react-icons/fa";


const whyChooseData = [
  {
    icon: <FaCreditCard />,
    title: "Exclusive Package",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    icon: <FaGlobe />,
    title: "World Class Service",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    icon: <FaLock />,
    title: "Best Travel Guide",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    icon: <FaUser />,
    title: "100% Secure",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
];

export default function WhyChoose() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="why-choose">
      <Container>
        <ChooseHeading
          first="Why Choose us?"
          second="Every Time We Provide"
          third="Best Service"
        />
        <Row className="text-left align-items-center">
          <Col md={6} className="img">
            <Image src={img} alt="why-choose-us" />
          </Col>
          <Col sm={6} xs={12}>
            <Row className="flex">
              {whyChooseData.map((item, index) => (
                <Col sm={6} xs={12} key={index}>
                  <div className="single-choose mb-20">
                    <i>{item.icon}</i>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
