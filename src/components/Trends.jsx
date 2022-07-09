import React from 'react'
import './trends.css'

function Trends() {
    return (
      <section className="trends">
        <div className="trends-wrapper">
          <img src="./images/ikoyi.jpg" alt="" />
          <div className="btn--wrapper">
            <div className="trends--desc--wrapper">
              <h3 className="trends--desc">
                3 Bedroom Apartment in ikeja , Lagos for sale{" "}
              </h3>
              <button className="trends--btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Trends
