const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Problem = require("./models/problems");
const Testcases = require("./models/testcases");

mongoose.connect("mongodb://localhost:27017/leetcode");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/problems", async (req, res) => {
  const probs = await Problem.find({});
  console.log(probs);
  res.json(probs);
});
app.get("/problems/:id", async (req, res) => {
  const { id } = req.params;
  const prob = await Problem.findOne({
    id: id,
  }).populate("testcases");
  console.log(prob);
  res.json(prob);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
