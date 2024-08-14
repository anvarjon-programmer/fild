import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://raximov.pythonanywhere.com/cafe/products/');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to be logged in to add products to the cart.');
      navigate('/login');
      return;
    }
    addToCart(product);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className='w-full flex items-center justify-center'>
      {/* <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul> */}

      <div className='grid gap-3 md:grid-cols-4 lg:grid-cols-5 '>
        {products.map((item) =>(
          <div className='w-[250px]' key={item.id}>
          <div className=''>
            <img className='w-full h-[200px] object-cover' src={item.image} alt="" />
          </div>
          <h2 className='text-white text-xl h-[30px]'>{item.name}</h2>
          <h3 className='text-white mt-4'>{item.weight}GR</h3>
          <p className='text-white mt-2'>{item.description}</p>
          <div className='flex items-center justify-between'>
            <h4 className='text-white'>{item.price}</h4>
            <button onClick={() => handleAddToCart(item)}>
              <FaShoppingBasket className=' text-2xl text-yellow-500'/>
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
