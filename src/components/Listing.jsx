import React from 'react'
import Card from './Card';
import './Listing.css';

function Listing({title}) {
    return (
      <section className="listing">
        <h1 className="listing__title">{title}</h1>
        <p className="listing__subtitle">view all</p>
        <div className="list">
          <Card
            price={"$30M"}
            desc={"for rent"}
            address={"143 egbe road ejigbo, lagos state"}
          />
          <Card
            price={"$150M"}
            desc={"House for sale"}
            address={"16 ganiyat faruq street, lagos state"}
          />
          <Card
            price={"$16M"}
            desc={"short let"}
            address={"419 zazuu road, lagos state"}
          />
          <Card
            price={"$12M"}
            desc={"host and  events"}
            address={"11 nubia villa, lagos state"}
          />
        </div>
      </section>
    );
}

export default Listing;
