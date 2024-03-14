import React, { useEffect } from 'react';

import  './main.css';

const Parallax = ({ imageData }) => {
  useEffect(() => {
    const parallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxCards = document.querySelectorAll('.parallax-card');
      parallaxCards.forEach((card, index) => {
        card.style.transform = `translateY(${index % 2 === 0 ? '-' : ''}${scrolled * (index % 2 === 0 ? 0.2 : 0.2)}px)`;
      });
    };
    
    window.addEventListener('scroll', parallax);

    return () => {
      window.removeEventListener('scroll', parallax);
    };
  }, []);

  return (
    <div className="card-container">
      {Array.isArray(imageData) && imageData.map((src, index) => (
        <div key={index} className="parallax-card">
          <div className="parallax-bg" style={{ backgroundImage: `url(${src})` }} />
        </div>
      ))}
    </div>
  );
};

export default Parallax;