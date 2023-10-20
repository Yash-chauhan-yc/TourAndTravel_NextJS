import React from "react";
import Row from "react-bootstrap/Row";
import '../styles/WhyUs.scss'
import "bootstrap/dist/css/bootstrap.min.css";



export default function ChooseHeading({first, second, third}){
    return(
        <Row>
          <div className="aos-animate custom-margin" data-aos="fade-up">
            <div className="title text-center">
              <span>{first}</span>
              <h2>{second} </h2>
              <h2>{third}</h2>
            </div>
          </div>
        </Row>
    )
}

