import React, {useState} from "react";
import './card.css'
import cardImage from "../images/card-image.jpg";
import like from "../images/like.svg";
import colored from "../images/colored.svg"
import bedroom from "../images/bedroom.svg";
import bathroom from "../images/bathroom.svg";
import sqft from "../images/sqft.svg";
import location from "../images/location.svg";


function Card({price, desc, address}) {
  const [color, setColor] = useState(true);


  const changeColor = () =>{
    
    setColor((prev)=>(  prev = !prev
    ));
console.log(color);    
  }
  // const colouredHandler = () =>{
  //    setColor(() => {
  //      color = !color;
  //    });
  // }
  const styledIcon = color ? { visibility: "visible" } : {visibility: "hidden" };
  const styledIcon2 = !color ? { visibility: "visible" } : { visibility: "hidden" };

  //   const [uncolor, setUncolor] = useState({ display: "none" });

  //   const changeUncolor = () => {
  //     setUncolor({ display: "block" });
  //     changeColor()
  //   };
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img src={cardImage} alt="card-image" />
        <div className="overlay">
          <span className="new">new</span>
          <span className="like">
            <img
              style={styledIcon}
              onClick={changeColor}
              className="like-image"
              src={like}
              alt="like-icon"
            />
            <img
              style={styledIcon2}
              onClick={changeColor}
              // style={styledIcon2}
              // onClick={colouredHandler}
              // style={uncolor}
              // onClick={changeUncolor}
              className="like-image"
              src={colored}
              alt="colored"
            />
          </span>
        </div>
      </div>
      <div className="card__description-wrapper">
        <p className="house--type">{desc}</p>
        <p className="house--price">{price}</p>
        <div className="home--description">
          <span className="desc--item">
            <span>
              <img
                src={bedroom}
                className="bedroom"
                alt="bedroom-icon"
              />
              2 bedroom
            </span>
          </span>
          <span className="desc--item">
            <span>
              <img
                src={bathroom}
                className="bathroom"
                alt="bathroom-icon"
              />
              1 bathroom
            </span>
          </span>
          <span className="desc--item">
            <span>
              <img src={sqft} className="sqft" alt="sqft" />
              1,500 sqft
            </span>
          </span>
          <div className="home--address-wrapper">
            <span className="home--address">
              <img
                src={location}
                className="location"
                alt="location"
              />
             {address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
