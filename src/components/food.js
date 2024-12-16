import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './food.css'; // Make sure to create this CSS file for custom styles.

function Food() {
  const cards = [
    {
      title: 'Benefitscal',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'Get support for food, cash aid, and health coverage benefits! Yes, students are eligible for Calfresh, CalWORKs, and Medi-Cal! Fill out a single application to apply for all three of these great free resources!',
      link: 'https://benefitscal.com/'
    },
    {
      title: 'CalFresh',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'Apply for CalFresh in just 10 minutes! CalFresh will give you SNAP benefits, meaning free food money in the form of EBT cards! EBT cards can work at groceries, farmers markets, and most other food stores.',
      link: 'https://www.getcalfresh.org/?source=g2&gclid=CjwKCAjw1cX0BRBmEiwAy9tKHhhiUG10L0E5cYjrmy8SZffqoTPlcWFigGcThc0ySzBibgTTFoib1RoC_KoQAvD_BwE'
    },
    {
      title: 'Food Bank Monterey County',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'The Food Bank County of Monterey can give you fresh food right away, no application needed! They provide fresh high-quality food, free farmers markets, and mobile produce pantries! Theyre also partnered with many nonprofit networks all over the county to give you the help you need! ',
      link: 'https://foodbankformontereycounty.org/'
    },
    {
      title: 'Pacific Grove, CA Food Assistance and Pantries',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'Find the nearest food pantry near you! FoodPantries.org helps you locate the closest food resources, both here in Monterey County and anywhere else you might be! Locations may include food pantries, soup kitchens, food banks, and more!  ',
      link: 'https://www.foodpantries.org/ci/ca-pacific_grove'
    },
    {
      title: 'VTC of California',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'The Veterans Transition Center is here to help you find housing when you return from serving our country! They have emergency, transitional, and permanent supportive housing services. ',
      link: 'https://www.vtcofcalifornia.org'
    },
    {
      title: 'Card 6',
      imgSrc: 'https://via.placeholder.com/150',
      description: 'Description 6',
      link: 'https://www.ecosia.org'
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
            Enrique Rangel, Alyssa Calleros, Smirth Luciano Salinas, Paradise Williams @CSUMB 2024
          </footer>
    </div>
  );
}

export default Food;