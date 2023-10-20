import React from "react";
import Figure from "react-bootstrap/Figure";
import { FigureCaption } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import { FaArrowRight } from "react-icons/fa";
import "../styles/TopDeals.scss";
import ChooseHeading from "./ChooseHeading";
import img1 from "../assets/portfolio/1.jpg";
import img2 from "../assets/portfolio/2.jpg";
import img3 from "../assets/portfolio/3.jpg";
import img4 from "../assets/portfolio/4.jpg";
import img5 from "../assets/portfolio/5.jpg";
import img6 from "../assets/portfolio/6.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

var data = [
  {
    id: 1,
    image: img1,
    heading: "Beijing, China",
    para: "From $850",
  },
  {
    id: 2,
    image: img2,
    heading: "Tokyo Japan",
    para: "From $955",
  },
  {
    id: 3,
    image: img3,
    heading: "Semporna, Malaysia",
    para: "From $650",
  },
  {
    id: 4,
    image: img4,
    heading: "Victoria, Columbia",
    para: "From $450",
  },
  {
    id: 5,
    image: img5,
    heading: "Bangkok, Thailand",
    para: "From $980",
  },
  {
    id: 6,
    image: img6,
    heading: "Jakarta, Indonesia",
    para: "From $350",
  },
];

export default function TopDeals() {
  return (
    <>
      <ChooseHeading
        first="Popular Destination"
        second="Travel Most Popular Place"
        third="In The World"
      />

      <section id="top_deals" className="top_deals section-padding">
        <Container style={{ paddingRight: "90px", paddingLeft: "90px" }}>
          <Row className="aos-init aos-animate flex" data-aos="fade-up">
            {data.map((item) => (
              <Col key={item.id} sm={4} xs={12}>
                <div className="deal">
                  <Figure className="effect-sadie">
                    <Image className="imagee" src={item.image} alt={`image${item.id}`}/>
                    <FigureCaption>
                      <div className="pull-left">
                        <h4>{item.heading}</h4>
                        <p>{item.para}</p>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-primary icon">
                          <FaArrowRight />
                        </a>{" "}
                      </div>
                    </FigureCaption>
                  </Figure>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
