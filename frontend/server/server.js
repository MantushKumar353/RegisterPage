const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/mernLoginApp"; // Local MongoDB URI
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api", userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
