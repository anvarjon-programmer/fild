import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Logo from '../assets/Logo.svg'
import SearchBar from './SearchBar';
import { CiShoppingCart } from 'react-icons/ci';
import { FaRegUser } from "react-icons/fa6";
export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <nav className="navbar container">
    <div className='flex items-center justify-between w-full py-4'>
    <Link to={'/'}>
    <img src={Logo} alt="" />
    </Link>

    <div className='flex items-center space-x-4'>
      <SearchBar/>

    <Link to='/cart'>
      <span className="text-white absolute top-5 right-0">{totalItems}</span>
      <CiShoppingCart className='text-white font-semibold border-lg' size={30}/>
    </Link>
    <Link to={'/register'}>
     <FaRegUser className='text-white text-xl'/>
    </Link>
    </div>
      {/* <ul className="flex">
        <li><Link className='text-emerald-500' to="/">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li className="cart-indicator">
          <Link to="/cart">
           <span>Cart</span>
             <span className="cart-count">{totalItems}</span>
           </Link>
        </li>
      </ul> */}
    </div>
    </nav>
  );
}
