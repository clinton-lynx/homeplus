import React from 'react'
import Customer from './Customer'
import './review.css'
function Review() {
    return (
      <section className="review">
        <h1 className="title">Customers Reviews</h1>
        <Customer />
        <Customer  />
      </section>
    );
}

export default Review

