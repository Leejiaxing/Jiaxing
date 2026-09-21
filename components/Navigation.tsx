import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SectionId } from '../types';
import { SITE_CONFIG } from '../constants';

export default function Navigation({ activeSection }: { activeSection: SectionId }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navLinks = [{ id: SectionId.PROJECTS, label: 'Research' }, { id: SectionId.PUBLICATIONS, label: 'Publications' }, { id: SectionId.ABOUT, label: 'About' }, { id: SectionId.CONTACT, label: 'Contact' }];
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } };
    const resize = () => { if (window.innerWidth > 700) setOpen(false); };
    window.addEventListener('keydown', close); window.addEventListener('resize', resize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <a href="#home" className="wordmark" onClick={() => setOpen(false)}>{SITE_CONFIG.name}<span className="wordmark-dot">.</span></a>
    <div id="navigation-links" className={`nav-links ${open ? 'is-open' : ''}`}>
      {navLinks.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} aria-current={activeSection === link.id ? 'location' : undefined}>{link.label}</a>)}
      <a className="nav-scholar" href={SITE_CONFIG.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={13} /></a>
    </div>
    <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
  </nav></header>;
}
