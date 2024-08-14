import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-[#0C182D]'>
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
    </div>
  );
}

export default App;
