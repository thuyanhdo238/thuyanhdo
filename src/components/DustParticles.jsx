// Small ambient floating gold particles, reused in two places (a subtle
// cluster inside the Hero, and a fixed page-wide layer). Purely decorative —
// pointer-events are always off.
export default function DustParticles({ particles, positioning = 'left' }) {
  return particles.map((p, i) => (
    <div
      key={i}
      style={{
        position: 'absolute',
        [positioning]: `${p.pos}%`,
        [p.vertical]: `${p.verticalPos}%`,
        width: p.size,
        height: p.size,
        borderRadius: '50%',
        background: 'var(--color-accent-700)',
        boxShadow: '0 0 6px 1px rgba(255,214,140,0.8)',
        animation: `dustFloat ${p.duration}s linear infinite`,
        animationDelay: `${p.delay}s`,
        pointerEvents: 'none',
      }}
    />
  ));
}

// Deterministic pseudo-random particle generator so groups look organic
// without needing Math.random() (keeps re-renders stable).
export function makeParticles(count, { posRange = [10, 45], verticalRange = [20, 75], vertical = 'bottom' } = {}) {
  return Array.from({ length: count }, (_, i) => ({
    pos: posRange[0] + ((i * 13) % (posRange[1] - posRange[0])),
    vertical,
    verticalPos: verticalRange[0] + ((i * 11) % (verticalRange[1] - verticalRange[0])),
    size: 2 + (i % 3),
    delay: (i * 0.35) % 5,
    duration: 4 + (i % 4),
  }));
}
