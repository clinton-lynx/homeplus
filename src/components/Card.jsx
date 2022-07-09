import React, {useState} from "react";
import './card.css'


function Card() {
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
        <img src="./images/card-image.jpg" alt="card-image" />
        <div className="overlay">
          <span className="new">new</span>
          <span className="like">
            <img
              style={styledIcon}
              onClick={changeColor}
              className="like-image"
              src="./images/like.svg"
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
              src="./images/colored.svg"
              alt="colored"
            />
          </span>
        </div>
      </div>
      <div className="card__description-wrapper">
        <p className="house--type">house for sale</p>
        <p className="house--price">$7.5M</p>
        <div className="home--description">
          <span className="desc--item">
            <span>
              <img
                src="./images/bedroom.svg"
                className="bedroom"
                alt="bedroom-icon"
              />
              2 bedroom
            </span>
          </span>
          <span className="desc--item">
            <span>
              <img
                src="./images/bathroom.svg"
                className="bathroom"
                alt="bathroom-icon"
              />
              1 bathroom
            </span>
          </span>
          <span className="desc--item">
            <span>
              <img src="./images/sqft.svg" className="sqft" alt="sqft" />
              1,500 sqft
            </span>
          </span>
          <div className="home--address-wrapper">
            <span className="home--address">
              <img
                src="./images/location.svg"
                className="location"
                alt="location"
              />
              143 egbe road ejigbo, lagos state
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
