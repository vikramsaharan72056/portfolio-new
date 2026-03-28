import './Footer.css';
import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-wrapper">
        <div className="footer-left">
          <span className="footer-logo">VS<span className="footer-dot">.</span></span>
          <p className="footer-text">
            Built with React + Three.js + Vite<br />
            Designed & developed by Vikram Singh
          </p>
        </div>
        <div className="footer-right">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
      <div className="footer-bar">
        <span>© 2026 Vikram Singh. All rights reserved.</span>
      </div>
    </footer>
  );
}
