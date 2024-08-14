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
    <header className=''>
      <nav className="navbar container fixed top-0 left-0 right-0 bg-[#0C182D]">
    <div className='flex items-center justify-between w-full py-4 '>
    <Link to={'/'}>
    <img src={Logo} alt="" />
    </Link>

    <div className='flex items-center space-x-4'>
      <SearchBar/>
      <Link to={'/register'}>
     <FaRegUser className='text-white text-xl'/>
    </Link>
    <Link to='/cart'>
      <span className="text-white absolute top-5 right-0">{totalItems}</span>
      <CiShoppingCart className='text-white font-semibold border-lg' size={30}/>
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

    <div className='flex justify-between mt-[150px] container my-10'>
        <div>
            <h1 className='text-white text-3xl max-w-[300px]'>Доставка готовый еды из фермерских продуктов!</h1>
                {/* <Image className='absolute left-5 my-5' src={tor} alt='tor'/> */}

                <div className='flex flex-col text-white mt-[215px]'>
                <Link href=''>+7 (499) 841-67-29</Link>
                <Link href=''>delivery@midas.rest</Link>
                </div>
            </div>
            <div className=''>
                <img className='rounded-lg' src="https://media.istockphoto.com/id/1263363580/photo/traditional-dish-dolma.jpg?s=612x612&w=0&k=20&c=sO0uGNLMb7V1VngP_arrPET6nfwo5pEnPJAFmGupy90=" alt="" />
            </div>
            
        </div>
    </header>
  );
}
