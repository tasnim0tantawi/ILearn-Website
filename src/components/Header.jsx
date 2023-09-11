import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" height="60" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="#" className="dropdown-item">
                    Category1
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Category2
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Category3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link active ">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link active ">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SignUp" className="btn btn-outline-success btn-md ">
               Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
