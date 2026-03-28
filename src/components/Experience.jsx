import { useRef, useEffect, useState } from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = experience.find(e => e.id === activeId);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="section-wrapper">
        <span className="tag animate-on-scroll">Experience</span>
        <h2 className="section-title animate-on-scroll" style={{ marginTop: '1rem' }}>
          Where I've Worked
        </h2>
        <p className="section-subtitle animate-on-scroll">
          End-to-end AI and full-stack product development across startups and enterprises.
        </p>

        <div className="exp-layout animate-on-scroll">
          {/* Company tabs */}
          <div className="exp-tabs">
            {experience.map((exp) => (
              <button
                key={exp.id}
                className={`exp-tab ${activeId === exp.id ? 'active' : ''}`}
                onClick={() => setActiveId(exp.id)}
                style={{ '--tab-color': exp.color }}
              >
                <span className="tab-company">{exp.company}</span>
                <span className="tab-period">{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Active panel */}
          {active && (
            <div className="exp-panel" key={active.id}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{active.role}</h3>
                  <p className="exp-company">
                    @ <span style={{ color: active.color }}>{active.company}</span>
                  </p>
                </div>
                <span className="exp-type-badge" style={{ '--badge-color': active.color }}>
                  {active.type}
                </span>
              </div>
              <p className="exp-period-text">{active.period}</p>
              <ul className="exp-bullets">
                {active.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="bullet-arrow" style={{ color: active.color }}>▹</span>
                    {b}
                  </li>
                ))}
              </ul>
              {active.stack && (
                <div className="exp-stack">
                  <span className="stack-label">Stack:</span>
                  <span className="stack-tags">{active.stack}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
