import { useState, useEffect } from "react";
import "./styles.css";
import { profileData } from "./data";

const langsTech = ["React", "TypeScript", "Node.js", "Python", "FastAPI", "Flutter", "Spring Boot", "Dart", "Tailwind CSS"];
const toolsTech = ["MongoDB", "PostgreSQL", "Claude", "Cursor", "TensorFlow", "PyTorch", "Git", "OpenAI API", "Hugging Face", "Firebase"];

const packages = [
  {
    tier: "Starter", name: "Landing Page", price: 800,
    desc: "Perfect for individuals and small businesses who need a clean, professional online presence.",
    delivery: "5–7 business days", revisions: "2 rounds",
    features: [
      { label: "Single-page responsive website", yes: true },
      { label: "Custom design based on your brand", yes: true },
      { label: "Mobile & tablet optimised", yes: true },
      { label: "Contact form integration", yes: true },
      { label: "Basic SEO setup", yes: true },
      { label: "Hosting & domain guidance", yes: true },
      { label: "Multi-page structure", yes: false },
      { label: "CMS / Admin dashboard", yes: false },
      { label: "Custom backend / API", yes: false },
    ],
    cta: "Get Started", featured: false,
  },
  {
    tier: "Professional", name: "Business Website", price: 2200,
    desc: "For growing businesses that need a complete, feature-rich website with great UX and content management.",
    delivery: "12–18 business days", revisions: "5 rounds",
    features: [
      { label: "Up to 6 pages (custom design)", yes: true },
      { label: "Mobile & tablet optimised", yes: true },
      { label: "CMS / Admin dashboard", yes: true },
      { label: "Contact form + email integration", yes: true },
      { label: "Advanced SEO + sitemap", yes: true },
      { label: "Performance optimisation", yes: true },
      { label: "Analytics integration", yes: true },
      { label: "Custom backend / API", yes: false },
      { label: "AI-powered features", yes: false },
    ],
    cta: "Most Popular", featured: true,
  },
  {
    tier: "Enterprise", name: "Full-Stack App", price: 5000, priceLabel: "From",
    desc: "Custom web applications with complex backend, AI integrations, and scalable cloud architecture.",
    delivery: "4–8 weeks", revisions: "Unlimited",
    features: [
      { label: "Full-stack custom web application", yes: true },
      { label: "Custom backend & REST/GraphQL API", yes: true },
      { label: "Authentication & user management", yes: true },
      { label: "Database design & optimisation", yes: true },
      { label: "AI / ML feature integration", yes: true },
      { label: "Cloud deployment (AWS/GCP/Vercel)", yes: true },
      { label: "CI/CD pipeline setup", yes: true },
      { label: "Dedicated project management", yes: true },
      { label: "Post-launch support (30 days)", yes: true },
    ],
    cta: "Let's Talk", featured: false,
  },
];

const addons = [
  { price: "+RM 300", name: "Logo Design", desc: "A minimal wordmark or icon logo tailored to your brand." },
  { price: "+RM 400", name: "E-Commerce (Stripe)", desc: "Product listings, cart, and Stripe payment integration." },
  { price: "+RM 250", name: "Chatbot Integration", desc: "AI-powered chatbot connected to your site content." },
  { price: "+RM 200", name: "Extra Revision Round", desc: "One additional round of design changes beyond your plan." },
  { price: "+RM 350", name: "Multilingual Support", desc: "Internationalization for up to 3 languages." },
  { price: "+RM 150/mo", name: "Maintenance Retainer", desc: "Monthly updates, bug fixes, and performance checks." },
  { price: "+RM 300", name: "Speed Optimisation", desc: "Core Web Vitals audit + targeted performance improvements." },
  { price: "+RM 500", name: "3rd-Party API Integration", desc: "Connect any external service or API to your product." },
];

function Typewriter({ words }) {
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [idx, setIdx] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const full = words[idx % words.length];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(full.substring(0, text.length + 1));
        if (text === full) { setSpeed(2000); setDeleting(true); }
        else setSpeed(100);
      } else {
        setText(full.substring(0, text.length - 1));
        setSpeed(50);
        if (text === '') { setDeleting(false); setIdx(i => i + 1); setSpeed(400); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, speed, words]);

  return <span>{text}<span className="cursor" /></span>;
}

function CheckIcon() {
  return (
    <svg className="feat-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="feat-x" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ContactForm({ currency }) {
  const [form, setForm] = useState({ name: '', email: '', pkg: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {sent && <div className="form-success">✓ Thanks! I'll get back to you within 24 hours.</div>}
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input className="form-input" placeholder="Jane Doe" required value={form.name} onChange={set('name')} />
        </div>
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="form-input" type="email" placeholder="jane@company.com" required value={form.email} onChange={set('email')} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Package Interest</label>
          <select className="form-select" value={form.pkg} onChange={set('pkg')}>
            <option value="">Select a package</option>
            <option>Starter – Landing Page ({currency} 800)</option>
            <option>Professional – Business Website ({currency} 2,200)</option>
            <option>Enterprise – Full-Stack App (From {currency} 5,000)</option>
            <option>Custom / Not Sure</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Estimated Budget</label>
          <select className="form-select" value={form.budget} onChange={set('budget')}>
            <option value="">Select range</option>
            <option>Below {currency} 1,000</option>
            <option>{currency} 1,000 – {currency} 3,000</option>
            <option>{currency} 3,000 – {currency} 6,000</option>
            <option>Above {currency} 6,000</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Tell me about your project</label>
        <textarea
          className="form-textarea"
          placeholder="Describe what you're building, your goals, and any specific requirements..."
          required
          value={form.message}
          onChange={set('message')}
        />
      </div>
      <button className="form-submit" type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Project Brief →'}
      </button>
    </form>
  );
}

function PortfolioPage({ nav }) {
  const profile = profileData;
  const cur = "RM";

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">Available for freelance</div>
              <h1>
                Hi, I'm Kim.<br />
                <em>I'm&nbsp;<Typewriter words={["an AI Builder", "a Backend Engineer", "a Hackathon Winner", "a Full-Stack Dev"]} /></em>
              </h1>
              <p className="hero-sub">{profile.intro}</p>
              <div className="hero-actions">
                <a href={`mailto:${profile.email}`} className="btn-primary">Get in touch ↗</a>
                <span className="btn-outline" onClick={() => nav('hire')}>Hire me for a project</span>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="num" style={{ color: 'var(--accent)' }}>5×</div>
                  <div className="lbl">Hackathon Winner</div>
                </div>
                <div className="stat">
                  <div className="num">2×</div>
                  <div className="lbl">CP Finalist</div>
                </div>
                <div className="stat">
                  <div className="num">9+</div>
                  <div className="lbl">Projects Shipped</div>
                </div>
              </div>
            </div>
            <div className="hero-photo">
              <img src="https://github.com/kimhongzhang323.png" alt="Kim Hong Zhang" />
              <div className="hero-photo-badge">
                <div className="num">AI</div>
                <div className="lbl">Student @ UM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-wrap">
          <div className="carousel-track">
            {[...langsTech, ...langsTech].map((t, i) => <div key={i} className="chip">{t}</div>)}
          </div>
          <div className="carousel-track rev">
            {[...toolsTech, ...toolsTech].map((t, i) => <div key={i} className="chip">{t}</div>)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="aos">
            <div className="section-label">About Me</div>
            <h2 className="section-title">The person behind<br />the code</h2>
          </div>
          <div className="about-bento">
            <div className="ab-card ab-bio aos" style={{ transitionDelay: '0.05s' }}>
              <div>
                <div className="ab-label">Bio</div>
                <p className="ab-bio-quote">
                  Passionate about <em>AI</em> and machine learning — building scalable full-stack applications that merge data-driven insights with modern engineering practices.
                </p>
              </div>
              <div className="ab-bio-footer">
                <div className="ab-avail">
                  <span className="ab-avail-dot" />
                  Available for freelance
                </div>
                <div className="ab-location">📍 Kuala Lumpur, MY</div>
              </div>
            </div>

            <div className="ab-card ab-skills aos" style={{ transitionDelay: '0.1s' }}>
              <div className="ab-label">Core Skills</div>
              <div className="ab-skill-tags">
                {profile.skills.map((s, i) => <span key={i} className="ab-skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="ab-card ab-langs aos" style={{ transitionDelay: '0.15s' }}>
              <div className="ab-label">Languages</div>
              {profile.languages.map((l, i) => (
                <div key={i} className="ab-lang-row">
                  <span className="ab-lang-name">{l.name}</span>
                  <span className="ab-lang-level">{l.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="exp-section-wrap">
        <div className="container">
          <div className="aos">
            <div className="section-label">Experience</div>
            <h2 className="section-title">Where I've worked</h2>
          </div>
          <div className="exp-list">
            {profile.experience.map((e, i) => (
              <div key={i} className="exp-row aos" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="exp-num">0{i + 1}</div>
                <div className="exp-main">
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

      {/* EDUCATION */}
      <section id="education" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="aos">
            <div className="section-label">Education</div>
            <h2 className="section-title">Academic background</h2>
          </div>
          <div className="timeline">
            {profile.education.map((e, i) => (
              <div key={i} className="tl-item aos" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-card-inner">
                    <div className="tl-header">
                      <div className="tl-meta">
                        <div className="tl-period">{e.period}</div>
                        <div className="tl-role">{e.school}</div>
                        <div className="tl-company">{e.degree}</div>
                      </div>
                      {e.logo && <img src={e.logo} alt={e.school} className="tl-logo" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="aos">
            <div className="section-label">Projects & Competitions</div>
            <h2 className="section-title">Things I've built</h2>
            <p className="section-sub">A selection of projects from hackathons, competitions, and personal experiments.</p>
          </div>
          <div className="projects-grid">
            {profile.projects.map((p, i) => (
              <div key={i} className="proj-card aos" style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
                <div className="proj-top">
                  <span className="proj-cat">{p.category}</span>
                  {p.award && <span className="award-badge">★ {p.award}</span>}
                </div>
                <div className="proj-title">{p.title}</div>
                <p className="proj-desc">{p.description}</p>
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="proj-link">
                    View on GitHub <ArrowIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="aos">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">What colleagues say</h2>
          </div>
          <div className="testi-bento">
            {profile.testimonials.slice(0, 4).map((t, i) => (
              <div key={i} className={`testi-card${i === 0 ? ' testi-featured' : ''}${i === 3 ? ' testi-accent' : ''}`}>
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
    </main>
  );
}

function HirePage() {
  const profile = profileData;
  const cur = "RM";

  return (
    <main>
      <section className="services-hero">
        <div className="container services-hero-content">
          <div className="section-label">Freelance Services</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(44px,5vw,64px)', color: 'white', letterSpacing: '-2.5px', marginBottom: '20px' }}>
            Web Creation<br />
            <span style={{ fontWeight: 400, color: 'oklch(65% 0.01 60)' }}>Done Right.</span>
          </h1>
          <p className="section-sub">
            I build fast, beautiful, and scalable websites and web apps — from landing pages to AI-powered platforms. Transparent pricing. No surprises.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-primary" style={{ background: 'white', color: 'var(--dark)' }}>View Pricing</a>
            <a href="#contact" className="btn-outline" style={{ color: 'white', borderColor: 'oklch(35% 0.01 60)' }}>Start a Project</a>
          </div>
        </div>
        <div className="process-strip">
          {[
            { n: '01', t: 'Discovery', d: 'We discuss your goals, timeline, and requirements.' },
            { n: '02', t: 'Design', d: 'Wireframes and high-fidelity mockups for your review.' },
            { n: '03', t: 'Build', d: 'Clean, well-structured code with regular check-ins.' },
            { n: '04', t: 'Launch', d: 'Deployment, testing, and handoff with documentation.' },
          ].map(s => (
            <div key={s.n} className="process-step">
              <div className="process-num">{s.n}</div>
              <div className="process-title">{s.t}</div>
              <div className="process-desc">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="aos" style={{ textAlign: 'center' }}>
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Transparent Pricing</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Choose your package</h2>
            <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
              All packages include a free 30-minute discovery call. Prices in Malaysian Ringgit — international clients welcome.
            </p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg, i) => (
              <div key={i} className={`price-card aos${pkg.featured ? ' featured' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {pkg.featured && <div className="featured-badge">Most Popular</div>}
                <div className="price-tier">{pkg.tier}</div>
                <div className="price-name">{pkg.name}</div>
                <p className="price-desc">{pkg.desc}</p>
                <div className="price-amount">
                  {pkg.priceLabel && (
                    <span style={{ fontSize: 14, fontWeight: 500, color: pkg.featured ? 'oklch(65% 0.01 60)' : 'var(--ink-muted)', marginRight: 4 }}>
                      {pkg.priceLabel}
                    </span>
                  )}
                  <span className="price-currency">{cur}</span>
                  <span className="price-num">{pkg.price.toLocaleString()}</span>
                </div>
                <div className="price-period">· {pkg.delivery} · {pkg.revisions}</div>
                <div className="feat-list">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="feat-item">
                      {f.yes ? <CheckIcon /> : <XIcon />}
                      <span style={{ opacity: f.yes ? 1 : 0.45 }}>{f.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`btn-pricing ${pkg.featured ? 'btn-pricing-light' : 'btn-pricing-dark'}`}
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  {pkg.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="addons-section">
        <div className="container">
          <div className="aos">
            <div className="section-label">Add-ons</div>
            <h2 className="section-title">Enhance your project</h2>
            <p className="section-sub">Bolt on any of these to any package.</p>
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
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="aos">
            <div className="section-label">Start a Project</div>
            <h2 className="section-title">Let's work together</h2>
            <p className="section-sub">Tell me about your project and I'll get back to you within 24 hours.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-block aos" style={{ transitionDelay: '0.1s' }}>
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-val"><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <div className="contact-label">WhatsApp</div>
                  <div className="contact-val">
                    <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-val">{profile.location}</div>
                </div>
              </div>
              <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <div className="contact-label" style={{ marginBottom: 16 }}>Response time</div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>Within 24 hours</div>
                <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 4 }}>Mon – Sat, 9 AM – 9 PM MYT</div>
              </div>
            </div>
            <div className="aos" style={{ transitionDelay: '0.15s' }}>
              <ContactForm currency={cur} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState(() => window.location.hash === '#hire' ? 'hire' : 'portfolio');

  const nav = (p) => {
    setPage(p);
    window.location.hash = p === 'hire' ? 'hire' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.aos').forEach(el => obs.observe(el));

    const testiObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('testi-visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.testi-card').forEach(el => testiObs.observe(el));

    return () => { obs.disconnect(); testiObs.disconnect(); };
  }, [page]);

  const profile = profileData;

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <img src="/logo.png" alt="Kim Hong Zhang" className="nav-logo" />
          <div className="nav-links">
            {page === 'portfolio' ? (
              <>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
              </>
            ) : (
              <>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
              </>
            )}
            {page === 'hire'
              ? <a onClick={() => nav('portfolio')}>← Portfolio</a>
              : <a onClick={() => nav('hire')} className="nav-cta">Hire Me</a>
            }
          </div>
        </div>
      </nav>

      {page === 'portfolio' ? <PortfolioPage nav={nav} /> : <HirePage />}

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <h2 className="footer-headline">
              Let's Build<br /><em>Something Great.</em>
            </h2>
            <div className="footer-nav">
              <div className="footer-col">
                <h6>Portfolio</h6>
                <ul>
                  <li><a href="#about" onClick={() => setPage('portfolio')}>About</a></li>
                  <li><a href="#experience" onClick={() => setPage('portfolio')}>Experience</a></li>
                  <li><a href="#projects" onClick={() => setPage('portfolio')}>Projects</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h6>Services</h6>
                <ul>
                  <li><a onClick={() => nav('hire')}>Hire Me</a></li>
                  <li><a onClick={() => nav('hire')}>Pricing</a></li>
                  <li><a onClick={() => nav('hire')}>Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h6>Contact</h6>
                <ul>
                  <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                  <li>
                    <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer">
                      WhatsApp
                    </a>
                  </li>
                  <li style={{ color: 'oklch(55% 0.01 60)', fontSize: '14px' }}>{profile.location}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Kim Hong Zhang</span>
            <div className="social-row">
              <a href={profile.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <span>Built with care · KL, Malaysia</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
