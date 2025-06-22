

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Works from './Pages/Works';
import About from './Pages/About';
import ContactPage from './Pages/Contacting';






function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        

        
        
        
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
