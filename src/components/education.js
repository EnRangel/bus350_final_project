import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './food.css';

function Education() {
    const cards = [
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
          <Navbar />
          <div className="container text-center mt-5 flex-grow-1">
            <h1>Food</h1>
            <div className="row">
              {cards.map((card, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="flip-card" onClick={flipCard}>
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h5>{card.title}</h5>
                        <img src={card.imgSrc} alt={card.title} className="img-fluid" />
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
          <footer className="text-center mt-auto py-3 bg-light">
            Enrique Rangel, Alyssa Calleros, Smirth Luciano Salinas @CSUMB 2024
          </footer>
        </div>
      );
    }

export default Education;
