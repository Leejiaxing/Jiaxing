import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
export default function Footer() {
  return <footer id="contact" className="footer"><div className="container">
    <div className="contact-content"><p className="eyebrow">LET'S CONNECT</p><h2>Good research starts<br />with a conversation.</h2><p>Interested in graphs, agents, or a shared research question?<br className="desktop-break" /> I'd love to hear from you.</p><a className="button button-blue" href={`mailto:${SITE_CONFIG.email}`}>Get in touch <ArrowRight size={17} /></a><a className="contact-email" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span><div><a href={SITE_CONFIG.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><a href={SITE_CONFIG.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={12} /></a><a href="#home">Back to top ↑</a></div><span>Updated {SITE_CONFIG.updated}</span></div>
  </div></footer>;
}
