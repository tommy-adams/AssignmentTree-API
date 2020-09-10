// import packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// import data models
const assignment = require("./models/assignment");
const _class = require("./models/class");

// create express server
const app = express();

// allow CORS to make requests from the frontend
// establish body-parser to read data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// request functionality
// GET assignments
app.get("/api/assignments", async (req, res) => {
  const assignments = req.query
    ? await assignment.Assignment.find(req.query)
    : await assignments.Assignment.find();
  res.send(assignments);
});

// POST assignment
app.post("/api/assignments/create", async (req, res) => {
  const newAssignment = new assignment.Assignment(req.body);
  const doc = await newAssignment.save();
  res.send(doc);
});

// PATCH assignment
app.patch("/api/assignments/update", async (req, res) => {
  const target = assignment.Assignment.findOne({ _id: req.body._id });
  await target.updateOne(req.body);
  res.send(req.body);
});

// GET classes
app.get("/api/classes", async (req, res) => {
  const classes = req.query
    ? await _class.Class.find(req.query)
    : await _class.Class.find();
  res.send(classes);
});

// POST class
app.post("/api/classes/create", async (req, res) => {
  const newClass = new _class.Class(req.body);
  const doc = await newClass.save();
  res.send(doc);
});

// establish port (default to 5000) and listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
