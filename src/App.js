import React from 'react';
import './App.css';

import {BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Container/Navbar'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
    </Router>
      
  );
}

export default App;
