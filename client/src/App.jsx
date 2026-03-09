import { useState, useEffect } from "react";
import "./styles.css";
import { profileData } from "./data";

const languagesFrameworks = [
  "React", "TypeScript", "Node.js", "Python", "FastAPI", "Flutter", "Spring Boot", "Dart", "Tailwind CSS",
  "React", "TypeScript", "Node.js", "Python", "FastAPI", "Flutter", "Spring Boot", "Dart", "Tailwind CSS"
];

const toolsDatabases = [
  "MongoDB", "PostgreSQL", "Claude Code", "Cursor", "Antigravity", "Codex", "Copilot", "TensorFlow", "PyTorch", "Git", "OpenAI API", "Hugging Face",
  "MongoDB", "PostgreSQL", "Claude Code", "Cursor", "Antigravity", "Codex", "Copilot", "TensorFlow", "PyTorch", "Git", "OpenAI API", "Hugging Face"
];

function App() {
  const profile = profileData;
  const projects = profileData.projects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <header>
          <a href="#">
            <img src="/logo.png" className="logo-img" alt="HongZhang Logo" />
          </a>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
          <a href={`mailto:${profile?.email}`} className="btn-contact">Get in touch</a>
        </header>

        <section className="hero-section">
          <div className="hero-top">
            <h1>Product<br />Designer</h1>
            <div className="hero-image-wrapper">
              <img src="https://github.com/kimhongzhang323.png" alt={profile?.name} />
            </div>
          </div>
          <div className="hero">
            <div className="hero-stats">
              {profile?.stats?.map((stat, i) => (
                <div key={i} className="stat-item">
                  <h4>{stat.value}</h4>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="hero-info">
              {profile?.intro}
            </div>
          </div>

          <div className="tech-carousel-container">
            <div className="tech-carousel">
              {languagesFrameworks.map((tech, index) => (
                <div key={`lang-${index}`} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="tech-carousel reverse" style={{ marginTop: '15px' }}>
              {toolsDatabases.map((tech, index) => (
                <div key={`tool-${index}`} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="animate-on-scroll">
          <span className="label">About Me</span>
          <h2>{profile?.bio}</h2>
          
          <div className="services-grid" style={{ marginTop: '40px' }}>
            <div className="service-card">
              <span className="label">Core Skills</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {profile?.skills?.map((skill, i) => (
                  <li key={i} style={{ fontSize: '16px', fontWeight: '500' }}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="service-card">
              <span className="label">Languages</span>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {profile?.languages?.map((lang, i) => (
                  <li key={i} style={{ fontSize: '16px', fontWeight: '500' }}>
                    {lang.name} <span style={{ color: '#666', fontSize: '14px', marginLeft: '10px' }}>{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="animate-on-scroll">
          <span className="label">Timeline & Experience</span>
          <div className="timeline">
            {profile?.experience?.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{exp.period}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="animate-on-scroll">
          <span className="label">Education</span>
          <div className="timeline">
            {profile?.education?.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{edu.period}</div>
                  <h3 className="timeline-role">{edu.school}</h3>
                  <div className="timeline-company">{edu.degree}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="animate-on-scroll">
          <span className="label">Projects & Competitions</span>
          <div className="projects-grid" style={{ marginTop: '20px' }}>
            {projects?.map((project, i) => (
              <div key={i} className="service-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="label" style={{ marginBottom: '0' }}>{project.category}</span>
                  {project.award && (
                    <span className="award-badge">★ {project.award}</span>
                  )}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{project.title}</h3>
                <p>{project.description}</p>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '15px', color: 'var(--accent-color)', fontWeight: '500', textDecoration: 'none' }}>
                    View Repository →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial-section animate-on-scroll">
          <div className="testimonial">
            <span className="label">Testimonial</span>
            <blockquote>
              "Kim's ability to blend AI logic with seamless front-end design is truly unique. He brings a level of intelligence to products that goes beyond just code."
            </blockquote>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h5>Internship Lead</h5>
                <p>ANT International</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-dark">
        <div className="container">
          <div className="footer-main">
            <h2>Let's Connect<br />There</h2>
            <div className="footer-nav">
              <div className="footer-col">
                <h6>Navigation</h6>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h6>Contact</h6>
                <ul>
                  <li><a href={`mailto:${profile?.email}`}>{profile?.email}</a></li>
                  <li>{profile?.location}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="logo-white">HongZhang</div>
            <div className="social-links">
              <a href={profile?.socialLinks?.github}>Github</a>
              <a href={profile?.socialLinks?.linkedin}>LinkedIn</a>
            </div>
            <div className="copy">© 2024 Design Studio</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
