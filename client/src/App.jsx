import { useState, useEffect, useRef, lazy, Suspense } from "react";
import "./styles.css";

const StackIcon = lazy(() => import("tech-stack-icons"));

const profile = {
  name: "Kim Hong Zhang",
  email: "kim.hong.zhang323@gmail.com",
  phone: "+6012-575121",
  location: "Kuala Lumpur, Malaysia",
  github: "https://github.com/kimhongzhang323",
  linkedin: "https://www.linkedin.com/in/kim-hong-zhang-4b4168327/",
};

const skills = ["Python", "Java Spring Boot", "JavaScript", "Databases", "Machine Learning"];

const languages = [
  { name: "Chinese", level: "Professional" },
  { name: "English", level: "Professional" },
  { name: "Bahasa Melayu", level: "Native" },
];

const experience = [
  { role: "Backend Engineer Intern", company: "Ant International", period: "2024", desc: "Designed and implemented an AI system using Spring Boot. Managed CI/CD pipelines and system architecture for the company's AI extension.", logo: "/ant-logo.jpg" },
  { role: "Director", company: "MYTech Career Fair 2026", period: "Jan 2026", desc: "Ensured smooth event operations and coordinated team guidance across departments." },
  { role: "Vice President", company: "PEKOM 25/26", period: "Current", desc: "Advisor for Execution Team, Dean's Cup 2025, UM Cybersecurity Summit 2026, and Question Maker for Codefest 2025." },
  { role: "Director & Question Maker", company: "Programming League National 2025", period: "2025", desc: "Managed communications with PEKOM and HEP. Question Maker for Competitive Programming." },
];

const projects = [
  { title: "JomCare", cat: "AI & Volunteer Management", award: "Top 6 Finalist", desc: "Volunteer management super-app with AI form autofill (Gemini), skills-based recommendation engine (FastAPI), real-time QR attendance at NUS Hack4Good 2026.", url: "https://github.com/kimhongzhang323/JomCare" },
  { title: "MyRumah", cat: "AR & E-Commerce", award: "First Runner Up", desc: "AR interior design super-app using Three.js and Expo. Context-aware AI Assistant (Gemini) for furniture recommendations.", url: "https://github.com/kimhongzhang323/MyRumah" },
  { title: "AutoDocX", cat: "Developer Tools", award: "Champion", desc: "Full-stack documentation automation platform using Spring Boot and React with AI-driven generation at Codenection 2025.", url: "https://github.com/kimhongzhang323/AutoDocX" },
  { title: "Community Connect", cat: "Social Impact", award: "Champion", desc: "Multilingual platform delivering information to senior citizens and low-income families at GDGoc UM Web Dev Challenge.", url: "https://github.com/kimhongzhang323/GDGoCUM_WebDevComp2025" },
  { title: "Journey", cat: "Digital Identity", desc: "Unified digital identity platform for Malaysian government services with AI Smart Assistant (Gemini Pro) and biometric security.", url: "https://github.com/kimhongzhang323/Journey" },
  { title: "SiBehGoodBank", cat: "Fintech", desc: "Next-generation digital banking app with cardless biometric ATM withdrawals and voice-enabled AI Chat Assistant.", url: "https://github.com/kimhongzhang323/SiBehGoodBank" },
];

const testimonials = [
  { name: "Chow Ying Tong", role: "Full Stack Engineer", content: "Kim consistently delivered clean, well-structured code while keeping the whole team on track. He is a natural leader, stepping up to lead discussions and provide innovative ideas and solutions that genuinely moved projects forward." },
  { name: "Tan Shan Chien", role: "Software Engineer", content: "Kim is very responsible. He managed multiple projects simultaneously without letting quality slip. He has a solid foundation in agentic architecture — one of the few people I'd trust to own the entire backend." },
  { name: "Marcus Mah", role: "Frontend Developer", content: "Kim is highly responsible with strong engineering skills. His foundation in backend and system architecture lets him design robust solutions under tight timelines. Communicates effectively and elevates every team he's part of." },
  { name: "Jax Choong", role: "Backend Engineer", content: "I've seen first-hand his exceptional skills integrating AI components and backend systems. He consistently delivers polished features while keeping progress strictly on track — and is a natural leader in every room he's in." },
];

const packages = [
  {
    tier: "Starter", name: "Landing Page", price: 800, delivery: "5–7 days", revisions: "2 rounds",
    desc: "Clean, responsive landing page tailored to your brand.",
    features: [
      { label: "Single-page responsive site", yes: true },
      { label: "Custom design", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "Contact form", yes: true },
      { label: "Basic SEO", yes: true },
      { label: "Multi-page", yes: false },
      { label: "CMS/Admin panel", yes: false },
      { label: "Custom backend", yes: false },
    ],
    cta: "Get Started",
  },
  {
    tier: "Professional", name: "Business Website", price: 2200, delivery: "12–18 days", revisions: "5 rounds",
    desc: "Complete website with CMS, analytics and great UX.",
    features: [
      { label: "Up to 6 pages", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "CMS/Admin panel", yes: true },
      { label: "Contact + email integration", yes: true },
      { label: "Advanced SEO + sitemap", yes: true },
      { label: "Analytics integration", yes: true },
      { label: "Performance optimisation", yes: true },
      { label: "Custom backend", yes: false },
    ],
    cta: "Most Popular", featured: true,
  },
  {
    tier: "Enterprise", name: "Full-Stack App", price: 5000, priceLabel: "From", delivery: "4–8 weeks", revisions: "Unlimited",
    desc: "Custom web applications with AI, backend, and cloud architecture.",
    features: [
      { label: "Full-stack web application", yes: true },
      { label: "Custom REST/GraphQL API", yes: true },
      { label: "Auth & user management", yes: true },
      { label: "Database design", yes: true },
      { label: "AI/ML integration", yes: true },
      { label: "Cloud deployment", yes: true },
      { label: "CI/CD pipeline", yes: true },
      { label: "30-day post-launch support", yes: true },
    ],
    cta: "Let's Talk",
  },
];

const addons = [
  { price: "+ RM 300", name: "Logo Design", desc: "Minimal wordmark or icon logo." },
  { price: "+ RM 400", name: "E-Commerce", desc: "Product listings, cart & Stripe payments." },
  { price: "+ RM 250", name: "AI Chatbot", desc: "Chatbot connected to your site content." },
  { price: "+ RM 350", name: "Multilingual", desc: "Support for up to 3 languages." },
  { price: "+ RM 300", name: "Speed Audit", desc: "Core Web Vitals + performance fixes." },
  { price: "+ RM 200", name: "Extra Revision", desc: "One additional design change round." },
  { price: "+ RM 500", name: "API Integration", desc: "Connect any 3rd-party service or API." },
  { price: "+ RM 150/mo", name: "Maintenance", desc: "Monthly updates, fixes & monitoring." },
];

const services = ["Web Design", "React Development", "API Integration", "AI Features", "Mobile-first UI", "Cloud Deployment", "SEO Optimisation", "UI/UX Design"];

const devStack = [
  { name: "React", iconKey: "react" },
  { name: "TypeScript", iconKey: "typescript" },
  { name: "Python", iconKey: "python" },
  { name: "Node.js", iconKey: "nodejs" },
  { name: "Spring Boot", iconKey: "spring" },
  { name: "PostgreSQL", iconKey: "postgresql" },
  { name: "MongoDB", iconKey: "mongodb" },
  { name: "TensorFlow", iconKey: "tensorflow" },
  { name: "Flutter", iconKey: "flutter" },
  { name: "Tailwind CSS", iconKey: "tailwindcss" },
  { name: "Docker", iconKey: "docker" },
  { name: "Git", iconKey: "git" },
];

const aiStack = [
  { name: "OpenAI", iconKey: "openai" },
  { name: "Anthropic", iconKey: "anthropic" },
  { name: "Gemini", iconKey: "gemini" },
  { name: "Hugging Face", iconKey: "huggingface" },
  { name: "DeepSeek", iconKey: "deepseek" },
  { name: "Mistral", iconKey: "mistral" },
  { name: "Groq", iconKey: "groq" },
  { name: "Perplexity", iconKey: "perplexity" },
  { name: "Cursor", iconKey: "cursor" },
  { name: "Ollama", iconKey: "ollama" },
  { name: "LlamaIndex", iconKey: "llamaindex" },
];

function Check() {
  return (
    <svg className="feat-check" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4.5 7.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function X() {
  return (
    <svg className="feat-x" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 5l5 5M10 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", pkg: "", budget: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <form onSubmit={submit}>
      {sent && <div className="form-success">✓ Received! I'll reply within 24 hours.</div>}
      <div className="form-row">
        <div className="form-group">
          <label className="form-lbl">Name</label>
          <input className="form-input" placeholder="Jane Doe" required value={form.name} onChange={set("name")} />
        </div>
        <div className="form-group">
          <label className="form-lbl">Email</label>
          <input className="form-input" type="email" placeholder="jane@co.com" required value={form.email} onChange={set("email")} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-lbl">Package</label>
          <select className="form-select" value={form.pkg} onChange={set("pkg")}>
            <option value="">Select…</option>
            <option>Starter — RM 800</option>
            <option>Professional — RM 2,200</option>
            <option>Enterprise — From RM 5,000</option>
            <option>Custom / Not sure</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-lbl">Budget</label>
          <select className="form-select" value={form.budget} onChange={set("budget")}>
            <option value="">Select…</option>
            <option>Below RM 1,000</option>
            <option>RM 1,000 – 3,000</option>
            <option>RM 3,000 – 6,000</option>
            <option>Above RM 6,000</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="form-lbl">Project Brief</label>
        <textarea className="form-textarea" placeholder="Describe your project, goals, and any requirements…" required value={form.msg} onChange={set("msg")} />
      </div>
      <button className="form-submit" type="submit" disabled={loading}>
        {loading ? "Sending…" : "Send Brief →"}
      </button>
    </form>
  );
}

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".aos").forEach((el) => obs.observe(el));

    const tobs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("testi-visible"); });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".testi-card").forEach((el) => tobs.observe(el));

    return () => { obs.disconnect(); tobs.disconnect(); };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <img src="/zy-logo.png" alt="Z&Y Studio" className="nav-logo-img" />
          </div>
          <div className="nav-links">
            <a onClick={() => scrollTo("about")}>About</a>
            <a onClick={() => scrollTo("work")}>Work</a>
            <a onClick={() => scrollTo("sandbox")}>Sandbox</a>
            <a onClick={() => scrollTo("services")}>Services</a>
            <a onClick={() => scrollTo("contact")} className="nav-cta">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-label">Open for projects · KL, Malaysia</div>
              <h1>We Build<br /><span>Digital</span><br />Experiences.</h1>
              <p className="hero-sub">
                Full-stack web apps, AI integrations, and pixel-perfect interfaces — crafted by Kim Hong Zhang, AI student and 5× hackathon winner.
              </p>
              <div className="hero-actions">
                <a onClick={() => scrollTo("sandbox")} className="btn-p">Explore Sandbox ↓</a>
                <a onClick={() => scrollTo("contact")} className="btn-o">Contact Us</a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="n" style={{ color: "var(--accent)" }}>5×</div>
                  <div className="l">Hackathon Winner</div>
                </div>
                <div className="hero-stat">
                  <div className="n">9+</div>
                  <div className="l">Projects Shipped</div>
                </div>
                <div className="hero-stat">
                  <div className="n">3</div>
                  <div className="l">Yrs Experience</div>
                </div>
              </div>
            </div>
            <div className="hero-img-wrap">
              <img src="https://github.com/kimhongzhang323.png" alt="Kim Hong Zhang" />
              <div className="hero-badge">
                <div className="n">AI</div>
                <div className="l">Student @ UM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="marquee-wrap" style={{ marginTop: 60 }}>
          <div className="marquee-track">
            {[...services, ...services, ...services, ...services].map((s, i) => (
              <div key={i} className="marquee-item">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec sec-alt">
        <div className="container">
          <div className="aos">
            <div className="sec-label">About</div>
            <h2 className="sec-h">The person<br />behind the code</h2>
          </div>
          <div className="about-bento">
            <div className="ab-card ab-bio aos" style={{ transitionDelay: ".05s" }}>
              <div>
                <div className="ab-lbl">Bio</div>
                <p className="ab-bio-q">
                  Passionate about <em>AI</em> and machine learning — building scalable full-stack applications that merge data-driven insights with modern engineering.
                </p>
              </div>
              <div className="ab-bio-footer">
                <div className="ab-avail"><span className="ab-avail-dot" />Available for freelance</div>
                <span style={{ fontSize: 13, color: "oklch(45% .01 60)" }}>📍 KL, Malaysia</span>
              </div>
            </div>
            <div className="ab-card aos" style={{ transitionDelay: ".1s" }}>
              <div className="ab-lbl">Core Skills</div>
              <div className="skill-tags">
                {skills.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
              </div>
            </div>
            <div className="ab-card aos" style={{ transitionDelay: ".15s" }}>
              <div className="ab-lbl">Languages</div>
              {languages.map((l, i) => (
                <div key={i} className="lang-row">
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{l.name}</span>
                  <span className="lang-badge">{l.level}</span>
                </div>
              ))}
            </div>
            <div className="ab-card aos" style={{ gridColumn: "1 / -1", transitionDelay: ".2s", overflow: "hidden", padding: "28px 0 28px 36px" }}>
              <div className="ab-lbl" style={{ paddingRight: 36 }}>Tech Stack &amp; AI Tools</div>
              <Suspense fallback={<div style={{ height: 80 }} />}>
                <div className="stack-marquee-wrap">
                  <div className="stack-track stack-track-fwd">
                    {[...devStack, ...devStack].map((t, i) => (
                      <div key={i} className="tech-pill">
                        <StackIcon name={t.iconKey} style={{ width: 22, height: 22 }} />
                        <span className="tech-pill-name">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="stack-track stack-track-rev">
                    {[...aiStack, ...aiStack].map((t, i) => (
                      <div key={i} className="tech-pill">
                        <StackIcon name={t.iconKey} style={{ width: 22, height: 22 }} />
                        <span className="tech-pill-name">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="sec sec-dark">
        <div className="container">
          <div className="aos">
            <div className="sec-label sec-label-dark">Experience</div>
            <h2 className="sec-h" style={{ color: "white" }}>Where I've worked</h2>
          </div>
          <div className="exp-list">
            {experience.map((e, i) => (
              <div key={i} className="exp-row aos" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="exp-num">0{i + 1}</div>
                <div>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  {e.desc && <p className="exp-desc">{e.desc}</p>}
                </div>
                <div className="exp-right">
                  {e.logo && <img src={e.logo} alt={e.company} className="exp-logo" />}
                  <span className="exp-arrow">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="sec">
        <div className="container">
          <div className="aos">
            <div className="sec-label">Portfolio</div>
            <h2 className="sec-h">Things I've built</h2>
            <p className="sec-sub">A selection of projects from hackathons, competitions, and client work.</p>
          </div>
          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className="proj-card aos" style={{ transitionDelay: `${(i % 2) * 0.08}s` }}>
                <div className="proj-top">
                  <span className="proj-cat">{p.cat}</span>
                  {p.award && <span className="award-b">★ {p.award}</span>}
                </div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.desc}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="proj-link">
                    View on GitHub ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SANDBOX */}
      <section id="sandbox" className="sec sec-dark">
        <div className="container">
          <div className="aos">
            <div className="sec-label sec-label-dark">Interactive Sandbox</div>
            <h2 className="sec-h" style={{ color: "white" }}>Test my design &amp; UI/UX</h2>
            <p className="sec-sub" style={{ color: "oklch(52% .01 60)" }}>
              Two full-page live demos — click to open and interact with real designs I've built.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 52 }}>
            {/* Landing page demo card */}
            <a href="/sandbox/landing-demo.html" target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }}>
              <div
                style={{ background: "oklch(16% .008 60)", border: "1px solid oklch(22% .008 60)", borderRadius: 20, overflow: "hidden", transition: "transform .3s,box-shadow .3s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px oklch(0% 0 0 /.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ background: "linear-gradient(135deg,#0d0d1a,#1a1a2e)", padding: "32px 32px 0", height: 220, overflow: "hidden", position: "relative" }}>
                  <div style={{ background: "rgba(108,99,255,.08)", border: "1px solid rgba(108,99,255,.2)", borderRadius: 12, padding: "20px 24px" }}>
                    <div style={{ width: 60, height: 6, borderRadius: 3, background: "#6c63ff", marginBottom: 10 }} />
                    <div style={{ width: "80%", height: 24, borderRadius: 4, background: "rgba(255,255,255,.9)", marginBottom: 8 }} />
                    <div style={{ width: "60%", height: 24, borderRadius: 4, background: "rgba(255,255,255,.5)", marginBottom: 20 }} />
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ background: "#6c63ff", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: 700, color: "white" }}>Get Started →</div>
                      <div style={{ background: "rgba(255,255,255,.08)", borderRadius: 20, padding: "8px 18px", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.6)" }}>Watch Demo</div>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom,transparent,oklch(16% .008 60))" }} />
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "oklch(55% .015 28)", background: "oklch(20% .01 28)", padding: "3px 10px", borderRadius: 20 }}>SaaS Landing Page</div>
                    <span style={{ color: "oklch(50% .01 60)", fontSize: 18 }}>↗</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "white", letterSpacing: "-.3px", marginBottom: 8 }}>NexFlow — Product Landing</div>
                  <p style={{ fontSize: 14, color: "oklch(52% .01 60)", lineHeight: 1.7, marginBottom: 16 }}>A full SaaS landing page with hero, features, pricing, testimonials and footer. 3 switchable colour themes.</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Responsive", "3 Themes", "Animations", "Full Page"].map((t) => (
                      <span key={t} style={{ fontSize: 11, fontWeight: 600, color: "oklch(55% .01 60)", background: "oklch(20% .008 60)", padding: "4px 10px", borderRadius: 20 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>

            {/* Dashboard demo card */}
            <a href="/sandbox/dashboard-demo.html" target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }}>
              <div
                style={{ background: "oklch(16% .008 60)", border: "1px solid oklch(22% .008 60)", borderRadius: 20, overflow: "hidden", transition: "transform .3s,box-shadow .3s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 24px 60px oklch(0% 0 0 /.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ background: "#0f0f13", padding: "24px 24px 0", height: 220, overflow: "hidden", position: "relative" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 }}>
                    {[["💰", "RM 48k", "#6c63ff"], ["👥", "3,847", "#10b981"], ["📉", "6.2%", "#f43f5e"]].map(([icon, val, c]) => (
                      <div key={val} style={{ background: "#16161d", border: "1px solid #2a2a38", borderRadius: 10, padding: "12px 10px" }}>
                        <div style={{ fontSize: 14, marginBottom: 4 }}>{icon}</div>
                        <div style={{ fontSize: 15, fontWeight: 900, color: c, letterSpacing: "-.5px" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#16161d", border: "1px solid #2a2a38", borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#6b6b80", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".08em" }}>Monthly Revenue</div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 48 }}>
                      {[40, 55, 35, 65, 50, 80, 70, 88].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? "#10b981" : "#6c63ff", borderRadius: "3px 3px 0 0", opacity: i === 7 ? 1 : 0.6 }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 40, background: "linear-gradient(to bottom,transparent,oklch(16% .008 60))" }} />
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "oklch(55% .015 28)", background: "oklch(20% .01 28)", padding: "3px 10px", borderRadius: 20 }}>Analytics Dashboard</div>
                    <span style={{ color: "oklch(50% .01 60)", fontSize: 18 }}>↗</span>
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "white", letterSpacing: "-.3px", marginBottom: 8 }}>AnalyticOS — Dashboard</div>
                  <p style={{ fontSize: 14, color: "oklch(52% .01 60)", lineHeight: 1.7, marginBottom: 16 }}>Full analytics dashboard with KPIs, bar charts, donut chart, data table with search, and dark/light mode.</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Dark/Light", "Live Charts", "Data Table", "Interactive"].map((t) => (
                      <span key={t} style={{ fontSize: 11, fontWeight: 600, color: "oklch(55% .01 60)", background: "oklch(20% .008 60)", padding: "4px 10px", borderRadius: 20 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES + PRICING */}
      <section id="services" className="sec">
        <div className="container">
          <div className="aos">
            <div className="sec-label">Services &amp; Pricing</div>
            <h2 className="sec-h">Transparent pricing,<br />zero surprises</h2>
            <p className="sec-sub">Every package includes a free 30-minute discovery call. Prices in Malaysian Ringgit.</p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg, i) => (
              <div key={i} className={`price-card aos ${pkg.featured ? "featured" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {pkg.featured && <div className="feat-badge">Most Popular</div>}
                <div className="price-tier">{pkg.tier}</div>
                <div className="price-name">{pkg.name}</div>
                <p className="price-desc">{pkg.desc}</p>
                <div className="price-amount">
                  {pkg.priceLabel && <span style={{ fontSize: 14, fontWeight: 500, color: pkg.featured ? "oklch(65% .01 60)" : "var(--ink-muted)", marginRight: 4 }}>{pkg.priceLabel}</span>}
                  <span className="price-cur">RM</span>
                  <span className="price-num">{pkg.price.toLocaleString()}</span>
                </div>
                <div className="price-period">· {pkg.delivery} · {pkg.revisions}</div>
                <div className="feat-list">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="feat-item">
                      {f.yes ? <Check /> : <X />}
                      <span style={{ opacity: f.yes ? 1 : 0.4 }}>{f.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`btn-pricing ${pkg.featured ? "btn-pricing-light" : "btn-pricing-dark"}`}
                  onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                >
                  {pkg.cta} →
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60 }}>
            <div className="aos">
              <div className="sec-label">Add-ons</div>
              <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.5px", marginBottom: 6 }}>Enhance your project</h3>
            </div>
            <div className="addons-grid">
              {addons.map((a, i) => (
                <div key={i} className="addon-card aos" style={{ transitionDelay: `${(i % 4) * 0.07}s` }}>
                  <div className="addon-price">{a.price}</div>
                  <div className="addon-name">{a.name}</div>
                  <div className="addon-desc">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec sec-alt">
        <div className="container">
          <div className="aos">
            <div className="sec-label">Testimonials</div>
            <h2 className="sec-h">What colleagues say</h2>
          </div>
          <div className="testi-bento">
            {testimonials.map((t, i) => (
              <div key={i} className={`testi-card ${i === 0 ? "tf" : ""} ${i === 3 ? "ta" : ""}`}>
                <p className="testi-quote">"{t.content}"</p>
                <div>
                  <div className="testi-divider" />
                  <div className="testi-author">
                    <div className="testi-avatar">{t.name[0]}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="sec">
        <div className="container">
          <div className="aos">
            <div className="sec-label">Contact</div>
            <h2 className="sec-h">Let's build<br />something great</h2>
            <p className="sec-sub">Tell me about your project and I'll get back within 24 hours.</p>
          </div>
          <div className="contact-grid">
            <div className="aos" style={{ transitionDelay: ".08s" }}>
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="contact-lbl">Email</div>
                  <div className="contact-val"><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <div className="contact-lbl">WhatsApp</div>
                  <div className="contact-val">
                    <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">{profile.phone}</a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">{profile.location}</div>
                </div>
              </div>
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <div className="contact-lbl" style={{ marginBottom: 10 }}>Response time</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>Within 24 hours</div>
                <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>Mon – Sat · 9 AM – 9 PM MYT</div>
              </div>
            </div>
            <div className="aos" style={{ transitionDelay: ".14s" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/zy-logo.png" alt="Z&Y Studio" style={{ height: 72, objectFit: "contain", marginBottom: 14, filter: "invert(1)" }} />
              <div className="footer-tagline">Crafting digital experiences from Kuala Lumpur.</div>
            </div>
            <div className="footer-nav">
              <div className="footer-col">
                <h6>Studio</h6>
                <ul>
                  <li><a onClick={() => scrollTo("about")} style={{ cursor: "pointer" }}>About</a></li>
                  <li><a onClick={() => scrollTo("work")} style={{ cursor: "pointer" }}>Work</a></li>
                  <li><a onClick={() => scrollTo("sandbox")} style={{ cursor: "pointer" }}>Sandbox</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h6>Services</h6>
                <ul>
                  <li><a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Pricing</a></li>
                  <li><a onClick={() => scrollTo("contact")} style={{ cursor: "pointer" }}>Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h6>Contact</h6>
                <ul>
                  <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                  <li><a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
                  <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
                  <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Z&amp;Y Studio · Kim Hong Zhang</span>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <span>Built with care · KL, Malaysia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
