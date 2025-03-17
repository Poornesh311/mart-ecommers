import React from 'react';
import { FaUser, FaShoppingCart } from "react-icons/fa";

const MainNavigation = () => {
  return (
    <div> 
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand" href="/"> 
                <img src="https://lms.achieversit.com/assets/images/logo.png" alt="Brand Logo" />
              </a>
              <div className="navbar-nav">
                  <a className="nav-link text-dark fw-bold fs-5" aria-current="page" href="#">Home</a>
                  <a className="nav-link text-dark fw-bold fs-5" href="#">Shop</a>
                  <a className="nav-link text-dark fw-bold fs-5" href="#">Cart</a>
                  <a className="nav-link text-dark fw-bold fs-5" href="#"><FaUser /></a>
                  <a className="nav-link text-dark fw-bold fs-5" href="#"><FaShoppingCart /> </a>
              </div>
          </div>
        </nav>
    </div>
  );
};

export default MainNavigation;