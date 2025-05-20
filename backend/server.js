const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// ✅ CORS Configuration
app.use(cors({
  origin: "https://spell-checker-murex.vercel.app", // your actual frontend domain
  credentials: true
}));

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
