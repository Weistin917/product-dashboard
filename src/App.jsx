import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Product />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
