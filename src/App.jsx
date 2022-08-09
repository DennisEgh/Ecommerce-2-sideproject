import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { clothes } from "./data";

import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(clothes) {
    setCart([...cart, { ...clothes, quantity: 1 }]);
  }

  function changeQuantity(clothes, quantity) {
    setCart(
      cart.map((item) =>
        item.id === clothes.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((clothes) => clothes.id !== item.id));
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
        <Nav numberOfItems={numberOfItems}/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
