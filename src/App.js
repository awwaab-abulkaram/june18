import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import TimelinePage from './Components/TimelinePage';
import Demo from './Components/Demo';
import GamePage from './Components/GamePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timeline' element={<TimelinePage/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='/game-pics' element={<GamePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
