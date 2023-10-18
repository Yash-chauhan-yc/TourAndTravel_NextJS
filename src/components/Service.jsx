'use client'

import React, {useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/Service.scss";
import { FaBed, FaPlane, FaTicketAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css'
import "bootstrap/dist/css/bootstrap.min.css";


export default function Service() {

  useEffect(()=>{
    AOS.init();
  })

  const servicesData = [
    {
      title: "Hotel Booking",
      icon: <FaBed />,
      description:
        "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt",
    },
    {
      title: "Flight Booking",
      icon: <FaPlane />,
      description:
        "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt",
    },
    {
      title: "Ticket Booking",
      icon: <FaTicketAlt />,
      description:
        "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt",
    },
    {
      title: "Amazing Tour",
      icon: <FaMapMarkerAlt />,
      description:
        "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt",
    },
    // Add more services as needed
  ];

  return (
    <section id="service" className="our_service service-block">
      <Container /*fluid*/ className="custom-container">
        <Row className="custom-row text-center">
          {servicesData.map((service, index) => (
            <Col
              md={3}
              className="col-lg-3 col-sm-6 col-xs-12 aos-init aos-animate"
              data-aos = "fade-up"
              key={index}
            >
              <div className="service">
                <div className="icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
