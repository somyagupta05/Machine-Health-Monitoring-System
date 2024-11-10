const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee"); // Adjust the model path as needed
const ToolWearModel = require("./models/ToolWear");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" })); // Ensure this matches your frontend port

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));
// for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the passowrd is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});
// POST endpoint for registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation check
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create new employee record
  EmployeeModel.create({ name, email, password })
    .then((employee) => res.status(201).json(employee))
    .catch((err) => {
      console.error("Error creating employee:", err);
      res.status(500).json({ message: "Error registering user." });
    });
});

// tool wear
app.post("/tool-wear", (req, res) => {
  const {
    airTemperature,
    processTemperature,
    rotationalSpeed,
    torque,
    toolWear,
  } = req.body;

  // Validation
  if (
    !airTemperature ||
    !processTemperature ||
    !rotationalSpeed ||
    !torque ||
    !toolWear
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create and save tool wear data
  ToolWearModel.create({
    airTemperature,
    processTemperature,
    rotationalSpeed,
    torque,
    toolWear,
  })
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.error("Error saving tool wear data:", err);
      res.status(500).json({ message: "Error saving data." });
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
// Example of starting the Express server (this should be in only one file)
// const express = require("express");
// const app = express();

// // Your routes and middleware go here

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
