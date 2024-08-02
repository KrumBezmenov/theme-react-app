const mongoose = require("mongoose");

const themesSchema = new mongoose.Schema({
  country: {
    type: String,
    minLength: [1, "Country name should be at least 1 characters"],
    required: true,
  },
  city: {
    type: String,
    minLength: [1, "City name should be at least 2 characters"],
    required: true,
  },
  genre: {
    type: String,
    minLength: [3, "Type of Adventure should be at least 3 characters"],
    maxLength: [80, "Type of Adventure should be maximum 80 characters"],
    required: true,
  },

  image: {
    type: String,
    match: [/^https?:\/\//, "Invalid image url"],
    required: true,
  },
  description: {
    type: String,
    minLength: [100, "Description should be at least 100 characters"],
    maxLength: [1500, "Description should be maximum 1500 characters"],
    required: true,
  },
  reviewedList: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: Date,
});

themesSchema.pre("save", function () {
  if (!this.createdAt) {
    this.createdAt = Date.now();
  }
});

const Themes = mongoose.model("Themes", themesSchema);

module.exports = Themes;
