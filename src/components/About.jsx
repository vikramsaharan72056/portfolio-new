import { useRef, useEffect } from 'react';
import { personal } from '../data/portfolio';
import './About.css';

const highlights = [
  { icon: '🤖', label: 'AI & LLMs', desc: 'LangChain, OpenAI API, vector DBs, AI agents' },
  { icon: '⚙️', label: 'Backend', desc: 'NestJS, async pipelines, event-driven at 20–40 RPS' },
  { icon: '☁️', label: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD, Supabase, Redis' },
  { icon: '🛒', label: 'eCommerce', desc: 'Shopify apps, themes, storefront automation' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about-me" ref={sectionRef}>
      <div className="section-wrapper">
        <span className="tag animate-on-scroll">About Me</span>
        <h2 className="section-title animate-on-scroll" style={{ marginTop: '1rem' }}>
          Who I Am
        </h2>

        <div className="about-layout animate-on-scroll">
          <div className="about-text">
            <p className="about-lead">
              <span className="gradient-text">AI Full Stack Engineer</span> — I build intelligent,
              production-ready products from the ground up.
            </p>
            <p className="about-body">
              With <strong>3+ years of experience</strong> across frontend, backend, AI integration, and cloud
              infrastructure, I own the full lifecycle of everything I ship. From architecting
              <strong> LLM-powered workflows</strong> and async event-driven backends handling
              <strong> 20–40 RPS</strong>, to deploying scalable systems on AWS.
            </p>
            <p className="about-body">
              I've built Shopify apps used by real merchants, shipped an AI chatbot with LangChain &amp;
              OpenAI that handles conversational product search and order lookups, and delivered a
              cross-platform Electron.js desktop app — all production-grade, all owned end-to-end.
            </p>

            <div className="about-stack-block">
              <p className="stack-label-about">Core Tech Stack</p>
              <p className="about-stack-text">{personal.stack}</p>
            </div>

            <div className="about-actions">
              <a href="#experience" className="btn btn-primary">
                View Experience
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className="highlight-card"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <p className="highlight-label">{h.label}</p>
                  <p className="highlight-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
