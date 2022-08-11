import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { ads } from "./data";
import Shop from "./pages/Shop";
import ShopSpecific from "./pages/ShopSpecific";
import Shopbras from "./pages/ShopBras";
import Shopleggings from "./pages/ShopLeggings";
import Shopshorts from "./pages/ShopShorts";
import Shopaccessories from "./pages/ShopAccessories";
import Shopfragrances from "./pages/ShopFragrances";
import Seimer from "./pages/seimer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home ads={ads} />} />
          <Route path="/shop" element={<Shop ads={ads} />} />
          <Route path="/shop-bras" element={<Shopbras ads={ads}/>} />
          <Route path="/shop-leggings" element={<Shopleggings ads={ads} />} />
          <Route path="/shop-shorts" element={<Shopshorts ads={ads}/>} />
          <Route path="/shop-accessories" element={<Shopaccessories ads={ads}/>} />
          <Route path="/shop-fragrances" element={<Shopfragrances ads={ads}/>} />
          <Route path="/shop/:id" element={<ShopSpecific ads={ads} />} />
          <Route path="/shop/:id/variant=XL" element={<Seimer ads={ads} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
