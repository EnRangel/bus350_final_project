import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './food.css';
import './footer.css';
import logo from "./logo.png";

function Education() {
    const cards = [
        {
          title: 'Universal Class',
          imgSrc: 'https://lacountylibrary.org/wp-content/uploads/2018/05/universal-class-logo.png',
          description: 'Offers a wide variety of online courses for personal and professional development, allowing users to learn at their own pace. With subjects ranging from health and wellness to business and technology.',
          link: 'https://www.universalclass.com/'
        },
        {
            title: 'Community Foundation for Monterey County',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyyJW2lr4b9ISwX54eH4l3BO128X5O-sJ0w&s',
            description: 'Provides a comprehensive scholarship resources page to help students access financial support for their education. The site offers information on available scholarships, application guidelines, and eligibility criteria for students in Monterey County.',
            link: 'https://cfmco.org/scholarships/resources/'        
        },
        {
            title: 'Cal Grant',
            imgSrc: 'https://pbs.twimg.com/profile_images/1287801937023262720/yF8-pPmT_400x400.jpg',
            description: 'The Cal Grants program to provide financial aid to California residents pursuing higher education. Includes grants based on financial need, academic achievement, and other eligibility criteria, helping cover tuition and other educational costs.',
            link: 'https://www.csac.ca.gov/cal-grants'        
        },
        {
            title: 'Scholarships.com',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Mv1d88gt4InxfPaH_2LBEuFU5stUuTi_Ow&s',
            description: 'A comprehensive guide to various grants available to students, helping them find financial aid for their education. Offers information on different types of grants, including federal, state, and private options, and assists students in the application process.',
            link: 'https://www.scholarships.com/financial-aid/grants'        
        },
        {
            title: '',
            imgSrc: 'https://via.placeholder.com/150',
            description: '',
            link: ''       
        },
        {
            title: '',
            imgSrc: 'https://via.placeholder.com/150',
            description: '',
            link: ''
        }
      ];
    
      const flipCard = (e) => {
        e.currentTarget.classList.toggle('flipped');
      };
    
      return (
          <div className="d-flex flex-column min-vh-100">
              <Navbar/>
              <div className="container text-center mt-5 flex-grow-1">
                  <h1>Education</h1>
                  <div className="row">
                      {cards.map((card, index) => (
                          <div className="col-md-4 mb-4" key={index}>
                              <div className="flip-card" onClick={flipCard}>
                                  <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                          <h5>{card.title}</h5>
                                          <img src={card.imgSrc} alt={card.title} className="img-fluid"/>
                                      </div>
                                      <div className="flip-card-back">
                                          <p>{card.description}</p>
                                          <button
                                              className="btn btn-primary"
                                              onClick={(e) => {
                                                  e.stopPropagation();
                                                  window.open(card.link, '_blank');
                                              }}
                                          >
                                              Go to Site
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              <footer className="text-center mt-auto p-4" style={{backgroundColor: 'darkblue', color: 'white'}}>
                  <img id="csumb_logo" src={logo} alt="CSUMB Logo, an otter." className="mb-3"
                       style={{width: '150px'}}/>
                  <p className="mb-1">BUS350 Financial Literacy. 2024 Ⓒ Rangel, Luciano, Calleros, Williams</p>
                  <p>
                      <strong>Disclaimer:</strong> This information on this webpage is used for academic purposes only.
                  </p>
              </footer>
          </div>
      );
}

export default Education;
