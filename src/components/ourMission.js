import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import './ourMission.css';
import logo from "./logo.png";
// import SmirthLuciano from "./SmirthLuciano.jpeg";

function OurMission() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            <div className="container text-center mt-5 flex-grow-1">
                {/* <h1 className="mb-4 fw-bold">Our Team</h1>

                <div className="portrait_container mb-5">
                    <figure className="m-3">
                        <img className="portrait shadow" src={SmirthLuciano} alt="Smirth Luciano" />
                        <figcaption className="mt-2 fw-semibold">Smirth Luciano</figcaption>
                    </figure>

                    <figure className="m-3">
                        <img className="portrait shadow" src={SmirthLuciano} alt="Enrique Rangel" />
                        <figcaption className="mt-2 fw-semibold">Enrique Rangel</figcaption>
                    </figure>

                    <figure className="m-3">
                        <img className="portrait shadow" src={SmirthLuciano} alt="Alyssa Calleros" />
                        <figcaption className="mt-2 fw-semibold">Alyssa Calleros</figcaption>
                    </figure>

                    <figure className="m-3">
                        <img className="portrait shadow" src={SmirthLuciano} alt="Paradise Williams" />
                        <figcaption className="mt-2 fw-semibold">Paradise Williams</figcaption>
                    </figure>
                </div> */}

                <div className="mission-statement mt-5 mb-4">
                    <h2 className="text-primary fw-bold">Our Mission</h2>
                    <p className="lead px-3">
                        Our mission is to empower CSUMB students by providing a centralized platform that organizes financial resources,
                        including scholarships, food assistance, and other free to use tool options. We aim to make these resources
                        easily accessible to reduce stress and save time.
                    </p>
                </div>

                <div className="goal mt-4 mb-4">
                    <h2 className="text-primary fw-bold">Our Goal</h2>
                    <p className="lead px-3">
                        Our goal is to become the ultimate one-stop-shop for students in need of financial support and assistance.
                        By consolidating verified information and direct links to multiple programs, we strive to help students
                        navigate the challenges of college life more effectively.
                    </p>
                </div>

                <div className="motto mt-4 mb-5">
                    <h2 className="text-primary fw-bold">Our Motto</h2>
                    <p className="fst-italic lead text-muted">
                        "Connecting students to the support they need, when they need it."
                    </p>
                </div>
            </div>

            <footer className="text-center mt-auto p-4" style={{ backgroundColor: 'darkblue', color: 'white' }}>
                <img id="csumb_logo" src={logo} alt="CSUMB Logo, an otter." className="mb-3" style={{ width: '150px' }} />
                <p className="mb-1">BUS350 Financial Literacy. 2024 Ⓒ Rangel, Luciano, Calleros, Williams</p>
                <p>
                    <strong>Disclaimer:</strong> This information on this webpage is used for academic purposes only.
                </p>
            </footer>
        </div>
    );
}

export default OurMission;
