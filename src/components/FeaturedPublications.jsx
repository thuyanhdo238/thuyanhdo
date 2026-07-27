import { Link } from 'react-router-dom';
import { publications } from '../data/publications';
import './FeaturedPublications.css';

// A gallery of publication covers, shown above Selected Work. Purely visual —
// the Research section above still holds the browsable abstract viewer.
export default function FeaturedPublications() {
  return (
    <section id="publications" className="section">
      <div className="section__inner">
        <div className="pubs__eyebrow eyebrow">Featured Publications</div>
        <h2 className="pubs__heading heading-hover">Peer-Reviewed Work</h2>
        <div className="pubs__grid">
          {publications.map((p) => (
            <a href="#research" className="pubs__card" key={p.no}>
              <div className="pubs__cover-frame">
                {p.cover ? (
                  <img src={p.cover} alt={p.title} className="pubs__cover" />
                ) : (
                  <div className="pubs__placeholder">Cover coming soon</div>
                )}
              </div>
              <div className="pubs__no">Paper No. {p.no}</div>
              <div className="pubs__title">{p.title}</div>
              <div className="pubs__venue">{p.venue}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
