import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center mt-5 flex-grow-1">
        <h1>Home Page</h1>
        <p>Page content.</p>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Food Card */}
          <div className="col">
            <div className="card" onClick={() => navigate('/food')}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Food" />
              <div className="card-body">
                <h5 className="card-title">Food</h5>
                <p className="card-text">Scholarships, grants, etc.</p>
              </div>
            </div>
          </div>

          {/* Basic Needs Card */}
          <div className="col">
            <div className="card" onClick={() => navigate('/basic')}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Basic Needs" />
              <div className="card-body">
                <h5 className="card-title">Basic Needs</h5>
                <p className="card-text">Cal Fresh, county food bank, etc</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="col">
            <div className="card" onClick={() => navigate('/education')}>
              <img src="https://via.placeholder.com/150" className="card-img-top" alt="Education" />
              <div className="card-body">
                <h5 className="card-title">Education</h5>
                <p className="card-text">Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
