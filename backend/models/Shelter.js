const mongoose = require("mongoose");

const shelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  vailableBeds: {
    type: Number,
    required: true
  },
  contact: {
    type: String,
    required: true
  }
});

const Shelter = mongoose.model("Shelter", shelterSchema);

module.exports = Shelter;
