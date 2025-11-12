import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landingpage from './pages/Landingpage.jsx';
import Loginpage from './pages/Loginpage.jsx';
import LoadingPage from './pages/Loadingpage.jsx';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
