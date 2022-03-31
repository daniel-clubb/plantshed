import React from "react";
//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Countries from "./components/Pages/Countries";
import AboutUs from "./components/Pages/AboutUs";
//App CSS
import "./App.css";
import Checkout from "./components/Pages/Checkout";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Products" element={<Products />} exact />
            <Route path="/Countries" element={<Countries />} exact />
            <Route path="/AboutUs" element={<AboutUs />} exact />
            <Route path="/Checkout" element={<Checkout />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}