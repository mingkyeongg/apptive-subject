import Home from '@/routes/home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@/reset.css';
import Nav from '@/components/nav';
import Ranking from '@/routes/ranking';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default App
