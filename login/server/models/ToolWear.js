const mongoose = require("mongoose");

// Define schema for the collection
const toolWearSchema = new mongoose.Schema({
  airTemperature: Number,
  processTemperature: Number,
  rotationalSpeed: Number,
  torque: Number,
  toolWear: String,
});

// Create model pointing to the 'toolwears' collection
const ToolWearModel = mongoose.model("ToolWear", toolWearSchema, "toolwears"); // third argument is the collection name

module.exports = ToolWearModel;
