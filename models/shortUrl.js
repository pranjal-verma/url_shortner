const mongoose = require("mongoose");
const short = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  orignal: {
    type: String,
    require: true,
  },

  shortened: {
    type: String,
    default: short.generate(),
  },

  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("urls", shortUrlSchema);
