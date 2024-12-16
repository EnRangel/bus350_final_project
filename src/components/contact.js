import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import logo from "./logo.png";

function Contact() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar/>
            <div className="container text-center mt-5 flex-grow-1">
                <h1>Need to Connect?</h1>
                <p>Fill out the form below to get in touch with us:</p>
                {/* Google Form iframe */}
                <div className="d-flex justify-content-center">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeVvQA1qdP4LpimXuFkO2e2IinQOM3CMeoxecO_vfcsqbO-GA/viewform?embedded=true"
                        width="640"
                        height="1126"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
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

export default Contact;