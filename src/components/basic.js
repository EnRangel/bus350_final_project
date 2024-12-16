import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './food.css';

function Basic() {
    const cards = [
        {
          title: 'The Veterans Resource Center',
          imgSrc: 'https://vrcdallas.org/wp-content/uploads/2024/08/cropped-Veterans-Resource-Center-of-Dallas-Logo.jpg',
          description: 'Veterans Resources section that connects military veterans and their families with essential services, including education, employment, and mental health support. It serves as a hub for accessing local programs, benefits, and tools to assist in the transition to civilian life.',
          link: 'https://www.countyofmonterey.gov/government/departments-i-z/library/learn-explore/veterans-resources'
        },
        {
          title: 'Monterey County Free Libraries',
          imgSrc: 'https://californiarevealed.org/sites/default/files/styles/partner_logo/public/csalcl.png?itok=kdHGb7NU',
          description: 'Offers free online tutoring and educational resources for students and adult learners. Users can access live tutoring, homework help, test preparation, and career resources to support their academic and professional goals.',
          link: 'http://main.mcfl.ca.brainfuse.com/authenticate.asp'
        },
        {
          title: '100+ Women Who Care on the Central Coast',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6qN6HnOcLR2vX4GvNbL7nr_mwJ2KIQbukQ&s',
          description: 'A philanthropic group that brings together women to make a collective impact on local charities. By pooling donations, the group supports nonprofit organizations in the Salinas and Monterey Bay area, fostering meaningful change in the community.',
          link: 'https://www.100womensalinasmonterey.com/'
        },
        {
          title: 'Community Human Services',
          imgSrc: 'https://media.licdn.com/dms/image/v2/C560BAQEhqLm4ibFn5A/company-logo_200_200/company-logo_200_200/0/1642791069398/community_human_services_logo?e=2147483647&v=beta&t=fywESbm-5B_iUNVBMTogyh2y518XcuoRAMvmBHDdNoM',
          description: 'Nonprofit organization dedicated to providing essential services to individuals and families in need. They offer a range of programs, including mental health support, housing assistance, and youth services.',
          link: 'https://chservices.org/'
        },
        {
            title: 'Dorothys Place',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxaS2CP9obJhjSh5a8lmpNGzbF3DiHU5EcA&s',
            description: 'Nonprofit organization in Salinas, California, focused on supporting homeless individuals, particularly women and children. Offering shelter, meals, and essential services, it works to empower individuals to break the cycle of homelessness.',
            link: 'https://www.dorothysplace.org/'
        },
        {
            title: 'Monterey Peninsula Salvation Army',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z9lENI-JUDl3w_t7Ef4V2sYQrxhYhk5kFQ&s',
            description: 'Provides a range of services to support individuals and families in need, including emergency shelter, food assistance, and rehabilitation programs.',
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
            <h1>Basic Needs</h1>
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

export default Basic;
