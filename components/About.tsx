import { ArrowUpRight } from 'lucide-react';
import { EDUCATION, SITE_CONFIG } from '../constants';
export default function About() {
  return <section id="about" className="about section-tinted"><div className="container"><p className="eyebrow">A LITTLE ABOUT ME</p>
    <div className="about-grid"><div className="about-copy"><h2>Research with structure.<br /><span>A real-world perspective.</span></h2>
      <p>I'm Jiaxing Li (<span lang="zh-CN">李嘉兴</span>), a Ph.D. student in Software Engineering at Southeast University's School of Computer Science and Engineering.</p>
      <p>My research connects graph learning with language model agents, with a focus on robust generalization, tool use, retrieval, and evaluation. I am interested in how structured knowledge helps intelligent systems reason and act in complex environments.</p>
      <p>Previously, I worked on advertising recommendation and cold-start algorithms at Ant Group. That experience continues to shape my interest in evaluating models through the tasks they actually accomplish.</p>
      <a className="text-link" href={SITE_CONFIG.github} target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight size={16} /></a>
    </div><figure className="portrait-card"><img src={`${import.meta.env.BASE_URL}portrait.jpg`} alt="Portrait of Jiaxing Li" width="867" height="1035" loading="lazy" /><figcaption><span>Jiaxing Li <span lang="zh-CN">李嘉兴</span></span><span>Southeast University</span></figcaption></figure></div>
    <div className="background-grid"><div><h3 className="background-title">Education</h3><div className="timeline">{EDUCATION.map(item=><div className="timeline-item" key={item.degree}><span className={`timeline-dot ${item.current ? 'current' : ''}`} /><p className="timeline-period">{item.period}</p><h4>{item.degree}</h4><p>Southeast University</p><p className="timeline-detail">{item.detail}</p></div>)}</div></div>
    <div><h3 className="background-title">Experience</h3><div className="experience-item"><p className="timeline-period">JUN — OCT 2023</p><h4>Advertising Algorithm Engineer</h4><p>Ant Group · Intelligent Engine Department</p></div><div className="experience-item"><p className="timeline-period">JUN — OCT 2022</p><h4>Advertising Algorithm Intern</h4><p>Ant Group · Intelligent Engine Department</p></div><div className="funding-note"><h4>Funded research</h4><p>Participant in the National Key R&amp;D Program on intelligent air traffic management (2025–2028) and an NSFC General Program on connectivity-based depression diagnosis (2024–2028).</p></div></div></div>
  </div></section>;
}
