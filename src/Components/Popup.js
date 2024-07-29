import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <p className='popup-text'>Happy birthday, Amruta!</p>
        <br/>
        <p className='popup-text'>You may be wondering what is all this, well to tell the truth:</p>
        <br/>
        <p className='popup-text'>As your birthday present, I wanted to give you something truly yours. Buying something won't cut it, I thought of writing a letter. But you deserve a 1000 letters and I can't possibly write them in such a short span of time.</p>
        <p className='popup-text'>Anyways, I wanted to give you something memorable. Something customised to you, something built with the sole intention of being a worthy present for my sweet girl. I did what I can do best:</p>
        <br/>
        <p className='popup-text'>I coded this website for you...</p>
        <p className='popup-text'>I tried my level best, I hope you will enjoy browsing through it.</p>
        <br/>
        <p className='popup-text'>Love,</p>
        <p className='popup-text'>Awwaab.</p>
        <button className='popup-button' onClick={props.onClose}>Awww...continue browsing</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
