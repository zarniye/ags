import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HashRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import heroImg from './assets/hero.png' // Keeping for potential usage or removing if absolutely certain
import consultantImg from './assets/consultant.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import {
  Users,
  Briefcase,
  Target,
  CheckCircle2,
  ArrowRight,
  Award,
  ChevronRight,
  ChevronLeft,
  Globe,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Truck,
  Package,
  ShieldCheck,
  Zap,
  Monitor,
  Building2,
  Stethoscope,
  Cog,
  BarChart3,
  Network,
  Map,
  ArrowUpRight
} from 'lucide-react'

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.AOS) {
        window.AOS.refresh();
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);
  return null;
};


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Group', path: '/group' },
    { label: 'Contact', path: '/contact' }
  ];

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
      <img src="/logo.svg" alt="AGS Logo" style={{ height: '50px', width: 'auto', paddingRight: '0.5rem' }} />
      <span className="logo-text">AGS <span className="text-accent">HR</span></span>
    </Link>
  );

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between">
        <Logo />

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              {item.label}
            </NavLink>
          ))}
          <button 
            className="btn btn-primary" 
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = '/contact';
              }
            }}
          >
            Get Talented
          </button>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              inset: 0,
              background: '#ffffff',
              zIndex: 2000,
              padding: '2.5rem'
            }}
          >
            <div className="flex justify-between items-center mb-16">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  background: 'var(--bg-soft)',
                  border: 'none',
                  borderRadius: '12px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-main)'
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    style={({ isActive }) => ({
                      fontSize: '2rem',
                      fontWeight: '700',
                      padding: '1rem 0',
                      color: isActive ? 'var(--primary)' : 'var(--text-main)',
                      display: 'block',
                      borderBottom: '1px solid var(--bg-soft)'
                    })}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
              <button 
                className="btn btn-primary w-full" 
                style={{ justifyContent: 'center', padding: '1.25rem' }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = '/contact';
                  }
                }}
              >
                Get Talented
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const IndustryFocus = () => {
  const industries = [
    { name: "Technology", icon: <Monitor />, desc: "From startups to tech giants, we source world-class engineering talent." },
    { name: "Finance", icon: <Building2 />, desc: "Connecting financial institutions with top-tier analysts and leaders." },
    { name: "Healthcare", icon: <Stethoscope />, desc: "Expert staffing for healthcare providers and medical tech firms." },
    { name: "Manufacturing", icon: <Cog />, desc: "Strategic talent solutions for modern industrial operations." }
  ];

  return (
    <section className="section industry-focus">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="badge">Our Reach</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Industries We Empower</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Deep expertise across specialized sectors ensures the perfect fit for your unique needs.</p>
        </div>
        <div className="industry-grid">
          {industries.map((ind, idx) => (
            <div key={idx} className="industry-card" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.name}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const stats = [
    { label: "Talent Placed", value: "12k+" },
    { label: "Client Retainment", value: "98%" },
    { label: "Global Network", value: "50+" },
    { label: "Experience", value: "15Y" }
  ];

  return (
    <section className="section impact-stats" style={{ background: '#004aad', color: 'white' }}>
      <div className="container">
        <div className="stats-row">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-box" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-desc">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="badge">Leading HR Solutions Partner</span>
              <h1 className="hero-title">Empowering Your <span>Workforce</span> with Strategic Brilliance.</h1>
              <p className="hero-desc">
                AGS HR specializes in connecting top-tier talent with world-class organizations. We streamline recruitment, specialized staffing, and expert HR consulting.
              </p>
              <div className="hero-btns">
                <Link to="/contact" className="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Find Your Next Hire <ArrowRight size={18} /></Link>
                <Link to="/services" className="btn btn-secondary" onClick={() => window.scrollTo(0, 0)}>Explore Services</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="hero-stats">
              <div className="avatar-group">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="avatar">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="stats-text">Trusted by <span>500+</span> global companies</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 1.2 }} 
            className="floating-stage"
          >
            {/* Main Highlight Cards */}
            <motion.div 
              className="glass-card element-1"
              animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="icon-box bg-accent"><Users size={20} /></div>
              <div>
                <span className="block text-[10px] uppercase tracking-tighter opacity-50">Talent Pool</span>
                <span className="block font-bold text-sm">12k+ Experts</span>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card element-2"
              animate={{ y: [0, 30, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="icon-box bg-primary"><Briefcase size={20} /></div>
              <span className="font-bold text-sm">Strategic Consulting</span>
            </motion.div>

            <motion.div 
              className="glass-card element-3"
              animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="icon-box bg-white text-accent shadow-sm"><Target size={20} /></div>
              <span className="font-bold text-sm">Global Hiring</span>
            </motion.div>

            {/* Floating Icons */}
            <motion.div className="floating-icon i1" animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity }}>
              <Globe size={40} strokeWidth={1} />
            </motion.div>
            <motion.div className="floating-icon i2" animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }}>
              <Award size={32} strokeWidth={1} />
            </motion.div>
            <motion.div className="floating-icon i3" animate={{ x: [0, 20, 0], y: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity }}>
              <Zap size={24} strokeWidth={1} />
            </motion.div>

            {/* Abstract Shapes */}
            <div className="abstract-shape s1"></div>
            <div className="abstract-shape s2"></div>
            <div className="abstract-shape s3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  const models = [
    { title: "Retained Search", desc: "Exclusive search for high-level executive roles with a dedicated consulting team.", color: "#004aad" },
    { title: "Contingent Staffing", desc: "Flexible staffing solutions for rapid scaling and project-based needs.", color: "#ea2e2e" },
    { title: "Permanent Placement", desc: "Long-term team building with a focus on cultural and technical alignment.", color: "#004aad" }
  ];

  return (
    <section className="section engagement-models">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="badge">Flexible Engagement</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>How We Work Together</h2>
        </div>
        <div className="models-grid">
          {models.map((m, idx) => (
            <div key={idx} className="model-card" data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="model-indicator" style={{ background: m.color }}></div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <Link to="/contact" className="btn-text" style={{ color: m.color }}>Learn More <ArrowUpRight size={16} /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SERVICES_DATA = [
  { 
    id: 'executive',
    title: "Executive Recruitment", 
    desc: "Finding high-level leaders who drive your company's mission forward.", 
    detail: "Our executive search process is discreet and thorough. We identify, engage, and vet C-suite and senior leadership talent through a customized strategy that looks beyond the resume to evaluate cultural alignment and strategic vision.",
    icon: <Users />,
    benefits: ["Bespoke headhunting", "Full candidate profiling", "90-day retention guarantee"]
  },
  { 
    id: 'permanent',
    title: "Permanent Staffing", 
    desc: "Building stable, long-term teams with candidates that fit your culture.", 
    detail: "We specialize in finding candidates who are looking for their next career home. Our proprietary 'Synergy-Vetting' system ensures that every placement is technically sound and has high long-term potential within your organization.",
    icon: <Briefcase />,
    benefits: ["Culture-fit matching", "Technical assessment", "Direct-hire solutions"]
  },
  { 
    id: 'consulting',
    title: "HR Consulting", 
    desc: "Strategic advice on workforce planning, policy, and compliance.", 
    detail: "Modern HR is complex. Our consultants provide expert guidance on labor laws, performance management systems, and organizational design, helping you build a compliant and high-functioning workplace.",
    icon: <Target />,
    benefits: ["Compliance audits", "Policy development", "Workforce planning"]
  },
  { 
    id: 'payroll',
    title: "Payroll Management", 
    desc: "Streamlined solutions for hassle-free payroll and taxation.", 
    detail: "Focus on your core business while we handle the complexities of payroll, benefits administration, and multi-currency taxation. Our system is accurate, secure, and always on time.",
    icon: <Award />,
    benefits: ["Tax compliance", "Benefits administration", "Cloud-based portal"]
  },
  { 
    id: 'training',
    title: "Training & Dev", 
    desc: "Empowering your employees with modern skillsets and leadership training.", 
    detail: "Investment in your people is an investment in your success. We offer curated training modules in leadership, soft skills, and specific technical domains to keep your workforce competitive.",
    icon: <CheckCircle2 />,
    benefits: ["Leadership workshops", "Skill-gap analysis", "Custom modules"]
  },
  { 
    id: 'global',
    title: "Global Mobility", 
    desc: "Seamless cross-border staffing and relocation services.", 
    detail: "Expanding internationally requires specialized knowledge. We handle work permits, relocation logistics, and international candidate sourcing to make your global expansion as smooth as possible.",
    icon: <Globe />,
    benefits: ["Visa sponsorship help", "Relocation support", "Global network access"]
  }
];

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  if (!service) return null;
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content service-detail-modal"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}><X size={24} /></button>
            <div className="service-modal-header">
              <div className="modal-service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
            </div>
            <div className="service-modal-body">
              <p className="service-main-detail">{service.detail}</p>
              <div className="service-benefits">
                <h3>Key Benefits</h3>
                <ul>
                  {service.benefits.map((b, i) => (
                    <li key={i}><CheckCircle2 size={16} /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-cta">
              <Link to="/contact" className="btn btn-primary w-full" style={{ justifyContent: 'center' }} onClick={onClose}>
                Inquire About This Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = ({ onOpenService }) => {
  const [index, setIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const services = SERVICES_DATA;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setDisplayCount(1);
      else setDisplayCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - displayCount;
  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section id="services" className="section" style={{ background: '#f8fafc', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos="fade-up">
          <span className="badge">Our Expertise</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tailored HR Solutions</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>We provide a comprehensive suite of HR services designed to help you attract and retain the best talent.</p>
        </div>

        <div className="carousel-container" data-aos="fade-up" data-aos-delay="200">
          <button className="carousel-btn prev desktop-only" onClick={prev}><ChevronLeft /></button>

          <div
            className="carousel-window"
            onScroll={(e) => {
              if (window.innerWidth <= 768) {
                // Calculate which card is focused based on scroll position and card width (approx 85vw)
                const cardWidth = e.target.offsetWidth * 0.85;
                const newIndex = Math.round(e.target.scrollLeft / cardWidth);
                if (newIndex !== index) {
                  setIndex(newIndex);
                }
              }
            }}
          >
            <motion.div
              className="carousel-track"
              animate={window.innerWidth > 768 ? { x: `-${index * (100 / displayCount)}%` } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((s, idx) => (
                <div key={idx} className="carousel-card-wrapper" style={{ minWidth: window.innerWidth > 768 ? `${100 / displayCount}%` : '85%', padding: '0 0.75rem' }}>
                    <button 
                      onClick={() => onOpenService(s)}
                      style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', display: 'block', width: '100%' }}
                    >
                      <div className="service-card">
                        <div className="icon-box" style={{ width: '56px', height: '56px', marginBottom: '1.5rem', color: idx % 2 === 0 ? '#004aad' : '#ea2e2e' }}>{s.icon}</div>
                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{s.title}</h3>
                        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>{s.desc}</p>
                        <div style={{ fontWeight: 'bold', color: '#004aad', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                          Learn More <ChevronRight size={14} />
                        </div>
                      </div>
                    </button>
                </div>
              ))}
            </motion.div>
          </div>
          <button className="carousel-btn next desktop-only" onClick={next}><ChevronRight /></button>
        </div>

        <div className="carousel-dots" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`dot ${index === idx ? 'active' : ''}`}
              onClick={() => setIndex(idx)}
              style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', background: index === idx ? '#004aad' : '#cbd5e1', cursor: 'pointer', transition: 'var(--transition)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container" data-aos="fade-right">
            <div className="about-image">
              <img src={consultantImg} alt="Business consultant" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div className="about-image-overlay"></div>
            </div>
            <div className="about-stats" data-aos="zoom-in" data-aos-delay="400">
              <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#004aad', display: 'block' }}>15+</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase' }}>Years of Excellence</span>
            </div>
          </div>

          <div data-aos="fade-left">
            <span className="badge">About AGS HR</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Bridging the Gap Between <span style={{ color: '#ea2e2e' }}>Talent</span> and Opportunity</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem' }}>Founded on integrity and expertise, AGS HR has evolved into a premier recruitment firm. We believe a company's greatest asset is its people.</p>
            <div style={{ marginBottom: '2.5rem' }}>
              {["Global talent pool access", "Specialized strategies", "Compliance experts", "Dedicated management"].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#004aad' }} />
                  <span style={{ fontWeight: '500' }}>{item}</span>
                </div>
              ))}
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const valuesSection = document.getElementById('values');
                if (valuesSection) {
                  valuesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    { title: "Integrity", desc: "We maintain the highest ethical standards in every placement and partnership.", icon: <CheckCircle2 /> },
    { title: "Innovation", desc: "Using AI and modern strategies to find the perfect fit faster than ever.", icon: <Target /> },
    { title: "People-First", desc: "Our focus is always on the humans behind the resumes and the culture of the companies.", icon: <Users /> }
  ];

  return (
    <section id="values" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
          <span className="badge">Our Core Values</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The Foundation of <br />Our Excellence</h2>
        </div>
        <div className="values-grid">
          {values.map((v, idx) => (
            <div key={idx} className="value-card" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="value-icon">{v.icon}</div>
              <h3 style={{ marginBottom: '1.2rem' }}>{v.title}</h3>
              <p style={{ color: '#64748b' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { number: "01", title: "Consultation", desc: "We deep-dive into your company culture and requirements." },
    { number: "02", title: "Sourcing", desc: "Our global network and AI tools find the top 1% of talent." },
    { number: "03", title: "Vetting", desc: "Rigorous technical and cultural interviews for every candidate." },
    { number: "04", title: "Placement", desc: "Seamless onboarding and long-term support for your new hire." }
  ];

  return (
    <section id="process" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="zoom-in">
          <span className="badge">How We Work</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Proven Process</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>A streamlined journey from identifying needs to successful integration.</p>
        </div>
        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step" data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="step-number">{step.number}</div>
              <h3 style={{ marginBottom: '1rem', marginTop: '1rem' }}>{step.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "AGS HR transformed our engineering team. Their vetting process is unlike anything we've seen before.",
      author: "Sarah Jenkins",
      role: "CTO, TechFlow Inc.",
      image: "https://i.pravatar.cc/100?u=40"
    },
    {
      text: "Professional, efficient, and deeply connected. They found our CEO in record time.",
      author: "Michael Chen",
      role: "Board Member, Global Logistics",
      image: "https://i.pravatar.cc/100?u=41"
    },
    {
      text: "The consultants at AGS are experts in their field. They provided invaluable strategic advice.",
      author: "Emma Rodriguez",
      role: "HR Director, Creative Pulse",
      image: "https://i.pravatar.cc/100?u=42"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
          <span className="badge">Client Success</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Voices of Trust</h2>
        </div>
        <div className="testimonial-grid">
          {reviews.map((r, idx) => (
            <div key={idx} className="testimonial-card" data-aos="zoom-in-up" data-aos-delay={idx * 150}>
              <p className="testimonial-content">"{r.text}"</p>
              <div className="testimonial-author">
                <img src={r.image} alt={r.author} className="author-img" />
                <div className="author-info">
                  <h4>{r.author}</h4>
                  <p>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "Our core expertise lies in Technology, Finance, Healthcare, and Manufacturing. We have a dedicated team for Each sector to ensure we find the top 1% of talent across the globe."
    },
    {
      q: "How long does the recruitment process take?",
      a: "For permanent placements, we typically present a shortlisted selection of vetted candidates within 5-10 business days. We prioritize quality and culture-fit over mere speed."
    },
    {
      q: "Do you offer cross-border staffing solutions?",
      a: "Yes, our Global Presence allows us to provide seamless cross-border recruitment and relocation support, ensuring compliance with local labor laws and taxation."
    },
    {
      q: "What sets AGS HR apart from other firms?",
      a: "Our unique synergy with our sister companies in Tech and Logistics provides us with a proprietary AI-powered vetting system and a level of operational support that traditional firms cannot match."
    }
  ];
  // const questions = [
  //   { q: "What industries do you specialize in?", a: "We have deep expertise in Technology, Finance, Healthcare, and Creative industries, but our methodology works across all sectors." },
  //   { q: "How long does the typical recruitment process take?", a: "Placement times vary, but typically it takes 2-4 weeks for permanent roles and 48-72 hours for temporary staffing needs." },
  //   { q: "Do you offer post-placement support?", a: "Yes, we provide 90-day retention support for all permanent placements to ensure a smooth transition for both client and candidate." }
  // ];

  return (
    <section id="faq" className="section" style={{ background: '#020617', color: 'white', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="badge" style={{ background: 'rgba(234, 46, 46, 0.2)', color: '#ff5f5f' }}>Questions?</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <button className="faq-question" style={{ color: 'white' }} onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}>
                {item.q}
                <motion.span animate={{ rotate: openIdx === idx ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ color: 'var(--accent)' }}>
                  <ChevronRight size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer" style={{ color: '#94a3b8' }}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const COMPANY_PROFILES = {
  logistics: {
    name: "AGS Logistics",
    tagline: "Global Supply Chain Reimagined",
    desc: "AGS Logistics provides end-to-end supply chain solutions, leveraging advanced technology and a global network to ensure your freight reaches its destination safely and on time.",
    color: "#004aad",
    icon: <Globe />,
    services: [
      { title: "Ocean Freight", desc: "Reliable and cost-effective sea transport solutions for global trade.", icon: <Globe size={20} /> },
      { title: "Land Transport", desc: "Efficient trucking and rail services across borders.", icon: <Truck size={20} /> },
      { title: "Warehousing", desc: "Smart storage solutions with real-time inventory tracking.", icon: <Package size={20} /> },
      { title: "Customs Clearance", desc: "Hassle-free documentation and compliance management.", icon: <ShieldCheck size={20} /> }
    ],
    stats: [
      { label: "Global Offices", value: "24" },
      { label: "Vessels Managed", value: "150+" },
      { label: "Countries Served", value: "45" }
    ]
  },
  tech: {
    name: "AGS Tech",
    tagline: "Building the Digital Future",
    desc: "AGS Tech is a cutting-edge software house specializing in custom enterprise solutions, AI integration, and digital transformation strategies that propel businesses into the next era.",
    color: "#ea2e2e",
    icon: <Target />,
    services: [
      { title: "Web Development", desc: "High-performance, scalable web applications built for speed.", icon: <Zap size={20} /> },
      { title: "AI Solutions", desc: "Custom machine learning models to automate and optimize workflows.", icon: <Target size={20} /> },
      { title: "Cloud Security", desc: "Military-grade encryption and security for your digital assets.", icon: <ShieldCheck size={20} /> },
      { title: "Mobile Apps", desc: "Stunning iOS and Android experiences for the modern user.", icon: <Users size={20} /> }
    ],
    stats: [
      { label: "Projects Completed", value: "300+" },
      { label: "Tech Stack Experts", value: "85" },
      { label: "Client Satisfaction", value: "99%" }
    ]
  }
};

const CompanyProfileModal = ({ type, isOpen, onClose }) => {
  if (!type) return null;
  const company = COMPANY_PROFILES[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}><X /></button>

            <div className="modal-header">
              <div className="modal-company-icon" style={{ background: `${company.color}15`, color: company.color }}>
                {company.icon}
              </div>
              <div className="modal-header-text">
                <span className="badge" style={{ marginBottom: '0.5rem', background: `${company.color}15`, color: company.color }}>{company.tagline}</span>
                <h2>{company.name}</h2>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-about">
                <h3>About the Company</h3>
                <p>{company.desc}</p>
              </div>

              <div className="modal-services-section">
                <h3>Core Services</h3>
                <div className="modal-services-grid">
                  {company.services.map((s, idx) => (
                    <div key={idx} className="modal-service-card">
                      <div className="modal-service-icon" style={{ color: company.color }}>{s.icon}</div>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-footer-stats">
                {company.stats.map((s, idx) => (
                  <div key={idx} className="modal-stat">
                    <span className="stat-value" style={{ color: company.color }}>{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-cta">
              <button className="btn btn-primary" style={{ background: company.color, width: '100%', justifyContent: 'center' }}>
                Contact {company.name} Team
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RelatedCompanies = ({ onOpenProfile }) => {
  const companies = [
    {
      id: 'logistics',
      name: "AGS Logistics",
      desc: "Comprehensive supply chain solutions and global freight forwarding expertise.",
      icon: <Globe />,
      color: "#004aad"
    },
    {
      id: 'tech',
      name: "AGS Tech",
      desc: "Innovative software development and digital transformation for modern enterprises.",
      icon: <Target />,
      color: "#ea2e2e"
    }
  ];

  return (
    <section id="related-companies" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="badge">Our Group</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Related Companies</h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Explore our sister concerns that complement our HR expertise with specialized industry solutions.</p>
        </div>

        <div className="related-grid">
          {companies.map((company, idx) => (
            <div key={idx} className="company-card" data-aos="fade-up" data-aos-delay={idx * 200}>
              <div className="company-icon" style={{ background: `${company.color}15`, color: company.color }}>
                {company.icon}
              </div>
              <h3>{company.name}</h3>
              <p>{company.desc}</p>
              <button className="btn-text" onClick={() => onOpenProfile(company.id)}>
                View Full Profile <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <section id="contact" className="section contact">
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div style={{ width: '80px', height: '80px', background: '#22c55e20', color: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
              <CheckCircle2 size={40} />
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Message Sent!</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send Another Message</button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div data-aos="fade-right">
            <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>Contact Us</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Transform Your Workforce?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>Our team is ready to help you navigate modern HR complexities.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', color: 'var(--primary)' }}><Phone style={{ margin: 'auto' }} /></div>
                <div><h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4><p style={{ color: 'var(--text-muted)' }}>+95 9 123 456 789</p></div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', color: 'var(--primary)' }}><Mail style={{ margin: 'auto' }} /></div>
                <div><h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4><p style={{ color: 'var(--text-muted)' }}>info@agshr.com</p></div>
              </div>
            </div>
          </div>

          <form className="contact-form" data-aos="fade-left" data-aos-delay="200" onSubmit={handleSubmit}>
            <div className="form-group"><label>Full Name</label><input className="form-input" required placeholder="John Doe" /></div>
            <div className="form-group"><label>Email</label><input type="email" className="form-input" required placeholder="john@example.com" /></div>
            <div className="form-group"><label>Message</label><textarea className="form-input" required rows="4" placeholder="How can we help?"></textarea></div>
            <button 
              type="submit" 
              className="btn btn-primary w-full btn-send" 
              style={{ padding: '0.6rem', justifyContent: 'center' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-soft)', borderTop: '1px solid #e2e8f0', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem' }}>
              <img src="/logo.svg" alt="AGS Logo" style={{ height: '40px', width: 'auto', paddingRight: '0.5rem' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)', marginLeft: '-8px' }}>
                <span className="logo-text">AGS <span className="text-accent">HR</span></span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Leading HR consulting firm specializing in global recruitment and executive search since 2011.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://facebook.com/agshr" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'var(--transition)' }}><Facebook size={18} /></a>
              <a href="https://linkedin.com/company/agshr" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'var(--transition)' }}><Linkedin size={18} /></a>
              <a href="https://twitter.com/agshr" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'var(--transition)' }}><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/services" style={{ color: 'var(--text-muted)' }}>Executive Search</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/services" style={{ color: 'var(--text-muted)' }}>Staffing Solutions</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/services" style={{ color: 'var(--text-muted)' }}>HR Consulting</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/services" style={{ color: 'var(--text-muted)' }}>Payroll Outsourcing</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/" style={{ color: 'var(--text-muted)' }} onClick={() => window.scrollTo(0, 0)}>Home</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/about" style={{ color: 'var(--text-muted)' }} onClick={() => window.scrollTo(0, 0)}>About Us</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/group" style={{ color: 'var(--text-muted)' }} onClick={() => window.scrollTo(0, 0)}>AGS Group</NavLink></li>
              <li style={{ marginBottom: '1rem' }}><NavLink to="/contact" style={{ color: 'var(--text-muted)' }} onClick={() => window.scrollTo(0, 0)}>Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>Contact Us</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--primary)', marginTop: '4px' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No. 123, Dynamic Tower,<br />Yangon, Myanmar</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
              <Phone size={18} style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+95 9 123 456 789</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Mail size={18} style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>info@agshr.com</p>
            </div>
          </div>
        </div>
        
        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2026 AGS HR Solutions. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const GroupSynergy = () => {
  return (
    <section className="section group-synergy">
      <div className="container">
        <div className="synergy-grid">
          <div data-aos="fade-right">
            <span className="badge">Group Synergy</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Total Business <span>Solutions</span></h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>
              AGS HR is part of a larger ecosystem. Our sister companies in Logistics and Tech allow us to provide unique, integrated value that other HR firms simply can't match.
            </p>
            <div className="synergy-points">
              <div className="synergy-point">
                <div className="synergy-icon"><Network /></div>
                <div>
                  <h4>Integrated Expertise</h4>
                  <p>HR knowledge backed by deep logistical and technical understanding.</p>
                </div>
              </div>
              <div className="synergy-point">
                <div className="synergy-icon"><Zap /></div>
                <div>
                  <h4>Rapid Deployment</h4>
                  <p>Our tech arm ensures we use the best internal tools for talent discovery.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="synergy-visual" data-aos="zoom-in" data-aos-delay="200">
            <div className="synergy-circle main">AGS HR</div>
            <div className="synergy-circle top">Tech</div>
            <div className="synergy-circle bottom">Logistics</div>
            <div className="synergy-line line-1"></div>
            <div className="synergy-line line-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const hubs = [
    { city: "Yangon", country: "Myanmar", role: "HQ & Regional Hub" },
    { city: "Singapore", country: "Singapore", role: "Tech & Strategic Ops" },
    { city: "Bangkok", country: "Thailand", role: "Logistics Center" },
    { city: "Dubai", country: "UAE", role: "EMEA Partner Network" }
  ];

  return (
    <section className="section global-presence" style={{ background: '#020617', color: 'white' }}>
      <div className="container">
        <div className="global-grid">
          <div data-aos="fade-right">
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Global Presence</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Supporting your international ambitions with local expertise in key markets.</p>
          </div>
          <div className="hubs-grid">
            {hubs.map((h, idx) => (
              <div key={idx} className="hub-card" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="hub-icon"><Map size={24} /></div>
                <div>
                  <h4>{h.city}, {h.country}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{h.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ImpactStats />
                <IndustryFocus />
              </>
            } />
            <Route path="/services" element={
              <>
                <Services onOpenService={setSelectedService} />
                <EngagementModels />
              </>
            } />
            <Route path="/about" element={
              <>
                <About />
                <Values />
                <Process />
                <Testimonials />
              </>
            } />
            <Route path="/group" element={
              <>
                <RelatedCompanies onOpenProfile={setSelectedProfile} />
                <GroupSynergy />
                <GlobalPresence />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <FAQ />
              </>
            } />
          </Routes>
        </main>
        <Footer />

        {selectedProfile && (
          <CompanyProfileModal
            type={selectedProfile}
            isOpen={!!selectedProfile}
            onClose={() => setSelectedProfile(null)}
          />
        )}

        <ServiceDetailModal 
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </Router>
  );
}

export default App;
