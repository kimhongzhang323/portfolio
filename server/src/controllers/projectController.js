const { projectData } = require("../data");

const getProjects = async (_req, res) => {
  try {
    res.json(projectData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

module.exports = { getProjects };