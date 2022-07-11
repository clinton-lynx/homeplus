import React from 'react';
import './Navbar.css';
import {Link}  from 'react-router-dom';
import logo from "../images/logo-header.svg"


function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-logo">
              <img src={logo} alt="home plus" />
              <span className="black">home</span>plus
            </Link>
          </div>
          <div className="nav-middle">
            <ul className="nav-middle__list">
              <li className="nav-middle__list-item">
                <Link className="nav-middle__list-item-link" to="/">
                  buy
                </Link>
              </li>
              <li className="nav-middle__list-item">
                <Link className="nav-middle__list-item-link" to="/">
                  sell
                </Link>
              </li>
              <li className="nav-middle__list-item">
                <Link className="nav-middle__list-item-link" to="/">
                  rent
                </Link>
              </li>
              <li className="nav-middle__list-item">
                <Link className="nav-middle__list-item-link" to="/">
                  mortgage
                </Link>
              </li>
              <li className="nav-middle__list-item">
                <Link className="nav-middle__list-item-link" to="/">
                  find agents
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-right__list">
              <li className="nav-right__list-item">
                <Link className="nav-middle__list-item-link nav-border" to="/">
                  manage properties
                </Link>
              </li>
              <li className="nav-right__list-item">
                <Link className="nav-middle__list-item-link nav-border" to="/">
                  advertise
                </Link>
              </li>
              <li className="nav-right__list-item">
                <Link className="nav-middle__list-item-link nav-colored" to="/">
                  login
                </Link>
              </li>
              <li className="nav-right__list-item">
                <Link className="nav-middle__list-item-link nav-background" to="/">
                  sign up
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
              <Link to='/' className="nav-middle__list-item-link mobile">menu</Link>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
