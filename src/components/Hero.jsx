import { useEffect, useRef } from 'react';
import { personal } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section className="hero" id="about">
      <div className="hero-inner section-wrapper">
        <div className="hero-badge">
          <span className="glow-dot" />
          <span>Available for opportunities</span>
        </div>

        <div ref={titleRef} className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Vikram Singh</span>
          </h1>
          <p className="hero-role">AI Full Stack Engineer</p>
          <p className="hero-tagline">{personal.tagline}</p>

          <div className="hero-tag-row">
            {['AI Full Stack', 'LLMs', 'NestJS', 'React', 'AWS', 'TypeScript'].map((tag) => (
              <span key={tag} className="hero-inline-tag">{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">73+</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">150+</span>
              <span className="stat-label">Students Mentored</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-ring-inner">
              <img src={personal.avatar} alt="Vikram Singh" className="avatar-img" />
            </div>
            <div className="orbit orbit-1">
              <div className="orbit-dot" style={{ '--color': '#a855f7' }} />
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-dot" style={{ '--color': '#00d4ff' }} />
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-dot" style={{ '--color': '#00ff88' }} />
            </div>
          </div>

          <div className="tech-pills">
            {['AI/LLMs', 'NestJS', 'React', 'AWS', 'TypeScript'].map((tech, i) => (
              <div
                key={tech}
                className="tech-pill"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>

      {/* Gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
    </section>
  );
}
