import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import TimelinePage from './Components/TimelinePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timeline' element={<TimelinePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
