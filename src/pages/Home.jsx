import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { id: 'f1', icon: '🏆', title: 'Achievement Tracking', desc: 'Comprehensive record of awards, recognitions, and participation certificates', bg: '#FFF0D4' },
    { id: 'f2', icon: '⭐', title: 'Digital Portfolio', desc: 'Build and showcase your extracurricular profile beyond academics', bg: '#FFD4D4' },
    { id: 'f3', icon: '📊', title: 'Visual Analytics', desc: 'Interactive charts and insights to track your achievement journey', bg: '#D4F0F0' },
    { id: 'f4', icon: '🎯', title: 'Participation History', desc: 'Timeline view of all your club activities, events, and competitions', bg: '#D4E2FF' },
    { id: 'f5', icon: '👥', title: 'Role-Based Access', desc: 'Secure admin panel and personalized student dashboards', bg: '#E2D4FF' },
    { id: 'f6', icon: '🌙', title: 'Dark Mode Support', desc: 'Eye-friendly dark theme for comfortable viewing anytime', bg: '#E2E2E2' },
  ];

  const steps = [
    { id: 1, icon: '🔐', title: 'Secure Login', desc: 'Access your personalized dashboard' },
    { id: 2, icon: '➕', title: 'Add Achievements', desc: 'Record your awards easily' },
    { id: 3, icon: '📊', title: 'Track Progress', desc: 'Monitor your growth' },
    { id: 4, icon: '🌟', title: 'Showcase Portfolio', desc: 'Share your success' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-vibrant">
        {/* Floating Icons Background */}
        <div className="floating-bg">
          <span className="float-icon i1">🏅</span>
          <span className="float-icon i2">⭐</span>
          <span className="float-icon i3">🎯</span>
          <span className="float-icon i4">🏀</span>
          <span className="float-icon i5">🏆</span>
          <span className="float-icon i6">🎾</span>
        </div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-main-icon">🏆</div>
          <h1 className="hero-title">Student Achievement Platform</h1>
          <h2 className="hero-subtitle">Empower Your Success Beyond the Classroom</h2>
          <p className="hero-text">A comprehensive digital platform for colleges and universities to track, manage, and showcase student achievements in extracurricular activities, competitions, and leadership roles.</p>
          
          <div className="hero-badges">
            <span className="glass-badge">🏅 Awards</span>
            <span className="glass-badge">⭐ Recognition</span>
            <span className="glass-badge">🎯 Participation</span>
          </div>

          <div className="hero-cta">
            <button className="btn-pill btn-white" onClick={() => navigate('/login')}>Login 🚀</button>
            <button className="btn-pill btn-outline-white" onClick={() => navigate('/register')}>Create Account</button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-vibrant">
        <div className="stats-grid-vibrant">
          <div className="home-stat-card">
            <div className="stat-icon">👥</div>
            <h3>500+</h3>
            <p>ACTIVE STUDENTS</p>
          </div>
          <div className="home-stat-card stat-highlight">
            <div className="stat-icon">🏆</div>
            <h3>1,200+</h3>
            <p>ACHIEVEMENTS RECORDED</p>
          </div>
          <div className="home-stat-card">
            <div className="stat-icon">🎯</div>
            <h3>250+</h3>
            <p>EVENTS TRACKED</p>
          </div>
          <div className="home-stat-card">
            <div className="stat-icon">⭐</div>
            <h3>400+</h3>
            <p>AWARDS DISTRIBUTED</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-vibrant">
        <h2 className="section-title">🎯 How It Works</h2>
        <div className="steps-grid">
          {steps.map(step => (
            <div className="step-card-vibrant" key={step.id}>
              <div className="step-number-badge">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-vibrant">
        <h2 className="section-title">✨ Platform Features</h2>
        <div className="features-grid-vibrant">
          {features.map(f => (
            <div className="feature-card-vibrant" key={f.id}>
              <div className="feature-icon-wrapper" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-vibrant-section">
        <div className="cta-glass-card">
          <h2>Ready to Showcase Your<br/>Achievements? 🚀</h2>
          <p>Join hundreds of students building their digital success portfolio</p>
          <button className="btn-pill btn-yellow" onClick={() => navigate('/register')}>Get Started Now 🎉</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="vibrant-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🎓 Achievement Portal</h3>
            <p>Empowering students to track and showcase their extracurricular excellence.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>sdp28@gmail.com</p>
          </div>
        </div>
        <div className="footer-icons">
          <span>🏆</span><span>⭐</span><span>🎯</span><span>🏅</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
