import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./navbar";
import './footer.css';
import logo from "./logo.png";

function Scholarships() {
  return (
      <div className="d-flex flex-column min-vh-100">
          <Navbar/>
          <div className="container text-center mt-5 flex-grow-1">
              <h1>Scholarships</h1>
              <p>Page content.</p>
          </div>

          <footer className="text-center mt-auto p-4" style={{backgroundColor: 'darkblue', color: 'white'}}>
              <img id="csumb_logo" src={logo} alt="CSUMB Logo, an otter." className="mb-3" style={{width: '150px'}}/>
              <p className="mb-1">BUS350 Financial Literacy. 2024 Ⓒ Rangel, Luciano, Calleros, Williams</p>
              <p>
                  <strong>Disclaimer:</strong> This information on this webpage is used for academic purposes only.
              </p>
          </footer>
      </div>
  );
}

export default Scholarships;
