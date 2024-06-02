import React from 'react'
import Music from './Music';
import Lens from './Lens';
import Timeline from './Timeline';
import Gallery from './Gallery';
import CustomCursor from './CustomCursor';


const Home = () => {
  return (
    <div>
        <h2 className='main-heading'>Happiest Birthday, Beautiful!</h2>
        <CustomCursor/>
        <Music/>
        <Lens/>
        <Timeline/>
        <Gallery/>
      </div>
    )
}

export default Home