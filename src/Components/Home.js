import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Game from './Game';
import Hero from './Hero';
import './Demo.css';
import Popup from './Popup'
import Music from './Music'
import Music0 from './Music0'
import kisses from '../Assets/kisses.jpg'
import amruta from '../Assets/amruta1.png'
import amruta1 from '../Assets/amruta2.png'
import Lens from './Lens';
import Card from './Card';
import Hero2 from './Hero2';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedPopup(true);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setTimedPopup(false);
  };

  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    if (pageIndex < 5) {
      setPageIndex((prevIndex) => prevIndex + 2);
    }
  };
  
  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex((prevIndex) => prevIndex - 2);
    }
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <Popup trigger={timedPopup} onClose={togglePopup} />
      <div className="container" style={{ transform: `translateX(-${pageIndex * 50}vw)` }}>
        <div className="page">
          <Hero/>
        </div>
        <div className="page">
          <Hero2/>
        </div>
        <div className="page">
        <Music0 />
        </div>
        <div className="page">
        <Music/>
        </div>
        <div className="page">
          <Lens/>
        </div>
        <div className="page">
        
        </div>
        <div className="page">
        <Game/>
        </div>
        <div className="page">
      {pageIndex}
        </div>
      </div>
      <div className="button-container">
        <button  className="prev-button" onClick={prevPage} disabled={pageIndex === 0}>
          Previous Page
        </button>
        <button className="next-button" onClick={nextPage} disabled={pageIndex === 6}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default App;
