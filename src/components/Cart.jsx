import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
