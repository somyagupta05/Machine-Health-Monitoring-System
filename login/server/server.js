// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");
// const EmployeeModel = require("./models/Employee"); // Employee model
// const ToolWearModel = require("./models/ToolWear"); // ToolWear model

// const app = express();

// // Middleware setup
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173" })); // Ensure this matches your frontend port

// // MongoDB connection
// mongoose
//   .connect("mongodb://localhost:27017/employee", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// // POST endpoint for login
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   EmployeeModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       // Compare password (assuming bcrypt is used)
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (result) {
//           res.json("success");
//         } else {
//           res.json("The password is incorrect");
//         }
//       });
//     } else {
//       res.json("No record found");
//     }
//   });
// });

// // POST endpoint for registration
// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Check if the email already exists
//   const existingUser = await EmployeeModel.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "Email already exists." });
//   }

//   // Encrypt password before saving
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new employee
//   EmployeeModel.create({ name, email, password: hashedPassword })
//     .then((employee) => res.status(201).json(employee))
//     .catch((err) => {
//       console.error("Error creating employee:", err);
//       res.status(500).json({ message: "Error registering user." });
//     });
// });

// // POST endpoint for tool wear data
// app.post("/tool-wear", (req, res) => {
//   const {
//     airTemperature,
//     processTemperature,
//     rotationalSpeed,
//     torque,
//     toolWear,
//   } = req.body;

//   // Simple validation
//   if (
//     !airTemperature ||
//     !processTemperature ||
//     !rotationalSpeed ||
//     !torque ||
//     !toolWear
//   ) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Create a new tool wear entry
//   ToolWearModel.create({
//     airTemperature,
//     processTemperature,
//     rotationalSpeed,
//     torque,
//     toolWear,
//   })
//     .then((toolWearData) => res.status(201).json(toolWearData))
//     .catch((err) => {
//       console.error("Error creating tool wear entry:", err);
//       res.status(500).json({ message: "Error submitting tool wear data." });
//     });
// });

// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const EmployeeModel = require("./models/Employee"); // Employee model
const ToolWearModel = require("./models/ToolWear"); // ToolWear model

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

// POST endpoint for login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      // Compare password (assuming bcrypt is used)
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.json("success");
        } else {
          res.json("The password is incorrect");
        }
      });
    } else {
      res.json("No record found");
    }
  });
});

// POST endpoint for registration
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Check if the email already exists
  const existingUser = await EmployeeModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists." });
  }

  // Encrypt password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new employee
  EmployeeModel.create({ name, email, password: hashedPassword })
    .then((employee) => res.status(201).json(employee))
    .catch((err) => {
      console.error("Error creating employee:", err);
      res.status(500).json({ message: "Error registering user." });
    });
});

// POST endpoint for tool wear data
app.post("/tool-wear", (req, res) => {
  const {
    airTemperature,
    processTemperature,
    rotationalSpeed,
    torque,
    toolWear,
  } = req.body;

  // Simple validation
  if (
    !airTemperature ||
    !processTemperature ||
    !rotationalSpeed ||
    !torque ||
    !toolWear
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create a new tool wear entry
  ToolWearModel.create({
    airTemperature,
    processTemperature,
    rotationalSpeed,
    torque,
    toolWear,
  })
    .then((toolWearData) => res.status(201).json(toolWearData))
    .catch((err) => {
      console.error("Error creating tool wear entry:", err);
      res.status(500).json({ message: "Error submitting tool wear data." });
    });
});

// GET endpoint for fetching tool wear data (this is the new code added)
app.get("/tool-wear", (req, res) => {
  ToolWearModel.find()
    .then((toolWearData) => res.status(200).json(toolWearData))
    .catch((err) => {
      console.error("Error fetching tool wear data:", err);
      res.status(500).json({ message: "Error fetching tool wear data." });
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const app = express();
// const port = 3001;

// // Middleware
// app.use(cors());
// app.use(express.json()); // For parsing application/json

// // MongoDB connection
// mongoose.connect("mongodb://localhost:27017/toolwears", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define Schema and Model
// const toolWearSchema = new mongoose.Schema({
//   airTemperature: Number,
//   processTemperature: Number,
//   rotationalSpeed: Number,
//   torque: Number,
//   toolWear: String, // 1 (High), 2 (Medium), 3 (Low)
// });

// const ToolWearModel = mongoose.model("ToolWear", toolWearSchema);

// // API Endpoint to fetch data

// app.get("/tool-wear", async (req, res) => {
//   try {
//     const data = await ToolWearModel.find(); // Fetch from 'toolwears' collection
//     res.status(200).json(data);
//   } catch (err) {
//     console.error("Error fetching data:", err);
//     res.status(500).json({ message: "Error fetching data" });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
