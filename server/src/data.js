const profileData = {
  name: "Kim Hong Zhang",
  role: "Artificial Intelligence Student",
  bio: "Design has always been more than just a job — it’s my passion. I blend AI and modern web design to create intelligent, beautiful interfaces.",
  intro: "I'm a B.CompSc (AI) student at Universiti Malaya, passionate about building intelligent automation and full-stack solutions.",
  location: "Kuala Lumpur, Malaysia",
  email: "kimhongzhang323@example.com",
  socialLinks: {
    github: "https://github.com/kimhongzhang323",
    linkedin: "https://www.linkedin.com/in/kim-hong-zhang-4b4168327/",
    x: "",
  },
  stats: [
    { label: "Hackathon Wins", value: "+5" },
    { label: "AI Projects", value: "+15" },
  ],
  experience: [
    { role: "Intern AI Developer", company: "ANT International", period: "2024 - 2025" },
    { role: "Full-stack Developer", company: "Freelance / Projects", period: "2023 - 2024" },
    { role: "B.CompSc AI Student", company: "Universiti Malaya", period: "2022 - Present" },
  ],
  services: [
    { title: "AI Integration", desc: "Developing RAG-based systems and LLM integrations for modern web applications." },
    { title: "Full-stack Development", desc: "Building scalable applications with React, Node.js, and modern databases." },
    { title: "UI/UX Design", desc: "Creating minimalist, premium user experiences with a focus on usability." },
    { title: "Intelligent Automation", desc: "Streamlining workflows using Python, FastAPI, and agentic AI models." },
  ]
};

const projectData = [
  {
    title: "AutoDocX",
    category: "AI & Documentation",
    description: "AI-driven documentation tool that won Champion at Codenection 2025. Automates technical documentation using LLMs.",
    techStack: ["React", "TypeScript", "Spring Boot", "OpenAI"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/kimhongzhang323/AutoDocX",
    featured: true,
  },
  {
    title: "MyRumah",
    category: "Real Estate & AI",
    description: "AI-powered real estate solution awarded First Runner Up at UM Startup Investor Challenge 2025.",
    techStack: ["React Native", "TypeScript", "Gemini API"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/kimhongzhang323/MyRumah",
    featured: true,
  },
  {
    title: "UMH25",
    category: "RAG & Retrieval",
    description: "RAG-based project for UM Hackathon 2025 (Top 3 Prelim & Finalist). Intelligent information retrieval.",
    techStack: ["FastAPI", "React", "RAG"],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/kimhongzhang323/UMH25",
    featured: true,
  },
  {
    title: "SiBehGoodBank",
    category: "Fintech & AI",
    description: "Intelligent banking assistant developed for the Cursor × Anthropic Hackathon. Enhances banking UX.",
    techStack: ["Flutter", "Dart", "Python", "Anthropic"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/kimhongzhang323/SiBehGoodBank",
    featured: true,
  },
];

module.exports = { profileData, projectData };
