const mongoose = require("mongoose");
const TestcasesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  input: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Testcases", TestcasesSchema);
