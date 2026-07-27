import DustParticles, { makeParticles } from './DustParticles';

const scrollDust = makeParticles(10, { posRange: [62, 84], vertical: 'top', verticalRange: [8, 48] });

// A page-wide ambient light + dust layer that stays fixed in the viewport,
// so the warm glow "carries down" as the user scrolls through every section.
export default function AmbientLight() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
        mixBlendMode: 'screen',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-6%',
          top: '-14%',
          width: '60vh',
          height: '60vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at 55% 30%, rgba(255,214,140,0.08) 0%, rgba(255,190,120,0.03) 45%, transparent 75%)',
          filter: 'blur(50px)',
        }}
      />
      <DustParticles particles={scrollDust} positioning="left" />
    </div>
  );
}
