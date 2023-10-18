import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ChooseHeading from "./ChooseHeading";
import { FaRegClock, FaComment } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import blog1 from "../assets/blog/1.jpg";
import blog2 from "../assets/blog/2.jpg";
import blog3 from "../assets/blog/3.jpg";
import Image from "next/image";
import "../styles/Blog.scss";

const blogData = [
  {
    image: blog1,
    title: "The Most Beautiful Place In The World",
    date: "20 October 2019",
    comments: 21,
  },
  {
    image: blog2,
    title: "The Most Beautiful Place In The World",
    date: "15 September 2022",
    comments: 12,
  },
  {
    image: blog3,
    title: "The Most Beautiful Place In The World",
    date: "5 July 2021",
    comments: 32,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog_section">
      <ChooseHeading
        first="Latest Blog Post"
        second="Our Latest Article"
        third="For Travelers"
      />

      <Container>
        <Row>
          {blogData.map((post, index) => (
            <Col key={index} lg={4} md={6}>
              <div className="blog">
                <div className="blog-image">
                  <Image className="blog-photo img" src={post.image} alt={`Blog Post ${index + 1}`} />
                </div>
                <div className="blog-text">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span>
                      <i><FaRegClock /></i>{post.date}
                    </span>
                    <span>
                      <i><FaComment /></i>{post.comments} Comments
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
