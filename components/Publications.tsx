import { useState } from 'react';
import { ArrowUpRight, Search, ChevronDown, X } from 'lucide-react';
import { PUBLICATIONS, SITE_CONFIG } from '../constants';
const filters = ['Published & accepted', 'First author'] as const;
type Filter = typeof filters[number];
export default function Publications() {
  const [filter, setFilter] = useState<Filter>('Published & accepted');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const matches = PUBLICATIONS.filter(paper => {
    const category = filter !== 'First author' || paper.firstAuthor;
    return category && [paper.title, paper.venue, paper.venueShort, paper.year, ...paper.authors].join(' ').toLowerCase().includes(query.trim().toLowerCase());
  });
  const visible = showAll || query.trim() ? matches : matches.slice(0, 5);
  return <section id="publications" className="publications"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">PUBLICATIONS</p><h2>Ideas, in print.</h2></div><a className="text-link" href={SITE_CONFIG.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={16} /></a></div>
    <p className="section-intro">Graph learning, robust generalization, and language model agents.</p>
    <div className="publication-toolbar"><div className="filter-group" role="group" aria-label="Filter publications">{filters.map(value => <button key={value} aria-pressed={filter === value} className={filter === value ? 'active' : ''} onClick={() => { setFilter(value); setShowAll(false); }}>{value}</button>)}</div><div className="search-field"><Search size={16} aria-hidden="true" /><input aria-label="Search publications" type="search" placeholder="Search papers" value={query} onChange={event => { setQuery(event.target.value); setShowAll(false); }} />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={14} /></button>}</div></div>
    <p className="results-count" role="status">{matches.length} {matches.length === 1 ? 'publication' : 'publications'}</p>
    <div className="publication-list">{visible.map(paper => <article key={paper.id} className="publication-row">
      <div className="publication-venue"><span>{paper.venueShort}</span><span className="publication-year">{paper.year ?? 'In press'}</span></div>
      <div className="publication-body"><div className="publication-badges">{paper.status !== 'Published' && <span className="status-badge">{paper.status}</span>}{paper.firstAuthor && <span className="authorship-badge">{paper.equalContribution ? 'Co-first author' : 'First author'}</span>}</div>
        <h3>{paper.title}</h3><p className="authors">{paper.authors.map((author,i)=><span key={author}>{i > 0 && ', '}{author.startsWith('Jiaxing Li') ? <strong>{author}</strong> : author}</span>)}</p>
        <p className="venue-full">{paper.venue}{paper.details ? ` · ${paper.details}` : ''}</p>{paper.equalContribution && <p className="equal-note">* Equal contribution.</p>}
        <div className="publication-actions">
          <a className="paper-link" href={paper.paperUrl ?? '#home'} aria-label={`PAPER — ${paper.title}`}>PAPER <ArrowUpRight size={13} /></a>
          <a className="paper-link" href={paper.codeUrl ?? '#home'} aria-label={`code — ${paper.title}`}>code <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </article>)}</div>
    {matches.length === 0 && <div className="empty-state"><h3>No matching publications.</h3><p>Try another title, author, venue, or year.</p><button className="text-link" onClick={() => { setQuery(''); setFilter('Published & accepted'); }}>Reset filters <ArrowUpRight size={15} /></button></div>}
    {!query.trim() && matches.length > 5 && <div className="show-more"><button className="button button-outline" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{showAll ? 'Show fewer publications' : `View all ${matches.length} publications`}<ChevronDown size={16} className={showAll ? 'rotated' : ''} /></button></div>}
  </div></section>;
}
