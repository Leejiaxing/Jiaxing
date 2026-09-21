import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
export default function Hero() {
  return <section id="home" className="hero"><div className="hero-inner">
    <div className="identity"><img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt="Jiaxing Li" width="48" height="48" /><span>{SITE_CONFIG.name}<span className="identity-divider">/</span><span lang="zh-CN">{SITE_CONFIG.chineseName}</span></span></div>
    <p className="hero-eyebrow">Ph.D. Student at Southeast University</p>
    <h1>Learning structure.<br /><span>Building intelligence.</span></h1>
    <p className="hero-description">Exploring graph learning, language model agents,<br className="desktop-break" /> and how to evaluate intelligence in the real world.</p>
    <div className="hero-actions"><a className="button button-blue" href="#publications">Explore my work <ArrowRight size={17} /></a><a className="text-link" href={SITE_CONFIG.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={16} /></a></div>
    <div className="hero-footnote"><span>GRAPH LEARNING</span><i /><span>LLM AGENTS</span><i /><span>EVALUATION</span></div>
  </div></section>;
}
