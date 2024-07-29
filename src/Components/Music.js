import React,{useState} from 'react'
import kisses from '../Assets/kisses.jpg'
import amruta from '../Assets/amruta1.png'
import amruta1 from '../Assets/amruta2.png'
import spotify from '../Assets/music/spotify.jpg'
import q from '../Assets/music/quote.jpg'

const Music = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="grid-container">
          <div className="grid-item">Element 1</div>
          <div className="grid-item"><img src={q}></img></div>
          <div className="grid-item">Element 3</div>
          <div className="grid-item"><img src={amruta}></img></div>
          <div className="grid-item"><img src={kisses}></img></div>
          <div className="grid-item">Element 6</div>
          <div className="grid-item">Element 7</div>
          <div className="grid-item">Element 8</div>
          <div className="grid-item"><img src={spotify}></img></div>
          <div className="center-component">
          <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-side card-front">
          </div>
            <div className="card-side card-back">
          </div>
          </div>
          </div>
          <div className="grid-item">Element 10</div>
          <div className="grid-item"></div>
          <div className="grid-item"><img src={amruta1}></img></div>
        </div>
  )
}

export default Music