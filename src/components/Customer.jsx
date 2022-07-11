import React, { useState } from "react";
import "./customer.css";
import custImage from "../images/cust-image.jpg";
import star from "../images/star.svg"

function Customer({customer, customerReverse}) {
  let property = "";
  // implementin search feature
  const [input, setInput] = useState("");
  const handleSearch = () => {
    setInput(input.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    property = input;
    console.log(property);
  };



  return (
    <section className={customer}>
      <div className="cust">
        <div className="profile--wrapper">
          <div className="cust--image">
            <img src={custImage} alt="customer photo" />
          </div>
          <div className="cust--detail">
            <p className="cust--name">daniel craig</p>
            <p className="cust--agency">realtor</p>
          </div>
          <div className="cust--star">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <p className="cust--review">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant odio
          ultricies ut facilisis. Etiam nullam sed proin vel vel est ut nisi,
          et. A, arcu, placerat donec dui suspendisse fringilla. Quis massa
          ultrices platea cras elit cursus scelerisque. Interdum mattis
          malesuada ultrices porta amet ornare enim pellentesque eu.
        </p>
        <span className="review--time">10:50 AM 29 June 2022</span>
      </div>
      <div className="cust--aside">
        <h1 className="cust--aside__title">Get Local Info</h1>
        <p className="cust--aside__text">
          What are the crime rates? is it pet-friendly? How are the schools? Get
          local information on the area you’re intersted in.
        </p>
        {/* <Form /> */}

        <form action="" className="cust--form">
          <input
            type="text"
            placeholder="Address, City, Neighborhood, Zip code ...."
            value={input}
            onChange={handleSearch}
            className="input-el"
          />
          <button onClick={handlesubmit} className="btn">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Customer;
