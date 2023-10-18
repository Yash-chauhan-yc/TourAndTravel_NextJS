'use client'

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Image from "react-bootstrap/Image";
import "../styles/AppHeader.scss";
import Image from "next/image";
import logo from '../assets/logo.png'

export default function AppHeader(props) {
  
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar ${props.isScrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="logo" width={130} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link className={`${props.isScrolled ? "navbar-fixed" : "navbar-top"}`} href="#home" >
             Home
            </Nav.Link>
            <Nav.Link className={`${props.isScrolled ? "navbar-fixed" : "navbar-top"}`} href="#service">
              Service
            </Nav.Link>
            <Nav.Link className={`${props.isScrolled ? "navbar-fixed" : "navbar-top"}`} href="#top_deals">
              Top Deals
            </Nav.Link>
            <NavDropdown
              title="Package"
              id={props.isScrolled ? `basic-nav-dropdown-fixed-1` : "basic-nav-dropdown-1"}
            >
              <NavDropdown.Item href="#action/3.1">
                Package Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`${props.isScrolled ? "navbar-fixed" : "navbar-top"}`}  href="#link">
              Gallery
            </Nav.Link>
            <NavDropdown
              title="Blog"
              id={props.isScrolled ? `basic-nav-dropdown-fixed-2` : "basic-nav-dropdown-2"}
            >
              <NavDropdown.Item href="#action/3.1">
                Standard Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Blog Details
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`${props.isScrolled ? "navbar-fixed" : "navbar-top"}`} href="#link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
