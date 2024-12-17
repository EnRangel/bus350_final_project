import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css'; // Import custom styles

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          <Link className="navbar-brand fw-bold" to="/">
            StudentAidHub
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
            <ul className="navbar-nav mx-auto">
              <li>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/our-mission">Our Mission</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Other Resources</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
