import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import ShoppingCart from './components/ShoppingCart';

function AppRoutes({ cart, addItem, removeItem }) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:productName' element={<Details addItem={addItem} />} />
            <Route path='/shoppingcart' element={<ShoppingCart shopcart={cart} />} />
        </Routes>
    );
}

export default AppRoutes;