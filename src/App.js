import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import Menu from "./components/Menu/Menu";
import Shop from "./components/Shop/Shop";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home";
import { productMock } from "./mock/productMock";
import SpaceNews from "./components/SpaceNews/SpaceNews";
import ContactPage from "./components/CompanyInfoPage/ContactsPage";
import Cart from "./components/Cart/Cart";

function App() {
  const [headerStyle, setHeaderStyle] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;

      if (scrollPos > 100) {
        setHeaderStyle("header_mini");
      } else {
        setHeaderStyle("");
      }
    });
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handlePaymentSuccess = (details, data) => {
    const order = {
      buyer: details.payer.name.given_name,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price, 0)
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    }).then(response => {
      if (response.ok) {
        setCartItems([]);
        alert('Order successfully placed!');
      }
    });
  };

  let [productCards, setProductCards] = useState(productMock);

  return (
      <div className="App">
        <HashRouter baseline="/">
          <Menu headerStyle={headerStyle} />
          <Routes>
            <Route
                path="/nasa-proj/shop/:id"
                element={<ProductDetail productInfo={productCards} addToCart={addToCart} />}
            />
            <Route
                path="/nasa-proj/shop"
                element={<Shop productCards={productCards} />}
            />
            <Route path="/nasa-proj/space" element={<SpaceNews />} />
            <Route path="/nasa-proj" element={<Home />} />
            <Route path="/nasa-proj/contact" element={<ContactPage />} />
            <Route
                path="/nasa-proj/cart"
                element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} handlePaymentSuccess={handlePaymentSuccess} />}
            />
          </Routes>
          <Wallpaper />
        </HashRouter>
      </div>
  );
}

export default App;
