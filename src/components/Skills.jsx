import { useRef, useEffect } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
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
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="section-wrapper">
        <span className="tag animate-on-scroll">Skills</span>
        <h2 className="section-title animate-on-scroll" style={{ marginTop: '1rem' }}>
          Tech Stack
        </h2>
        <p className="section-subtitle animate-on-scroll">
          Technologies I work with to build modern web applications.
        </p>

        <div className="skills-grid">
          {skills.map((category, ci) => (
            <div
              key={category.category}
              className="skill-category animate-on-scroll"
              style={{ transitionDelay: `${ci * 0.1}s`, '--cat-color': category.color }}
            >
              <div className="cat-header">
                <div className="cat-dot" style={{ background: category.color, boxShadow: `0 0 12px ${category.color}` }} />
                <h3 className="cat-name">{category.category}</h3>
              </div>

              <div className="skill-tags">
                {category.items.map((item, ii) => (
                  <div
                    key={item}
                    className="skill-tag"
                    style={{ animationDelay: `${ci * 0.1 + ii * 0.05}s` }}
                  >
                    <span className="skill-dot" style={{ background: category.color }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
