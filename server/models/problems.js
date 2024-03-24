const e = require("express");
const mongoose = require("mongoose");
const ProblemsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  acceptance: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  testcases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Testcases",
      required: true,
    },
  ],
  inputeg: {
    type: String,
    required: true,
  },
  outputeg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Problems", ProblemsSchema);
