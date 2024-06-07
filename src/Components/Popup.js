import React from 'react'
import './Popup.css'

function Popup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <p className='text-content'>This is sample popup</p>
            <button className='learn-more'>Okie Dokie</button>
            {props.children}
        </div>
    </div>
  ):""
}

export default Popup