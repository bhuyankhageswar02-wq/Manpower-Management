import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

/* ── nav links ── */
const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

/* ── services ── */
const SERVICES = [
  {
    emoji: '🏭',
    title: 'Green Field and Brown Field Projects',
    bullets: [
      'Strategic Manpower Planning: Headcount forecasting, role profiling, and organizational design for new setups',
      'Rapid Mobilization Programs: Sourcing and deploying large-scale technical talent to meet aggressive commission timelines',
      'Core Team & Leadership Sourcing: Sourcing plant managers, shift supervisors, and specialized lead engineers',
      'Onboarding & Safety Standardization: Designing tailored induction frameworks focused on plant floor compliance, safety, and productivity',
    ],
  },
  {
    emoji: '🏭',
    title: 'Workforce Performance & Skill Transformation',
    bullets: [
      'Skill Mapping & Gap Analysis: Auditing current operator and technician skill matrices against target OEE metrics',
      'Lean & TPM Capability Building: Designing hands-on training for structured daily management, 5S, and continuous improvement',
      'Targeted Quality & FPY Upskilling: Specialized technical training programs to reduce human error, PPM defects, and scrap rates',
      'Frontline Leadership Development: Transforming shop-floor supervisors into highly effective team leaders and problem-free operators',
    ],
  },
  {
    emoji: '📊',
    title: 'Strategic Talent & HR Governance',
    bullets: [
      'Labor Productivity & Manpower Optimization: Balancing line headcounts and shift structures to improve cost-to-serve metrics',
      'Retention & Talent Pipeline Design: Combatting high shop-floor turnover through structured career paths and incentive mapping',
      'HR Governance & Performance Rhythms: Implementing skill-based KPI dashboards, appraisal structures, and shift governance',
      'Contractual vs. Permanent Workforce Strategy: Designing "make vs. buy" strategies for flexible, compliant, and cost-effective staffing',
    ],
  },
  {
    emoji: '🔌',
    title: 'ManpowerSkill',
    bullets: [
      'SMT line optimisation & NPI → mass production',
      'High-mix PCB manufacturing systems',
      'Repair, rework & test strategy',
      'Supplier quality & incoming controls',
    ],
  },
  {
    emoji: '👥',
    title: 'Leadership & Governance',
    bullets: [
      'Plant leadership coaching',
      'Tiered review structures',
      'Role clarity & accountability',
      'Culture of problem-solving & kaizen',
    ],
  },
  {
    emoji: '🏆',
    title: 'Business Excellence',
    bullets: [
      'Anchoring continuous improvement culture across plants and functions',
      'Leading cost reduction, quality improvement, and productivity enhancement programs',
      'Deploying Lean, Kaizen, and Six Sigma methodologies for measurable business impact',
      'Ensuring process standardisation, audit readiness, and operational governance',
    ],
  },
];

/* ── certifications ── */
const CERTS = [
  'Certified Lean Manufacturing Professional',
  'Certified Auditor Professional',
  'Certified Lean Six Sigma Black Belt Professional',
  'Certified AI in Manufacturing Professional (IIT-Madras)',
];

/* ── focus area tags (FIXED SYNTAX) ── */
const FOCUS = [
  'Plant Turnaround Sourcing & Consulting',
  'Manufacturing Operations Leadership Recruitment',
  'OEE & Throughput Optimization Training',
  'Business & Financial Leadership Placement',
  'Performance & Productivity Improvement Programs',
  'P&L & Workforce Governance Strategy',
  'Frontline & Executive Leadership Development',
  'Transformation & Change Management Talent',
  'Leadership & Organisation Development (OD)',
  'AI Integrated Manufacturing Systems Staffing',
  'Digital & Manufacturing Execution Systems (MES) Training'
];

/* ── impact metrics ── */
const METRICS = [
  { label: 'Workforce Stability', value: 68, suffix: '%', sub: 'drop in shop-floor attrition through structured skill-mapping' },
  { label: 'Rapid Mobilization', value: 14, suffix: ' Days', sub: 'average turnaround time for deploying pre-vetted technical teams' },
  { label: 'Speed to Autonomy', value: 45, suffix: '%', sub: 'reduction in operator training lead time using multi-skilling matrices' },
  { label: 'Labor Productivity Gain', value: 28, suffix: '%+', sub: 'increase in line productivity following Frontline Leadership Development' },
  { label: 'Precision Placement', value: 94, suffix: '%', sub: 'first-time right placement match rate for senior manufacturing leaders' },
  { label: 'Manpower Savings', value: 15, suffix: '%', sub: 'reduction in labor costs through contract vs permanent modeling' },
  { label: 'Skill-Based Error Reduction', value: 42, suffix: '%', sub: 'drop in plant-floor defects following zero-PPM mindset training' },
  { label: 'Governance & Safety', value: 0, suffix: '', sub: 'statutory compliance and critical safety incidents across workforces' }
];

/* ── animated counter hook ── */
function useCounter(target: number, duration = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (target === 0) { setCount(0); return; }
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ── metric card ── */
function MetricCard({ m }: { m: (typeof METRICS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCounter(m.value, 1800, visible);
  return (
    <div ref={ref} className="metric-card">
      <p className="metric-label">{m.label}</p>
      <p className="metric-value">
        {count}{m.suffix}
      </p>
      {m.sub && <p className="metric-sub">{m.sub}</p>}
    </div>
  );
}

/* ══════════════════════════════════════════
    APP
══════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="site-root">

      {/* ═══ NAV ═══ */}
      <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">KB<span>.</span></a>
          <nav className="nav-links">
            {NAV.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#contact" className="nav-cta">Let's Talk</a>
          </nav>
          <button className="nav-hamburger" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV.map(l => (
              <a key={l.href} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Let's Talk</a>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section className="hero-section">
        <div className="hero-bg-grid" />
        <div className="hero-inner">
          {/* left */}
          <div className="hero-text">
            <span className="hero-badge">Manpower Consultancy &amp; Service</span>
            <p className="hero-tagline">Architects of the Modern Workforce: Seamlessly Matching Skill to Demand</p>
            <blockquote className="hero-quote">
              "The Right Skills. The Right Scale. The Right Time."
            </blockquote>
            <p className="hero-desc">
              Partnered with leadership to define exact staffing requirements and strategically analyzed skill gaps, ensuring the workforce was equipped to meet upcoming business objectives.
            </p>
            <div className="hero-stats">
              <span>5+ years</span><span className="divider">|</span>
              <span>India &amp; Middle East</span><span className="divider">|</span>
              <span>Solar &amp; Renewable Energy</span><span className="divider">|</span>
              <span>EPC </span><span className="divider">|</span>
              <span>Power Sectors</span>
            </div>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Schedule a conversation</a>
              <a href="#impact" className="btn-outline">View impact delivered</a>
            </div>
          </div>
          {/* right — photo + card */}
          <div className="hero-photo-wrap">
            <img src="/assets/images1.png" alt="New Start" className="hero-photo" />
            <div className="hero-card">
              <p className="hero-card-name">New Skill</p>
              <p className="hero-card-role">Manufacturing &amp; Operations Leader</p>
              <p className="hero-card-bio">
                5+ years across Renewable, automotive, and engineering. Provide Skill Manpower responsibility across India.
              </p>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-hint">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="section-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">About</span>
            <h2 className="section-title">About Varenya Consulting</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Our consultancy serves as a strategic HR partner by identifying, screening, and recruiting high-caliber professionals tailored to your specific industry needs. We bridge workforce gaps through targeted skill development and training to ensure candidates are job-ready from day one, while offering flexible permanent, temporary, or project-based staffing solutions to match your business fluctuations. By seamlessly handling compliance, onboarding, and ongoing workforce management, we enable you to focus entirely on driving core business growth.
              </p>
              <p>
                Partnered with leadership to define exact staffing requirements and strategically analyzed skill gaps, ensuring the workforce was equipped to meet upcoming business objectives.
              </p>
              <p className="focus-heading"><strong>Focus areas:</strong></p>
              <div className="focus-tags">
                {FOCUS.map(f => <span key={f} className="focus-tag">{f}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="section-gray">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Consulting Services</span>
            <h2 className="section-title">How I Can Help</h2>
            <p className="section-sub">
              Empowering workforces. Elevating businesses. Success requires more than just filling positions—it requires the right skills. We offer end-to-end workforce solutions, combining strategic talent acquisition with targeted skill development to prepare your team for tomorrow's challenges.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <span className="service-emoji">{s.emoji}</span>
                <h3 className="service-title">{s.title}</h3>
                <ul className="service-bullets">
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certs-block">
            <div className="service-card">
              <span className="service-emoji">🎓</span>
              <h3 className="service-title">Professional Certifications</h3>
              <ul className="service-bullets">
                {CERTS.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="section-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Work Portfolio</h2>
          </div>
          <div className="portfolio-wrap">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Manufacturing portfolio"
              className="portfolio-img"
            />
          </div>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <section id="impact" className="section-dark">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag-light">Impact Delivered</span>
            <h2 className="section-title-light">A Snapshot of Outcomes</h2>
            <p className="section-sub-light">
              A snapshot of outcomes from recent engagements across manufacturing plants.
            </p>
          </div>
          <div className="metrics-grid">
            {METRICS.map(m => <MetricCard key={m.label} m={m} />)}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT (FIXED PHONE LINK) ═══ */}
      <section id="contact" className="section-white">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-tag">Let's Talk</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-sub">
              If you are looking at building a high-performing team, accelerating your hiring timeline, or future-proofing your workforce's skills, we can start with a focused conversation.
            </p>
          </div>
          <div className="contact-links">
            <a href="tel:+917743972217" className="contact-link">
              <span>📞</span> Call: +91 77439 72217
            </a>
            <a
              href="https://www.linkedin.com/in/khageswar-bhuyan-910021297/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>🔗</span> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Varenya Consulting · Manpower &amp; Skill Consultant</p>
      </footer>

    </div>
  );
}
