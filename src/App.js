import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Donate from './components/Donate';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newspaper from './components/Newspaper';
import OurCertificate from './components/OurCertificates';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/newspaper" element={<Newspaper />} />
          <Route path="/ourcertificate" element={<OurCertificate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
