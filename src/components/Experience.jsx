import { useState } from 'react';
import { teaching, industry } from '../data/experience';
import './Experience.css';

export default function Experience() {
  const [tab, setTab] = useState('teaching');
  const rows = tab === 'teaching' ? teaching : industry;

  return (
    <section id="experience" className="section" style={{ color: 'var(--color-neutral-100)' }}>
      <div className="section__inner section__inner--narrow experience__grid">
        <div>
          <h2 className="experience__heading heading-hover">Experience</h2>
          <div className="experience__tabs">
            <button
              className={`experience__tab${tab === 'teaching' ? ' experience__tab--active' : ''}`}
              onClick={() => setTab('teaching')}
            >
              Academic Teaching
            </button>
            <button
              className={`experience__tab${tab === 'industry' ? ' experience__tab--active' : ''}`}
              onClick={() => setTab('industry')}
            >
              Industry Practice
            </button>
          </div>
          <div className="experience__count">{String(rows.length).padStart(2, '0')}</div>
        </div>

        <div>
          {rows.map((row) => (
            <div className="experience__row" key={row.yr + row.role}>
              <div className="experience__yr">{row.yr}</div>
              <div>
                <div className="experience__role">{row.role}</div>
                <div className="experience__org">{row.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
