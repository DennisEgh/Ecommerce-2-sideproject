import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import {ads} from "./data";

function App() {
  
  

 
 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home ads={ads}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
