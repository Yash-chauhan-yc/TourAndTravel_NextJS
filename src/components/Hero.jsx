import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/Slider/cropped-Carousel1.jpg";
import img2 from "../assets/Slider/cropped-Carousel2.jpg";
import img3 from "../assets/Slider/cropped-Carousel3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../styles/Bootstrap.module.css";
// import ChooseHeading from "../WhyUs/ChooseHeading";
import Image from "next/image";
import "../styles/Hero.scss";

var heroData = [
  {
    id: 1,
    image: img1,
    heading: "Travel To The Beautiful Place",
  },
  {
    id: 2,
    image: img2,
    heading: "Welcome To The Travel",
  },
  {
    id: 3,
    image: img3,
    heading: "Choose The Best Tour Package",
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-block">
      <Carousel interval={null} keyboard={true} fade={true}>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <div className="darken-image">
                <Image
                  className="d-block w-100 carousel-image img-fluid"
                  src={hero.image}
                  alt={"Slide " + hero.id}
                />
              </div>
              <div className="overlay"></div> 
              <Carousel.Caption>
                <h1 className="heading">{hero.heading}</h1>
                <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="para">Lorem Ipsum has been the industry's standard .</p>
                <a className="btn btn-primary transparent-button">
                  {" "}
                  Booking Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      {/* <Carousel>
        <Carousel.Item interval={4000}>
          <Image src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </section>
  );
}
