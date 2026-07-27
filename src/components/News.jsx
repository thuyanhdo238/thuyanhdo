import { newsItems } from '../data/news';
import './News.css';

export default function News() {
  return (
    <section id="news" className="section">
      <div className="section__inner section__inner--narrow">
        <div className="eyebrow" style={{ marginBottom: 'var(--space-6)' }}>News</div>
        <h2 className="news__heading heading-hover">Conferences, Awards, and Speaking</h2>
        <div className="news__grid">
          {newsItems.map((n) => (
            <div className="news__card" key={n.title}>
              <div className="news__tag">{n.tag} &middot; {n.year}</div>
              <div className="news__title heading-hover">{n.title}</div>
              <div className="news__org">{n.org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
