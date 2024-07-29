import React, { useState } from 'react';
import './Card.css'; // Make sure to import your CSS

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="card-side card-front">
        </div>
        <div className="card-side card-back">
        </div>
      </div>
    </div>
  );
};

export default Card;
