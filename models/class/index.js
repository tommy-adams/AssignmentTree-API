const CREDS = require("../../CREDS");
const mongoose = require("mongoose");

// connect to db
CREDS.connect();

// establish schema for assignments
const classSchema = new mongoose.Schema({
  name: String,
  professor: String,
  subject: String
}, { collection: "classes" });

exports.Class = mongoose.model("classes", classSchema);
