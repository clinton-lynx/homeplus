import React from 'react'
import Customer from './Customer'
import './review.css'
function Review() {
    return (
      <section className="review">
        <h1 className="title">Customers Reviews</h1>
        <Customer customer={"customer"} />
        <Customer customer={"customerReverse"} />
      </section>
    );
}

export default Review

