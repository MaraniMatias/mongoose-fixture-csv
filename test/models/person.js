const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = Schema({
  name: String,
  pets: [
    {
      name: String,
      age: Number
    }
  ]
});

module.exports = mongoose.model("Person", storySchema);
