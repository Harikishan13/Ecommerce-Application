import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import OrderSummary from "./OrderSummary";
import { API_BASE } from '../utils/api';

const PlaceOrder = () => {
  const { placeorder, cartItems, getCartItemCount, products, user } =
    useContext(ShopContext);

  const [method, setMethod] = useState("COD");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const getTotal = () => {
    let total = 0;
    for (let key in cartItems) {
      const [productId] = key.split("_");
      const product = products.find((p) => p._id === productId);
      if (product) {
        total += product.price * cartItems[key];
      }
    }
    return total;
  };

  const tax = getTotal() * 0.02;
  const shipping = getTotal() < 500 && getTotal() > 0 ? 10 : 0;
  const grandTotal = getTotal() + tax + shipping;

  // 🔹 Handle input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  // 🔹 Submit Handler
const onSubmitHandler = async (e) => {
  e.preventDefault();

  if (getCartItemCount() === 0) {
    alert("Your cart is empty! Please add items before placing an order.");
    return;
  }

const formattedItems = Object.keys(cartItems).map((key) => {
  const [productId, size] = key.split("_");
  const product = products.find((p) => p._id === productId);
  return {
    productId,
    name: product?.name,
    image: typeof product?.image === "string" ? product.image :"/placeholder.png",
    price: Number(product?.price),
    size,
    qty: Number(cartItems[key]),
  };
});

const orderData = {
  customer: formData,
  items: formattedItems,
  amount: parseFloat(grandTotal.toFixed(2)),
  method,
  status: "Placed",
  createdAt: new Date().toISOString(),
  userId: user?._id,
};


  if (method === "COD") {
    placeorder(orderData);
  } else if (method === "Stripe") {
    try {
      const formattedItems = Object.keys(cartItems).map((key) => {
        const [productId] = key.split("_");
        const product = products.find((p) => p._id === productId);

        return {
          name: product?.name || "Unknown Product",
          price: product?.price || 0,
          quantity: cartItems[key],
        };
      });
      const res = await fetch(`${API_BASE}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: formattedItems }),
      });

      let data;
        if (!res.ok) {
          const txt = await res.text();
          throw new Error('Server error: ' + (txt || res.status));
        }
        data = await res.json();

        if (data.url) {
        window.location.href = data.url; 
      } else {
        alert("Stripe checkout failed: " + (data.error || "Unknown error"));
        console.error("Stripe response error:", data);
      }
    } catch (err) {
      console.error("Stripe Error:", err);
      alert("Something went wrong with payment.");
    }
  }
};


  return (
    <section className="px-20 py-30 bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col xl:flex-row gap-12"
      >
        {/* Left Section - Delivery Info */}
        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl font-bold">
            Delivery <span className="text-gray-500 underline">Information</span>
          </h1>

          {/* Name */}
          <div className="flex gap-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={onChangeHandler}
              type="text"
              placeholder="First Name"
              className="flex-1 ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={onChangeHandler}
              type="text"
              placeholder="Last Name"
              className="flex-1 ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col gap-4">
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Email"
              className="w-full ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={onChangeHandler}
              type="text"
              placeholder="Phone Number"
              className="w-full ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
          </div>

          {/* Street */}
          <input
            name="street"
            value={formData.street}
            onChange={onChangeHandler}
            type="text"
            placeholder="Street"
            className="w-full ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
            required
          />

          {/* City, State, Zip, Country */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              type="text"
              placeholder="City"
              className="ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
            <input
              name="state"
              value={formData.state}
              onChange={onChangeHandler}
              type="text"
              placeholder="State"
              className="ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
            <input
              name="pincode"
              value={formData.pincode}
              onChange={onChangeHandler}
              type="text"
              placeholder="Zip Code"
              className="ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
            <input
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              type="text"
              placeholder="Country"
              className="ring-1 ring-gray-300 p-2 rounded bg-white outline-none"
              required
            />
          </div>
        </div>

        {/* Right Section - Order Summary + Payment */}
        <div className="flex-1 flex flex-col py-10">
          <div className="max-w-[360px] w-full bg-white p-8 shadow-md rounded">
            {/* ✅ Order Summary */}
            <OrderSummary />

            {/* Payment Method */}
            <h2 className="mt-6 font-semibold text-gray-700">Payment Method</h2>
            <div className="flex gap-3 mt-3">
              <button
                type="button"
                onClick={() => setMethod("COD")}
                className={`flex-1 py-2 rounded text-sm font-medium border ${
                  method === "COD"
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                Cash on Delivery
              </button>
              <button
                type="button"
                onClick={() => setMethod("Stripe")}
                className={`flex-1 py-2 rounded text-sm font-medium border ${
                  method === "Stripe"
                    ? "bg-black text-white border-black"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                Stripe
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm font-medium"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PlaceOrder;
