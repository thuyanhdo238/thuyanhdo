import { useEffect, useState } from 'react';
import DustParticles, { makeParticles } from './DustParticles';
import './Hero.css';

const heroDust = makeParticles(14, { posRange: [10, 45], vertical: 'bottom', verticalRange: [20, 75] });

export default function Hero() {
  // Cursor-tracked warm spotlight, layered above the text with mix-blend-mode
  // so it visibly brightens both the background and the type.
  const [light, setLight] = useState({ x: 50, y: 40 });
  // Two "leather cover" panels swing open ~400ms after mount, revealing the hero
  // like an old book opening.
  const [coverOpen, setCoverOpen] = useState(false);
  // Once the opening transition has had time to finish, we unmount the cover
  // panels entirely (see note below on the Android artifact this fixes).
  const [coverDone, setCoverDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setCoverOpen(true), 400);
    const t2 = setTimeout(() => setCoverDone(true), 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  function handleMouseMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    setLight({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }

  const beamWidth = Math.round(140 + Math.abs(light.x - 50) * 1.4);

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      {!coverDone && (
        <>
          <div
            className="hero__cover hero__cover--left"
            style={{ transform: coverOpen ? 'rotateY(-108deg)' : 'rotateY(0deg)' }}
          />
          <div
            className="hero__cover hero__cover--right"
            style={{ transform: coverOpen ? 'rotateY(108deg)' : 'rotateY(0deg)', transitionDelay: '60ms' }}
          />
          <div className="hero__spine" style={{ opacity: coverOpen ? 0 : 1 }} />
        </>
      )}

      <div className="hero__beam" style={{ width: beamWidth }} />
      <DustParticles particles={heroDust} positioning="right" />

      <div className="hero__content">
        <div className="eyebrow">Graphic Design &middot; Visual Research</div>
        <h1 className="hero__name heading-hover">Do Thi Thuy Anh</h1>
        <div className="hero__subtitle heading-hover">
          Lecturer in Graphic Design &amp; Visual Culture Researcher
        </div>
        <p className="hero__bio">
          I am a researcher and lecturer specializing in visual communication, multimedia design, and
          digital heritage. My research explores how Vietnamese visual culture is reinterpreted through
          digital media, multimedia storytelling, and virtual exhibitions. My teaching emphasizes project
          based learning, design thinking, and the integration of digital technologies, connecting creative
          practice with academic inquiry and professional development.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--outline-accent">View Work</a>
          <a href="#contact" className="btn btn--outline">Get in Touch</a>
        </div>
      </div>

      <div
        className="hero__spotlight"
        style={{
          background: `radial-gradient(820px circle at ${light.x}% ${light.y}%, rgba(255,214,140,0.45), rgba(211,152,88,0.16) 45%, transparent 68%)`,
        }}
      />
    </section>
  );
}
