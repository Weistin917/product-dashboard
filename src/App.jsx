import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Container } from "react-bootstrap";
import { useState } from 'react'
import Appbar from './components/Appbar'
import AppRoutes from './AppRoutes'
import './App.css';
import { products } from "./assets/Products";

function App() {
  const [cart, setCart] = useState(Array(products.length).fill(0)); // shopping cart state; assigns a quantity to each product.
  const [allItems, setAllItems] = useState(0);

  function addToCart( productName ) {
    const tempCart = cart.slice();
    const i = products.findIndex((p) => p.name === productName);
    console.log(i);
    tempCart[i] = tempCart[i] + 1;
    setCart(tempCart);
    setAllItems(allItems + 1);
  }

  function removeFromCart( productName ) {
    const tempCart = cart.slice();
    const i = products.findIndex((p) => p.name === productName);
    tempCart[i] = tempCart[i] - 1;
    setCart(tempCart);
    setAllItems(allItems - 1);
  }

  return (
    <BrowserRouter>
      <Appbar numItems={allItems} />
      <Container style={{marginTop: "20px"}}>
        <AppRoutes cart={cart.filter((item) => item > 0)} addItem={addToCart} removeItem={removeFromCart} />
      </Container>
    </BrowserRouter>
  );
}

export default App
