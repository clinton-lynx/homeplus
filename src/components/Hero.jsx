import React from "react";
import Form from "./Form";
import heroImage from '../images/hero-image.jpg'
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <img src={heroImage}alt="" />
        <Form />
      </div>
    </section>
  );
}

export default Hero;
