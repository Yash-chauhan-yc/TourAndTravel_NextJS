"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AppHeader from "@/components/AppHeader";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import WhyChoose from "@/components/WhyUs";
import CounterArea from "@/components/CounterArea";
import TopDeals from "@/components/TopDeals";
import Package from "@/components/Package";
import Partner from "@/components/Partner";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CardFooter from "@/components/CardFooter";

export default function Home() {
  const [count, setCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <>
      <AppHeader isScrolled={isScrolled}  />
      <Hero />
      <Service />
      <WhyChoose />
      <CounterArea />
      <TopDeals />
      <Package />
      {/* <Par  tner /> */}
      <Gallery />
      <Blog />
      <Testimonials />
      <Contact />
      <CardFooter />
    </>
  );
}
