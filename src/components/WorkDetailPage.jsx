import { Link, useNavigate, useParams } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import './WorkDetailPage.css';

export default function WorkDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const index = portfolio.findIndex((p) => p.slug === slug);
  const item = portfolio[index];

  if (!item) {
    return (
      <div className="work-detail">
        <div className="work-detail__inner">
          <p>Project not found.</p>
          <Link to="/#work">&larr; Back to Work</Link>
        </div>
      </div>
    );
  }

  function go(offset) {
    const nextIndex = (index + offset + portfolio.length) % portfolio.length;
    navigate(`/work/${portfolio[nextIndex].slug}`);
  }

  return (
    <div className="work-detail">
      <div className="work-detail__inner">
        <Link to="/#work" className="work-detail__back">&larr; Back to Work</Link>
        <div className="work-detail__grid">
          <div className="work-detail__image-frame">
            {item.image ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <div className="work-detail__placeholder">Image coming soon</div>
            )}
          </div>
          <div>
            <div className="work-detail__cat">{item.cat}</div>
            <h1 className="work-detail__title">{item.title}</h1>
            <div className="work-detail__abstract-label">Abstract</div>
            <p className="work-detail__abstract">{item.abstract}</p>
            <div className="work-detail__nav">
              <button onClick={() => go(-1)}>Prev</button>
              <button onClick={() => go(1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
