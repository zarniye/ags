import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroImg from './assets/hero.png'
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
  Youtube
} from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section scroll spy
      const sections = ['home', 'services', 'about', 'values', 'process', 'testimonials', 'faq', 'careers', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="./logo.svg" alt="AGS Logo" style={{ width: '40px', height: 'auto' }} />
          <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004aad' }}>AGS <span style={{ color: '#ea2e2e' }}>HR</span></span>
        </div>

        <nav className="nav-links">
          {['Home', 'Services', 'About', 'Careers', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}>
              {item}
            </a>
          ))}
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>Get Talented</button>
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
              <div className="flex items-center gap-3">
                <img src="./logo.svg" alt="AGS Logo" style={{ width: '40px', height: 'auto' }} />
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.02em' }}>AGS <span style={{ color: 'var(--accent)' }}>HR</span></span>
              </div>
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
              {['Home', 'Services', 'About', 'Careers', 'Contact'].map((item, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    padding: '1rem 0',
                    color: activeSection === item.toLowerCase() ? 'var(--primary)' : 'var(--text-main)',
                    display: 'block',
                    borderBottom: '1px solid var(--bg-soft)'
                  }} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
              <button className="btn btn-primary w-full" style={{ justifyContent: 'center', padding: '1.25rem' }}>
                Get Talented
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
                <button className="btn btn-primary">Find Your Next Hire <ArrowRight size={18} /></button>
                <button className="btn btn-secondary">Explore Services</button>
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

          <motion.div initial={{ opacity: 0, scale: 0.8, x: 100 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: 0.3, duration: 1.2 }} className="hero-visual">
            <img src={heroImg} alt="Business Meeting" className="visual-bg" />
            <div className="visual-overlay"></div>
            
            <div className="visual-grid">
              {[
                { icon: <Users />, label: 'Recruitment', color: '#ea2e2e' },
                { icon: <Briefcase />, label: 'Consulting', color: '#ffffff' },
                { icon: <Award />, label: 'Staffing', color: '#ffffff' },
                { icon: <Target />, label: 'Strategy', color: '#ea2e2e' }
              ].map((item, idx) => (
                <div key={idx} className="visual-card">
                  <div className="visual-icon" style={{ color: item.color }}>{item.icon}</div>
                  <span className="visual-label">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [index, setIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  const services = [
    { title: "Executive Recruitment", desc: "Finding high-level leaders who drive your company's mission forward.", icon: <Users /> },
    { title: "Permanent Staffing", desc: "Building stable, long-term teams with candidates that fit your culture.", icon: <Briefcase /> },
    { title: "HR Consulting", desc: "Strategic advice on workforce planning, policy, and compliance.", icon: <Target /> },
    { title: "Payroll Management", desc: "Streamlined solutions for hassle-free payroll and taxation.", icon: <Award /> },
    { title: "Training & Dev", desc: "Empowering your employees with modern skillsets and leadership training.", icon: <CheckCircle2 /> },
    { title: "Global Mobility", desc: "Seamless cross-border staffing and relocation services.", icon: <Globe /> }
  ];

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
                  <div className="service-card">
                    <div className="icon-box" style={{ width: '56px', height: '56px', marginBottom: '1.5rem', color: idx % 2 === 0 ? '#004aad' : '#ea2e2e' }}>{s.icon}</div>
                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{s.title}</h3>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5' }}>{s.desc}</p>
                    <a href="#" style={{ fontWeight: 'bold', color: '#004aad', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                      Learn More <ChevronRight size={14} />
                    </a>
                  </div>
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
            <button className="btn btn-primary">Learn Our Story</button>
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
    { q: "What industries do you specialize in?", a: "We specialize in Technology, Executive Search, Manufacturing, and Financial Services across the globe." },
    { q: "How long does the typical recruitment process take?", a: "Depending on the role complexity, we typically present a shortlist of vetted candidates within 7-14 business days." },
    { q: "Do you offer post-placement support?", a: "Absolutely. We follow up with both the client and the candidate for 6 months to ensure a perfect long-term fit." },
    { q: "What sets AGS HR apart from other firms?", a: "Our proprietary AI-driven vetting and our deep horizontal expertise in specialized staffing since 2011." }
  ];
  const questions = [
    { q: "What industries do you specialize in?", a: "We have deep expertise in Technology, Finance, Healthcare, and Creative industries, but our methodology works across all sectors." },
    { q: "How long does the typical recruitment process take?", a: "Placement times vary, but typically it takes 2-4 weeks for permanent roles and 48-72 hours for temporary staffing needs." },
    { q: "Do you offer post-placement support?", a: "Yes, we provide 90-day retention support for all permanent placements to ensure a smooth transition for both client and candidate." }
  ];

  return (
    <section id="faq" className="section" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="badge">Questions?</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}>
                {item.q}
                <motion.span animate={{ rotate: openIdx === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
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
                    <div className="faq-answer">
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

const Careers = () => {
  const jobs = [
    { title: "Senior Technical Recruiter", dept: "HR Ops", location: "Remote / Yangon", type: "Full-time" },
    { title: "Business Development Manager", dept: "Sales", location: "Mandalay, Bago", type: "Full-time" },
    { title: "HR Compliance Specialist", dept: "Legal & HR", location: "Naypyitaw", type: "Contract" },
    { title: "Talent Acquisition Associate", dept: "HR Ops", location: "Remote / Yangon", type: "Full-time" }
  ];

  return (
    <section id="careers" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
          <span className="badge">Join Our Team</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Build Your Career with <span style={{ color: '#004aad' }}>AGS HR</span></h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>We're looking for passionate individuals to help us bridge the gap between global talent and opportunity.</p>
        </div>

        <div className="jobs-list">
          {jobs.map((job, idx) => (
            <div key={idx} className="job-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span className="job-tag">{job.dept}</span>
                  <span className="job-location"><MapPin size={14} /> {job.location}</span>
                  <span className="job-type">{job.type}</span>
                </div>
              </div>
              <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>Apply Now</button>
            </div>
          ))}
        </div>

        <div className="talent-pool-cta" data-aos="zoom-in" data-aos-delay="200">
          <h3>Don't see a role for you?</h3>
          <p>Join our talent network to stay updated on future opportunities.</p>
          <button className="btn btn-primary">Join Talent Pool</button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div data-aos="fade-right">
            <span className="badge" style={{ background: 'rgba(234, 46, 46, 0.2)', color: '#ff5f5f' }}>Contact Us</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Transform Your Workforce?</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '3rem' }}>Our team is ready to help you navigate modern HR complexities.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}><Phone style={{ margin: 'auto' }} /></div>
                  <div><h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4><p style={{ color: '#94a3b8' }}>+95 (9) 000-0000</p></div>
               </div>
               <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}><Mail style={{ margin: 'auto' }} /></div>
                  <div><h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4><p style={{ color: '#94a3b8' }}>info@agshr.com</p></div>
               </div>
            </div>
          </div>

          <div className="contact-form" data-aos="fade-left" data-aos-delay="200">
            <div className="form-group"><label>Full Name</label><input className="form-input" placeholder="John Doe" /></div>
            <div className="form-group"><label>Email</label><input className="form-input" placeholder="john@example.com" /></div>
            <div className="form-group"><label>Message</label><textarea className="form-input" rows="4" placeholder="How can we help?"></textarea></div>
            <button className="btn btn-primary w-full btn-send" style={{ padding: '0.6rem', justifyContent: 'center' }}>
              Send Message <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
              <img src="./logo.svg" alt="AGS Logo" style={{ width: '32px', height: 'auto' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AGS HR</span>
            </div>
            <p style={{ color: '#64748b' }}>Innovative HR solutions for a dynamic world.</p>
          </div>
          <div><h4 style={{ marginBottom: '1.5rem' }}>Company</h4><a href="#" style={{ display: 'block', marginBottom: '0.5rem', color: '#64748b' }}>About</a><a href="#" style={{ display: 'block', color: '#64748b' }}>Careers</a></div>
          <div><h4 style={{ marginBottom: '1.5rem' }}>Legal</h4><a href="#" style={{ display: 'block', marginBottom: '0.5rem', color: '#64748b' }}>Privacy</a><a href="#" style={{ display: 'block', color: '#64748b' }}>Terms</a></div>
        </div>
        <div style={{ paddingTop: '2rem', borderTop: '1px solid #f1f5f9', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>© 2026 AGS HR Solutions. All rights reserved.</div>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="app-root">
      <Header />
      <Hero />
      <Services />
      <About />
      <Values />
      <Process />
      <Testimonials />
      <FAQ />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
