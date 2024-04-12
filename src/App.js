import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route, 
// } from "react-router-dom";  

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <> 
 
           {/* This is the alias of BrowserRouter i.e. Router */}
           <Router>
        <Navbar about="about us" mode={mode} toggleMode={toggleMode} />
                <Routes> 
                    <Route
                        exact
                        path="/"
                        element={<Textform />}
                    />
  
                  <Route
                  path="/about"
                  element={<About />}
                  />    
                  </Routes>
            </Router>
 
    </>
  );
}

export default App;
