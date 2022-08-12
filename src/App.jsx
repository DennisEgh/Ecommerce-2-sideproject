import React, { useState, useEffect } from "react";
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

import ShopSpecificS from "./pages/ShopSpecificS";
import ShopSpecificM from "./pages/ShopSpecificM";
import ShopSpecificL from "./pages/ShopSpecificL";
import ShopSpecificXL from "./pages/ShopSpecificXL";
import ShopSpecificXXL from "./pages/ShopSpecificXXL";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(ads) {
    setCart([...cart, { ...ads, quantity: 1, size: "ExtraSmall" }]);
  }

  function chargeQuantity(ads, quantity) {
    setCart(
      cart.map((item) =>
        item.id === ads.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((ads) => ads.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav
          numberOfItems={numberOfItems}
          chargeQuantity={chargeQuantity}
          removeItem={removeItem}
        />
        <Routes>
          <Route path="/" element={<Home ads={ads} />} />
          <Route path="/shop" element={<Shop ads={ads} />} />
          <Route path="/shop-bras" element={<Shopbras ads={ads} />} />
          <Route path="/shop-leggings" element={<Shopleggings ads={ads} />} />
          <Route path="/shop-shorts" element={<Shopshorts ads={ads} />} />
          <Route
            path="/shop-accessories"
            element={<Shopaccessories ads={ads} />}
          />
          <Route
            path="/shop-fragrances"
            element={<Shopfragrances ads={ads} />}
          />
          <Route
            path="/shop/:id"
            element={
              <ShopSpecific ads={ads} addToCart={addToCart} cart={cart} />
            }
          />

          <Route
            path="/shop/:id/variant=Small"
            element={<ShopSpecificS ads={ads} />}
          />
          <Route
            path="/shop/:id/variant=Large"
            element={<ShopSpecificL ads={ads} />}
          />
          <Route
            path="/shop/:id/variant=Medium"
            element={<ShopSpecificM ads={ads} />}
          />
          <Route
            path="/shop/:id/variant=ExtraLarge"
            element={<ShopSpecificXL ads={ads} />}
          />
          <Route
            path="/shop/:id/variant=ExtraExtraLarge"
            element={<ShopSpecificXXL ads={ads} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
