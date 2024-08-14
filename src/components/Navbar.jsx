import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My E-commerce Site</h1>
      <ul className="navbar-links">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li className="cart-indicator">
          <Link to="/cart">
            <span>Cart</span>
            <span className="cart-count">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
