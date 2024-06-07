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

  const [timedPopup, setTimedPopup] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setTimedPopup(true)
    },2000)
  },[])
  return (
    <div>
        <Navbar/>
        <Popup trigger ={false}/>
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