import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './home.css'; // Import custom CSS

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center mt-5 flex-grow-1">
        <h1>Home</h1>
        {/* <p>Page content.</p> */}

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card" onClick={() => navigate('/food')}>
              <img src="https://img.freepik.com/premium-vector/food-donation-meal-donates-vector-illustration_353502-460.jpg" className="card-img-top" alt="Food" />
              <div className="card-body">
                <h5 className="card-title">Food</h5>
                <p className="card-text">Scholarships, grants, etc.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" onClick={() => navigate('/basic')}>
              <img src="https://www.shutterstock.com/image-vector/basic-needs-vector-icon-need-600nw-2302590675.jpg" className="card-img-top" alt="Basic Needs" />
              <div className="card-body">
                <h5 className="card-title">Basic Needs</h5>
                <p className="card-text">Cal Fresh, county food bank, etc</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" onClick={() => navigate('/education')}>
              <img src="https://www.cft.org/sites/main/files/imagecache/thumbnail/main-images/scholarship-application-portal_is-1220073028_0.png?1637609139" className="card-img-top" alt="Education" />
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
