import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Scholarships from './components/scholarships';
import React from 'react';
import OurMission from './components/ourMission';
import Resources from './components/resources';
import Contact from './components/contact';
import Food from './components/food';
import Basic from './components/basic';
import Education from './components/education';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/basic" element={<Basic/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/Food" element={<Food/>} />
        {/* <Route path="/home" element={<Home />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
