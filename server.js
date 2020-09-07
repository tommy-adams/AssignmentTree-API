// import packages
const express = require("express");
const cors = require("cors");

// import data models
const assignment = require("./models/assignment");

// create express server
const app = express();

// allow CORS to make requests from the frontend
app.use(cors());

// request functionality
// GET assignments based on query from frontend
app.get("/api/assignments", async (req, res) => {
  const assignments = req.query
    ? await assignment.Assignment.find(req.query)
    : await assignments.Assignment.find();
  res.send(assignments);
});

// establish port (default to 5000) and listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
