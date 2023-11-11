import "./App.css";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./components/Home/Home";
import {productMock} from "./mock/productMock";
import SpaceNews from "./components/SpaceNews/SpaceNews";

function App() {
  const [headerStyle, setHeaderStyle] = useState("");

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

  let [productCards, setProductCards] = useState(productMock);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu headerStyle={headerStyle} />

        <Routes>
          <Route path="/shop/:id" element={<ProductDetail productInfo={productCards}/>} />
          <Route path="/shop" element={<Shop productCards={productCards} />} />
          <Route path="/space" element={<SpaceNews />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Wallpaper />
      </BrowserRouter>
    </div>
  );
}

export default App;
