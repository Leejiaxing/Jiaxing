import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

function ResearchVisual({ type }: { type: string }) {
  if (type === 'graph') {
    const nodes = [[90,72],[153,49],[213,80],[245,133],[204,185],[135,198],[70,150],[156,123]];
    const edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[0,5],[1,3],[2,4]];
    return <svg viewBox="0 0 320 250" aria-hidden="true"><circle cx="158" cy="123" r="103" fill="none" stroke="currentColor" opacity=".08" /><circle cx="158" cy="123" r="73" fill="none" stroke="currentColor" opacity=".08" />{edges.map(([a,b],i)=><line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth="1.2" opacity=".3" />)}{nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r={i === 7 ? 21 : 12} fill="currentColor" opacity=".08" /><circle cx={x} cy={y} r={i === 7 ? 10 : 5} fill="currentColor" /></g>)}</svg>;
  }
  if (type === 'agent') return <svg viewBox="0 0 320 250" aria-hidden="true"><rect x="73" y="51" width="174" height="148" rx="32" fill="none" stroke="currentColor" strokeWidth="1" opacity=".2" /><path d="M160 51H230Q247 51 247 68V127M247 155V182Q247 199 230 199H144M112 199H90Q73 199 73 182V112M73 86V68Q73 51 90 51H124" fill="none" stroke="currentColor" strokeWidth="2" opacity=".65" /><rect x="119" y="87" width="82" height="76" rx="23" fill="currentColor" opacity=".1" /><path d="M145 119l-7 7 7 7m30-14 7 7-7 7m-10-20-10 39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />{[[160,51],[247,125],[160,199],[73,125]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="14" fill="#f2effa" /><circle cx={x} cy={y} r="5" fill="currentColor" /></g>)}</svg>;
  return <svg viewBox="0 0 320 250" aria-hidden="true"><path d="M69 50V199H258" fill="none" stroke="currentColor" opacity=".2" /><path d="M69 149H258M69 99H258M69 50H258" stroke="currentColor" strokeDasharray="3 6" opacity=".12" />{[61,88,119,150].map((h,i)=><rect key={h} x={91+i*43} y={198-h} width="23" height={h} rx="6" fill="currentColor" opacity={.2+i*.22} />)}<path d="m93 113 44-19 43-32 48-30m-12 0h12v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}
const areas = [
  { id: 'graph', label: '01 / GRAPH LEARNING', title: 'Structure.\nWith generalization.', description: 'Learning robust representations when graph topology and data distributions change.', detail: 'My work studies neighbor shifts, topology-aware reweighting, invariant learning, and class imbalance on graphs. Related publications appear in TPAMI, TAI, ICML, AAAI, and IJCAI.', tags: 'Graph OOD · Robust learning' },
  { id: 'agent', label: '02 / LANGUAGE MODEL AGENTS', title: 'Reasoning.\nWith context.', description: 'Bringing graph structure, tool use, and retrieval into language model reasoning.', detail: 'BrainAgent combines topology-aware brain-network descriptions, graph analysis tools, medical knowledge retrieval, and similar-case retrieval in an iterative reasoning loop.', tags: 'BrainAgent · Retrieval · Tool use' },
  { id: 'evaluation', label: '03 / REAL-WORLD EVALUATION', title: 'Intelligence.\nPut to the test.', description: 'Evaluating what agents accomplish across real workflows and simulated environments.', detail: 'Stu-Bench covers 40 student-service tasks across 21 simulated apps, separating content quality from final-state correctness. ATC-Bench evaluates LLM-generated air-traffic control plans through closed-loop BlueSky simulation; accepted at EMNLP 2026.', tags: 'Stu-Bench · ATC-Bench' },
];
export default function Research() {
  const [expanded, setExpanded] = useState<string[]>([]);
  return <section id="research" className="research section-tinted"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">RESEARCH</p><h2>Connected by curiosity.</h2></div><p>From structured data<br />to capable, reliable agents.</p></div>
    <div className="research-grid">{areas.map(area => {
      const open = expanded.includes(area.id);
      return <article className={`research-card ${area.id}`} key={area.id}>
        <p className="card-eyebrow">{area.label}</p><h3>{area.title.split('\n').map((line,i)=><span key={line}>{i > 0 && <br />}{line}</span>)}</h3>
        <div className="research-visual"><ResearchVisual type={area.id} /></div>
        <p className="card-description">{area.description}</p><p className="card-tags">{area.tags}</p>
        <div className="research-card-bottom"><span>Explore the research</span><button className="round-button" aria-label={`${open ? 'Hide' : 'Read'} ${area.label.slice(5).toLowerCase()} details`} aria-expanded={open} aria-controls={`detail-${area.id}`} onClick={() => setExpanded(previous => open ? previous.filter(id => id !== area.id) : [...previous, area.id])}>{open ? <Minus size={18} /> : <Plus size={18} />}</button></div>
        <div id={`detail-${area.id}`} hidden={!open} className="research-detail"><p>{area.detail}</p><a href="#publications" className="text-link">View publications <ArrowUpRight size={14} /></a></div>
      </article>;
    })}</div>
  </div></section>;
}
