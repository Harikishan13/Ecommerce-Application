import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const OrderSummary = () => {

  const { cartItems, products, navigate } = useContext(ShopContext)

  const getTotal = () => {
    let total = 0;
    for (let key in cartItems) {
      const [productId] = key.split('_');
      const product = products.find((p) => p._id === productId);
      if (product) {
        total += product.price * cartItems[key];
      }
    }
    return total;
  };

  const tax = getTotal() * 0.02;
  const shipping = getTotal() < 500 && getTotal() > 0 ? 10:0;

  return (
    <div className="  rounded h-fit">
      <h3 className="text-xl font-bold mb-4">
        Order Summary <span className="text-sm text-gray-500">({Object.keys(cartItems).length} Items)</span>
      </h3>
      <hr className='my-4'/>
      <div className="font-semibold text-black space-y-2">
        <div className="flex justify-between">
          <span>Price</span>
          <span>${getTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (2%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total Amount:</span>
        <span>${(getTotal() + tax + shipping).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
