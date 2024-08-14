import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <div className='container font-bold'>
      <div className='flex items-center justify-between'>
      <h1 className='text-4xl text-white'>Корзина</h1>
      <h2 className='text-white'>Total Price: ${getTotalPrice().toFixed(2)}</h2>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className=''>
              <div className="w-full  mx-auto p-4 bg-black text-white" >


            {cart.map(product => (
             
               <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-700 py-2" key={product.id}>
                 <div className="col-span-1 flex items-center">
                   <img src={product.image} alt="Dish" className="w-20 h-20 object-cover rounded-md"/>
                   <div className="ml-4">
                     <p className="font-bold">{product.name}</p>
                     <p className="text-gray-400 text-sm">{product.weight} г</p>
                   </div>
                 </div>
                 <div className="col-span-1 text-center">
                   <p className="font-bold">{product.price} ₽</p>
                 </div>
                 <div className="col-span-1 flex items-center justify-center">
                   <button className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2"onClick={() => decreaseQuantity(product.id)}>-</button>
                   <p className="mx-2">${product.price * product.quantity}</p>
                   <button className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2" onClick={() => increaseQuantity(product.id)}>+</button>
                 </div>
                 <div className="col-span-1 flex items-center justify-between">
                   {/* <p className="font-bold">{totalItems}</p> */}
                   <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(product.id)}>X</button>
                 </div>
               </div>
            ))}
             </div>


        </div>

        
      )}





    </div>
  );
}
