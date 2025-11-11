
import './App.css'
import Landingpage from './pages/Landingpage.jsx'
import React from 'react'
import { useState } from 'react'
import HackHubLanding from './pages/Landingpage.jsx'
import  Loginpage from './pages/Loginpage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}
    
  
  




export default App
