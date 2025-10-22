import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../pages/OrderSummary';

const Cart = () => {
  const { cartItems, products, setCartItems, navigate } = useContext(ShopContext);

  const handleRemove = (key) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[key];
    setCartItems(updatedCart);
  };

  const updateQuantity = (key, change) => {
    const updatedCart = { ...cartItems };
    const currentQty = updatedCart[key] || 1;
    const newQty = currentQty + change;
    if (newQty >= 1) {
      updatedCart[key] = newQty;
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-28 ">
      <h2 className="text-3xl font-bold mb-2">Cart <span className="text-gray-500 underline">Overview</span></h2>
      <p className="text-gray-500 mb-8">
        Explore our collection of stylish clothing and footwear made for <br />comfort, quality, and everyday confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 rounded px-4 py-2 font-bold text-black bg-white">
            <span className="w-2/3 text-left">Product Details</span>
            <span className="w-[770px] text-center">Subtotal</span>
            <span className="text-right">Action</span>
          </div>

          {Object.entries(cartItems).map(([key, quantity]) => {
            const [productId, size] = key.split('_');
            const product = products.find((p) => p._id === productId);
            if (!product) return null;

            return (
              <div key={key} className="flex justify-between items-center bg-white p-4 rounded shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-2/3">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                  <div>
                    <h3 className="font-semibold text-base">{product.name}</h3>
                    <p className="text-sm text-gray-500">Size: <span className="font-medium text-black">{size}</span></p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(key, -1)}
                        className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span className="w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(key, 1)}
                        className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center w-20 sm:text-right font-semibold text-sm">${product.price * quantity}</div>

                <button onClick={() => handleRemove(key)} className="text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </div>
            );
          })}
        </div>
        <div className='max-w-[360px] w-full bg-white p-5 py-10 max-md:mt-16'>
          <OrderSummary cartItems={cartItems} products={products}/>
          <button onClick={() => navigate('/place-order')} className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm font-medium cursor-pointer" >Proceed to Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
