import React from "react";
import ChooseHeading from "./ChooseHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/review/1.png";
import img2 from "../assets/review/2.png";
import img3 from "../assets/review/3.png";
import bg from "../assets/bg/section-bg.jpg";
import overlay from "../assets/overlay.png";
import "../styles/Testimonials.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonialData = [
  {
    image: img1,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  },
  {
    image: img2,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  },
  {
    image: img3,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  },
  {
    image: img1,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  },
  {
    image: img2,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  },
  {
    image: img3,
    name: "WilliamSon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent bibendum dolor eros imperdiet amet hendrerit",
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    arrows: false,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    arrows: false,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    arrows: false,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    arrows: false,
  },
};

export default function Testimonials() {
  return (
    <section className="testimonial">
    <ChooseHeading
        first="Testmonials"
        second="What Our Customers"
        third="Say About Us"
      />
      <Container>
        <Row>
          <Col md={12} className="mx-auto text-center d-block">
            <Carousel responsive={responsive}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="single-testimonial">
                  <div className="testimonial-content">
                    {testimonial.content}
                  </div>
                  <div className="testimonial-bottom">
                    <Image
                      src={testimonial.image}
                      className="image"
                      alt="Testimonial"
                    />
                    <h3 className="title">{testimonial.name}</h3>
                    <div className="test-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
