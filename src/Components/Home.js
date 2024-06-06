import React from 'react'
import Music from './Music';
import Lens from './Lens';
import Timeline from './Timeline';
import Gallery from './Gallery';
import CustomCursor from './CustomCursor';
import Game from './Game';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';


const Home = () => {
  return (
    <div>
        <Navbar/>
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