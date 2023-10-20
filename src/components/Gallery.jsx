import React, { useState } from "react";
// import "./Gallery.css";
import ChooseHeading from "./ChooseHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { FaExpand } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img9 from "../assets/gallery/9.jpg";
import '../styles/Gallery.scss'
import Image from "next/image";

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // State to track the expanded image
  const [expandedImage, setExpandedImage] = useState(null);

  // Function to open the expanded image
  const openImage = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  // Function to close the expanded image
  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <section id="gallery" className="our_gallery section-padding">
      <ChooseHeading
        first="Tour Gallery"
        second="Best Tourist's Shared"
        third="Photos"
      />
      <Container fluid>
        <Row className="flex">
          <Col md={12} className="padding_0">
            <Slider {...settings} className="slick-slider">
              {[
                { src: img1, title: "Germany" },
                { src: img2, title: "London" },
                { src: img3, title: "New York" },
                { src: img4, title: "China" },
                { src: img5, title: "Malaysia" },
                { src: img6, title: "Canada" },
                { src: img7, title: "Japan" },
                { src: img9, title: "India" },
              ].map((image, index) => (
                <div className="single_gallery" key={index}>
                  <Image className="img" src={image.src} alt={image.title} className="zoomable-image" />
                  <a className="gallery_enlarge_icon" title={image.title} onClick={() => openImage(image.src)}>
                    <i>
                      <FaExpand />
                    </i>
                  </a>
                  <h4>{image.title}</h4>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>

      {/* Expanded image modal */}
      {expandedImage && (
        <div className="expanded-image-modal" onClick={closeImage}>
          <Image src={expandedImage} alt="Expanded Image" className="expanded-image" />
        </div>
      )}
    </section>
  );
}
