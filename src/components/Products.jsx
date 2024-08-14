import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
