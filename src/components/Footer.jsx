import React from 'react'
import "./footer.css"

function Footer() {
    return (
      <footer className="footer">
        <div className="footer--nav--wrapper">
          <ul className="footer__nav">
            <li className="footer__nav--item">about us</li>
            <li className="footer__nav--item">career</li>
            <li className="footer__nav--item">feedback</li>
            <li className="footer__nav--item">ads</li>
          </ul>
          <p className="copyright">Do Not Sell My Personal Information</p>
        </div>
        <span className="reserved">2020-2022 All Rights reserved</span>
      </footer>
    );
}

export default Footer
