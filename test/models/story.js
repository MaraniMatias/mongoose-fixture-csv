const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "usuarios" },
  title: String
});

module.exports = mongoose.model("Story", storySchema);
