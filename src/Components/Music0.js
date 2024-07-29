import React,{useState} from 'react'
import music from '../Assets/music/music2.jpg'
import music2 from '../Assets/music/bunny.jpg'
import earphones from '../Assets/music/earphones.jpg'
import bunny from '../Assets/music/bunny2.jpg'
import cassete from '../Assets/music/casette.jpg'
import catto from '../Assets/music/catto.jpg'
import sticker from '../Assets/sticker.png'
import cool from '../Assets/cool.png'
import cute from '../Assets/cute.png'
import pretty from '../Assets/pretty.png'
import beauty from '../Assets/beauty.png'

const Music0 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="grid-container">
          <div className="grid-item"><img src={cute}></img></div>
          <div className="grid-item"><img src={catto}></img></div>
          <div className="grid-item"><img src={cool}></img></div>
          <div className="grid-item"><img src={music}></img></div>
          <div className="grid-item"><img src={music2}></img></div>
          <div className="grid-item"><img src={beauty}></img></div>
          <div className="grid-item"><img src={pretty}></img></div>
          <div className="grid-item"><img src={bunny}></img></div>
          <div className="grid-item"><img src={cassete}></img></div>
          <div className="center-component-content">
          <h1 className='main-heading'>You are the music to my ears!!</h1>
            <p className='text-content'>P.S: Don't be shy, click the bunny</p>
          </div>
          <div className="grid-item"><img src={cool}></img></div>
          <div className="grid-item"><img src={earphones}></img></div>
          <div className="grid-item"><img src={sticker}></img></div>
        </div>
  )
}

export default Music0