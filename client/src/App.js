import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import RestaurantDetails from './RestaurantDetails';
import Order from "./Order";
import Map from "./Map";

function App() {
  const [ order, setOrder ] = useState([])
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path='/map'
            element={<Map />}
          />
          <Route 
            path='/order' 
            element=
            {<Order
              order={order}  
            />} 
          />
          <Route 
            path="/restaurants/:id" 
            element=
              {<RestaurantDetails
                order={order}
                setOrder={setOrder}
              />} 
          />
          <Route 
            path="/" 
            element={<Container />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;