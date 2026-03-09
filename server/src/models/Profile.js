const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, required: true, trim: true },
    location: { type: String, default: "" },
    email: { type: String, required: true, trim: true },
    socialLinks: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      x: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);