import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left-aligned Home link */}
        <Link className="navbar-brand" to="/">Home</Link>

        {/* Center-aligned Scholarships link */}
        <div className="d-flex justify-content-center flex-grow-1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/scholarships">Scholarships</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
