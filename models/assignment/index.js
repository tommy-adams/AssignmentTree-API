const CREDS = require("../../CREDS");
const mongoose = require("mongoose");

// connect to db
CREDS.connect();

// establish schema for assignments
const assignmentSchema = new mongoose.Schema({
  class_id: String,
  class_name: String,
  name: String,
  description: String,
  due: Date,
  completed: Boolean
}, { collection: "assignments" });

exports.Assignment = mongoose.model("assignments", assignmentSchema);
