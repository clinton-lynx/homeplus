import React from 'react'
import Card from './Card';
import './Listing.css';

function Listing({title}) {
    return (
      <section className="listing">
        <h1 className="listing__title">{title}</h1>
        <p className="listing__subtitle">view all</p>
        <div className="list">
          {" "}
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    );
}

export default Listing;
