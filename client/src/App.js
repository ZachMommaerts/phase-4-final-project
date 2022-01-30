import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import RestaurantDetails from './RestaurantDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/" element={<Container />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;