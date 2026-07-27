import { useState } from 'react';
import { categories, portfolio } from '../data/portfolio';
import WorkCard from './WorkCard';
import './Work.css';

export default function Work() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? portfolio : portfolio.filter((p) => p.cat === filter);

  return (
    <section id="work" className="section">
      <div className="section__inner">
        <div className="work__head">
          <div>
            <div className="work__eyebrow eyebrow">
              <svg width="9" height="9" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="var(--color-accent)" /></svg>
              Portfolio
            </div>
            <h2 className="work__heading heading-hover">Selected Work That Speaks for Itself</h2>
          </div>
          <div className="work__filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`work__filter${cat === filter ? ' work__filter--active' : ''}`}
              >
                <svg width="7" height="7" viewBox="0 0 8 8" style={{ marginRight: 6 }}>
                  <polygon points="4,0 8,4 4,8 0,4" fill="currentColor" />
                </svg>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="work__grid">
          {filtered.map((item) => (
            <WorkCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
