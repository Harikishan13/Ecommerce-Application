// pages/MyOrders.jsx
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { API_BASE } from "../utils/api";

const MyOrders = () => {
  const { orders, setOrders, user } = useContext(ShopContext);

  // Fetch orders for logged-in user
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?._id) {
        setOrders([]);
        return;
      }
      try {
        const res = await fetch(`${API_BASE}/orders/${user._id}`);
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [setOrders, user]);

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Cancelled" }),
      });

      if (!res.ok) throw new Error("Failed to cancel order");

      // update locally
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "Cancelled" } : order
        )
      );
    } catch (err) {
      console.error("Error cancelling order:", err);
      alert("Failed to cancel order. Try again.");
    }
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold mb-4">
        My Orders <span className="text-gray-500 underline">List</span>
      </h2>
      <p className="text-gray-500 mb-6">
        Explore your past purchases and track or manage your orders.
      </p>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-lg">No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-6 rounded shadow-md mb-6 border border-gray-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold text-lg">
                  Order ID: <span className="text-blue-600">{order._id}</span>
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">Total: ₹{Number(order.amount || 0).toFixed(2)}</p>
                <p className="text-sm text-gray-500">
                  {order.method} | {order.paymentStatus}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="border-t pt-3">
              {Array.isArray(order.items) && order.items.length ? (
                order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center mb-4 text-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image || "/placeholder.png"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded border"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500">
                          Size: {item.size || "-"} | Qty: {item.qty}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-green-600">
                        ₹{(Number(item.price || 0) * Number(item.qty || 0)).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Price: ₹{Number(item.price || 0).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No items in this order.</p>
              )}
            </div>

            {/* Footer */}
            <div className="mt-3 flex justify-between items-center text-sm text-gray-600">
              <div>
                Status:{" "}
                <span
                  className={`font-medium ${
                    order.status === "Cancelled" ? "text-red-600" : "text-green-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {order.status !== "Cancelled" && (
                <button
                  onClick={() => handleCancelOrder(order._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
