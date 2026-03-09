const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Profile = require("../models/Profile");
const Project = require("../models/Project");

dotenv.config();

const profileData = {
  name: "Kim Hong Zhang",
  role: "Artificial Intelligence Student @ Universiti Malaya",
  bio: "Pursuing Bachelor of Computer Science (Artificial Intelligence) at University Malaya (Expected 2026). Passionate about AI, ML, and intelligent automation. Ex-ANT International Intern | 5× Hackathon Winner & Finalist.",
  location: "Petaling Jaya, Selangor, Malaysia",
  email: "kimhongzhang323@example.com",
  socialLinks: {
    github: "https://github.com/kimhongzhang323",
    linkedin: "https://www.linkedin.com/in/kim-hong-zhang-4b4168327/",
    x: "",
  },
};

const projectData = [
  {
    title: "AutoDocX",
    description: "AI-driven documentation tool that won Champion at Codenection 2025. Automates technical documentation using LLMs.",
    techStack: ["React", "TypeScript", "Spring Boot", "OpenAI API"],
    imageUrl: "",
    liveUrl: "",
    githubUrl: "https://github.com/kimhongzhang323/AutoDocX",
    featured: true,
  },
  {
    title: "MyRumah",
    description: "AI-powered real estate solution awarded First Runner Up at UM Startup Investor Challenge 2025.",
    techStack: ["React Native", "TypeScript", "Gemini API"],
    imageUrl: "",
    liveUrl: "",
    githubUrl: "https://github.com/kimhongzhang323/MyRumah",
    featured: true,
  },
  {
    title: "UMH25",
    description: "RAG-based project for UM Hackathon 2025 (Top 3 Prelim & Finalist). Intelligent information retrieval for university systems.",
    techStack: ["FastAPI", "React", "Tailwind", "RAG"],
    imageUrl: "",
    liveUrl: "",
    githubUrl: "https://github.com/kimhongzhang323/UMH25",
    featured: true,
  },
  {
    title: "SiBehGoodBank",
    description: "Intelligent banking assistant developed for the Cursor × Anthropic Hackathon. Enhances banking UX with AI.",
    techStack: ["Flutter", "Dart", "Python FastAPI", "Anthropic API"],
    imageUrl: "",
    liveUrl: "",
    githubUrl: "https://github.com/kimhongzhang323/SiBehGoodBank",
    featured: false,
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Profile.deleteMany();
    await Project.deleteMany();

    await Profile.create(profileData);
    await Project.insertMany(projectData);

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Seed failed:", error.message);
  } finally {
    await mongoose.connection.close();
  }
};

seed();