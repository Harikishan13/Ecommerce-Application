import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/Data";
import { toast } from "react-toastify";
import { API_BASE } from "../utils/api";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || {});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    setProducts(dummyProducts);
    if (user?._id) fetchUserOrders(user._id);
  }, []);

  useEffect(() => {
  if (user?._id) fetchUserOrders(user._id);
}, [user]);

  // Sync cart & user to localStorage
  useEffect(() => localStorage.setItem("cartItems", JSON.stringify(cartItems)), [cartItems]);
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  // Fetch orders from backend
  const fetchUserOrders = async (userId) => {
    if (!userId) return;
    try {
      const res = await fetch(`${API_BASE}/orders/${userId}`);
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
    }
  };

  // Add to cart
  const addToCart = (itemId, size) => {
    if (!size) return toast.error("Please select a size first");
    const key = `${itemId}_${size}`;
    setCartItems((prev) => ({ ...prev, [key]: prev[key] ? prev[key] + 1 : 1 }));
    toast.success("Item added to cart!");
  };

  const getCartItemCount = () => Object.values(cartItems).reduce((t, qty) => t + qty, 0);
  const count = getCartItemCount();

const placeorder = async (orderData) => {
  if (!user?._id) {
    toast.error("Please login before placing order");
    setShowUserLogin(true);
    return;
  }

  // Ensure image is always a string
  const formattedItems = orderData.items.map((it) => ({
    productId: it.productId,
    name: it.name || "Unknown",
    image: typeof it.image === "string" ? it.image : "/placeholder.png",
    price: Number(it.price || 0),
    qty: Number(it.qty || 0),
    size: it.size || "",
  }));

  const newOrder = {
    userId: user._id,
    customer: orderData.customer,
    items: formattedItems,
    amount: Number(orderData.amount || 0),
    method: orderData.method || "cash",
    paymentStatus: "Pending",
  };

  console.log("Sending order:", newOrder);
  console.log("API_BASE:", API_BASE);

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Order placed successfully!");
      setCartItems({});
      fetchUserOrders(user._id);
      navigate("/my-orders");
    } else {
      toast.error(data.message || "Failed to place order");
      console.error("Order error:", data);
    }
  } catch (err) {
    toast.error("Server error: " + err.message);
    console.error("Server exception:", err);
  }
};

  // Cancel order (frontend only, backend integration optional)
  // Cancel order
const cancelOrder = async (orderId) => {
  if (!orderId) return toast.error("Invalid order ID");

  try {
    // Send PUT request to backend to update order status
    const res = await fetch(`${API_BASE}/orders/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Cancelled" }),
    });

    const data = await res.json();

    if (res.ok) {
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );
      toast.info("Order cancelled successfully");
    } else {
      toast.error(data.message || "Failed to cancel order");
    }
  } catch (err) {
    toast.error("Server error: " + err.message);
    console.error("Cancel order error:", err);
  }
};


  const value = {
    user,
    setUser,
    navigate,
    products,
    search,
    setSearch,
    showUserLogin,
    setShowUserLogin,
    addToCart,
    cartItems,
    setCartItems,
    getCartItemCount,
    orders,
    setOrders,
    placeorder,
    cancelOrder,
    count,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
