const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: String,
  pets: [
    {
      name: String,
      age: Number
    }
  ]
});
module.exports = mongoose.model("Person", schema);
