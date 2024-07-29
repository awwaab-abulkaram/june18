import React, { useState } from 'react';
import Game from './Game';
import './Demo.css';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const prevPage = () => {
    setPageIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  };

  return (
    <div>
      <div className="container" style={{ transform: `translateX(-${pageIndex * 50}%)` }}>
        <div className="page page-1">
          <h1>Page 1</h1>
          <p>This is the first page.</p>
        </div>
        <div className="page page-2">
        <Game/>
        </div>
        <div className="page page-3">
          <h1>Page 3</h1>
          <p>This is the third page.</p>
        </div>
        <div className="page page-4">
          <h1>Page 4</h1>
          <p>This is the fourth page.</p>
        </div>
      </div>
      <div className="button-container">
        <button className="next-button" onClick={prevPage}>
          Previous Page
        </button>
        <button className="next-button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default App;
