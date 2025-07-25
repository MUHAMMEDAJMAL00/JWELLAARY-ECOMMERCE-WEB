const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Banner = mongoose.model("Banner", BannerSchema);
module.exports = Banner;
