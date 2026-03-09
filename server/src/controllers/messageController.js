const createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" });
  }

  try {
    // MongoDB is disabled, logging to console for now
    console.log("New message received (DB disabled):", { name, email, message });
    return res.status(201).json({ id: Date.now(), message: "Message sent (Development Mode)" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send message" });
  }
};

module.exports = { createMessage };