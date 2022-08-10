import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import {ads} from "./data";
import Shop from "./pages/Shop";
import ShopSpecific from "./pages/ShopSpecific";

function App() {
  
  

 
 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home ads={ads}/>} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ShopSpecific />}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
