import React from "react";
import Form from "./Form";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <img src="./images/hero-image.jpg" alt="" />
        <Form />
      </div>
    </section>
  );
}

export default Hero;
