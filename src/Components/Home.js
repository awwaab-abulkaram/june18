import React from 'react'
import { useEffect, useState } from 'react';
import Music from './Music';
import Lens from './Lens';
import Timeline from './Timeline';
import Gallery from './Gallery';
import CustomCursor from './CustomCursor';
import Game from './Game';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import Popup from './Popup';


const Home = () => {
  const [showPopup, setShowPopup] = useState(true)
  const [timedPopup, setTimedPopup] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedPopup(true);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setTimedPopup(false);  };
  return (
    <div>
        <Navbar/>
        <Popup trigger={timedPopup} onClose={togglePopup}/>
        <Hero/>
        <CustomCursor/>
        <Music/>
        <Lens/>
        <Timeline/>
        <Gallery/>
        <Game/>
        <Footer/>
      </div>
    )
}

export default Home