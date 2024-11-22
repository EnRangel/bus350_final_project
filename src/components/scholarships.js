import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";

function Scholarships() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container text-center mt-5 flex-grow-1">
        <h1>Scholarships</h1>
        <p>Page content.</p>
      </div>
      <footer className="text-center mt-auto py-3 bg-light">
        Enrique Rangel, Alyssa Calleros, Smirth Luciano Salinas @CSUMB 2024
      </footer>
    </div>
  );
}

export default Scholarships;
