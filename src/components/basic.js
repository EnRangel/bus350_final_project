import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './food.css';

function Basic() {
    const cards = [
        {
          title: 'The Veterans Resource Center',
          imgSrc: 'https://via.placeholder.com/150',
          description: '',
          link: 'https://benefitscal.com/'
        },
        {
          title: 'Monterey County Free Libraries',
          imgSrc: 'https://via.placeholder.com/150',
          description: '',
          link: 'http://main.mcfl.ca.brainfuse.com/authenticate.asp'
        },
        {
          title: '100+ Women Who Care on the Central Coast',
          imgSrc: 'https://via.placeholder.com/150',
          description: '',
          link: 'https://www.100womensalinasmonterey.com/'
        },
        {
          title: 'Community Human Services',
          imgSrc: 'https://via.placeholder.com/150',
          description: '',
          link: 'https://chservices.org/'
        },
        {
            title: 'Dorothys Place',
            imgSrc: 'https://via.placeholder.com/150',
            description: '',
            link: 'https://www.dorothysplace.org/'
        },
        {
            title: 'Monterey Peninsula Salvation Army',
            imgSrc: 'https://via.placeholder.com/150',
            description: '',
            link: 'https://montereypeninsula.salvationarmy.org/'
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

export default Basic;
