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

import ShopSpecificS from "./pages/ShopSpecificS";
import ShopSpecificM from "./pages/ShopSpecificM";
import ShopSpecificL from "./pages/ShopSpecificL";
import ShopSpecificXL from "./pages/ShopSpecificXL";
import ShopSpecificXXL from "./pages/ShopSpecificXXL";
import ShopSpecificBlack from "./pages/ShopSpecificBlack";
import ShopSpecificWhite from "./pages/ShopSpecificWhite";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "XS" }]);
  }
  function addToCartL(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "L" }]);
  }
  function addToCartM(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "M" }]);
  }
  function addToCartS(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "S" }]);
  }
  function addToCartXL(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "XL" }]);
  }
  function addToCartXXL(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_SIZE: "XXL" }]);
  }
  function addToCartBlack(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_COLOR: "BLACK" }]);
  }
  function addToCartWhite(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_COLOR: "WHITE" }]);
  }
  function addToCartPink(ad) {
    setCart([...cart, { ...ad, quantity: 1, CHOSEN_COLOR: "PINK" }]);
  }

  function incrementQuantity(ad, quantity) {
    setCart(
      cart.map((item) =>
        item.id === ad.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }
  function decrementQuantity(ad, quantity) {
    setCart(
      cart.map((item) =>
        item.id === ad.id
          ? {
              ...item,
              quantity: --quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((ad) => ad.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {}, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav
          numberOfItems={numberOfItems}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
          cart={cart}
        />
        <Routes>
          <Route path="/" element={<Home ads={ads} />} />
          <Route path="/shop" element={<Shop ads={ads} />} />
          <Route path="/shop-bras" element={<Shopbras ads={ads} />} />
          <Route path="/shop-leggings" element={<Shopleggings ads={ads} />} />
          <Route path="/shop-shorts" element={<Shopshorts ads={ads} />} />
          <Route
            path="/shop/:id/variant=black"
            element={
              <ShopSpecificBlack
                ads={ads}
                addToCartBlack={addToCartBlack}
                cart={cart}
              />
            }
          />

          <Route
            path="/shop/:id/variant=white"
            element={
              <ShopSpecificWhite
                ads={ads}
                addToCartWhite={addToCartWhite}
                cart={cart}
              />
            }
          />
          <Route
            path="/shop-accessories"
            element={<Shopaccessories ads={ads} />}
          />
        
          <Route
            path="/shop/:id"
            element={
              <ShopSpecific
                ads={ads}
                addToCart={addToCart}
                cart={cart}
                addToCartPink={addToCartPink}
              />
            }
          />

          <Route
            path="/shop/:id/variant=Small"
            element={
              <ShopSpecificS ads={ads} addToCartS={addToCartS} cart={cart} />
            }
          />
          <Route
            path="/shop/:id/variant=Large"
            element={
              <ShopSpecificL ads={ads} addToCartL={addToCartL} cart={cart} />
            }
          />
          <Route
            path="/shop/:id/variant=Medium"
            element={
              <ShopSpecificM ads={ads} addToCartM={addToCartM} cart={cart} />
            }
          />
          <Route
            path="/shop/:id/variant=ExtraLarge"
            element={
              <ShopSpecificXL ads={ads} addToCartXL={addToCartXL} cart={cart} />
            }
          />
          <Route
            path="/shop/:id/variant=ExtraExtraLarge"
            element={
              <ShopSpecificXXL
                ads={ads}
                addToCartXXL={addToCartXXL}
                cart={cart}
              />
            }
          />
        </Routes>
     
      </div>
    </Router>
  );
}

export default App;
