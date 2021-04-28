const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Content = new Schema({
  content_question: { type: String, required: true },
  content_tag: { type: String, required: true },
});

module.exports = mongoose.model("content", Content);
