import { Link } from 'react-router-dom';
import { useState } from 'react';
import './WorkCard.css';

export default function WorkCard({ item }) {
  // Cursor-tracked 3D tilt + a spotlight that follows the mouse over the image.
  // No resting rotation/skew — cards sit flat and aligned until hovered.
  const [fx, setFx] = useState(null);

  function handleMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setFx({ px, py, rx: (py - 0.5) * -10, ry: (px - 0.5) * 10 });
  }

  const transform = fx
    ? `perspective(900px) rotateX(${fx.rx}deg) rotateY(${fx.ry}deg) scale(1.05)`
    : 'perspective(900px) scale(1)';

  const spotlight = fx
    ? {
        background: `radial-gradient(260px circle at ${fx.px * 100}% ${fx.py * 100}%, rgba(255,214,140,0.6), rgba(211,152,88,0.18) 50%, transparent 70%)`,
        mixBlendMode: 'overlay',
        opacity: 1,
      }
    : { opacity: 0 };

  return (
    <Link to={`/work/${item.slug}`} className="work-card">
      <div
        className="work-card__frame"
        onMouseMove={handleMove}
        onMouseLeave={() => setFx(null)}
        style={{ transform, zIndex: fx ? 5 : 1 }}
      >
        {item.image ? (
          <img src={item.image} alt={item.title} className="work-card__image" />
        ) : (
          <div className="work-card__placeholder">Image coming soon</div>
        )}
        <div className="work-card__spotlight" style={spotlight} />
        {item.onHold && <div className="work-card__badge">On Hold</div>}
      </div>
      <div className="work-card__cat">
        <svg width="7" height="7" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="currentColor" /></svg>
        {item.cat}
      </div>
      <div className="work-card__title">{item.title}</div>
    </Link>
  );
}
