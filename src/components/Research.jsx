import { useState } from 'react';
import { publications, venues, focusChips, researchStatement, publicationCount, publicationYears } from '../data/publications';
import './Research.css';

export default function Research() {
  const [paperIndex, setPaperIndex] = useState(0);
  const paper = publications[paperIndex];

  function prev() {
    setPaperIndex((i) => (i - 1 + publications.length) % publications.length);
  }
  function next() {
    setPaperIndex((i) => (i + 1) % publications.length);
  }

  return (
    <section id="research" className="section">
      <div className="section__inner research__grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 'var(--space-6)' }}>Research</div>
          <h2 className="research__statement heading-hover">{researchStatement}</h2>
          <div className="research__chips">
            {focusChips.map((chip) => (
              <div className="chip" key={chip}>{chip}</div>
            ))}
          </div>
        </div>

        <div>
          <div className="research__stat">
            <div className="research__stat-number">{publicationCount}</div>
            <div className="research__stat-label">
              peer reviewed papers and conference proceedings published, {publicationYears}
            </div>
          </div>

          <div className="research__paper">
            <div className="research__paper-head">
              <div className="research__paper-no">Paper No. {paper.no}</div>
              <div className="research__paper-nav">
                <button onClick={prev} aria-label="Previous paper">&uarr;</button>
                <button onClick={next} aria-label="Next paper">&darr;</button>
              </div>
            </div>
            <div className="research__paper-title">&ldquo;{paper.title}&rdquo;</div>
            <div className="research__paper-venue">{paper.venue}</div>
            <p className="research__paper-abstract">{paper.abstract}</p>
          </div>

          <div className="research__venues">
            {venues.map((v) => (
              <div className="research__venue" key={v}>{v}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
