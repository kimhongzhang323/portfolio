const { profileData } = require("../data");

const getProfile = async (_req, res) => {
  try {
    return res.json(profileData);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch profile" });
  }
};

module.exports = { getProfile };