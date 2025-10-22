const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Stripe = require("stripe"); 
require("dotenv").config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST","PUT","DELETE"],
  credentials: true
}));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, 
});

const User = mongoose.model("User", UserSchema);

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productId : String,
      name: String,
      image : String,
      price: Number,
      qty: Number,
      size : String
    }
  ],
  amount: Number,
  method : String,
  paymentStatus : {type:String, default : "pending"},
  status: { type: String, default: "Order Placed" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

const SECRET_KEY = process.env.JWT_SECRET;

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    await User.create({ name, email, password });
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "No registered account" });

    if (user.password !== password) {
      return res.status(401).json({ message: "Password incorrect" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      message: "success",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const { userId, items, amount, method, paymentStatus } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }

    const newOrder = await Order.create({
      userId,
      items,
      amount,
      method,
      paymentStatus,
      status: "Order Placed",
    });

    res.status(201).json({ message: "Order saved", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/orders/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/orders/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order updated successfully", order: updatedOrder });
  } catch (err) {
    console.error("❌ Error updating order:", err);
    res.status(500).json({ error: err.message });
  }
});


app.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No items provided" });
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.qty, 
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      payment_method_types: ["card"], 
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe Checkout Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});
