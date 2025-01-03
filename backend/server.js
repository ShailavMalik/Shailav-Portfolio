// Import necessary modules
import express from "express";
import nodemailer from "nodemailer";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

console.log("Starting server...");

// Initialize express app
const app = express();
console.log("Express app initialized");

// Load environment variables from .env file
dotenv.config();
console.log("Environment variables loaded");

// Middleware to parse URL-encoded data and JSON data
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
console.log("Middleware configured");

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: "http://localhost:3000",
  methods: "POST",
  credentials: true,
}));
console.log("CORS configured");

// POST route to handle form submissions
app.post("/api/hire-me-form", async (req, res) => {
  const { name, email, subject, message } = req.body;
  // Your email sending logic here
  try {
    // Send email using the transporter
    await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions2);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("error in backend:" + error);
    res.status(500).send("Error sending email");
  }
});
console.log("API routes configured");

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
console.log("Static files configured");

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).send("Server is up and running!");
});
console.log("Health check endpoint configured");

// Start the server on the specified port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});