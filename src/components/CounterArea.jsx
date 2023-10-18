import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCreditCard, FaGlobe, FaUser, FaLock  } from "react-icons/fa";
import '../styles/CounterArea.scss'
import "bootstrap/dist/css/bootstrap.min.css";

function CounterArea() {
  const Counter = ({ icon, count, description }) => (
    <Col md={3} sm={6} xs={12} className="no-padding">
      <div className="project">
        <i>{icon}</i>
        <h2 className="counter-num">{count}</h2>
        <h3>{description}</h3>
      </div>
    </Col>
  );

  return (
    <section className="section-padding">
      <Container>
        <Row className="flex">
          <Counter icon={<FaCreditCard />} count={32650} description="Happy Customers" />
          <Counter icon={<FaGlobe />} count={32650} description="Amazing Tours" />
          <Counter icon={<FaUser />} count={32650} description="In Business" />
          <Counter icon={<FaLock />} count={32650} description="Support Cases" />
        </Row>
      </Container>
    </section>
  );
}

export default CounterArea;