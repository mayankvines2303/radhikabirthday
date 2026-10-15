import { useMemo } from 'react'

const rand = (a, b) => a + Math.random() * (b - a)

// Soft pastel background: gradient + drifting blobs + hearts rising forever.
export function Background() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        emoji: ['💗', '💖', '💕', '🤍', '💜', '✨'][i % 6],
        left: rand(2, 96),
        size: rand(12, 30),
        dur: rand(11, 22),
        delay: -rand(0, 22),
        sway: rand(-40, 40),
      })),
    [],
  )
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <div className="blob blob-a" aria-hidden="true" />
      <div className="blob blob-b" aria-hidden="true" />
      <div className="blob blob-c" aria-hidden="true" />
      <div className="float-hearts" aria-hidden="true">
        {hearts.map((h) => (
          <span
            key={h.id}
            style={{
              left: `${h.left}%`,
              fontSize: h.size,
              animationDuration: `${h.dur}s`,
              animationDelay: `${h.delay}s`,
              '--sway': `${h.sway}px`,
            }}
          >
            {h.emoji}
          </span>
        ))}
      </div>
    </>
  )
}

// Looping fall (tears / broken hearts / confetti). Negative delays start it already populated.
export function FallingLayer({ emojis, count = 14, min = 14, max = 30, slow = 1, className = '' }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: emojis[i % emojis.length],
        left: rand(0, 98),
        size: rand(min, max),
        dur: rand(5, 9) * slow,
        delay: -rand(0, 9),
        drift: rand(-50, 50),
        rot: rand(-200, 200),
      })),
    [emojis, count, min, max, slow],
  )
  return (
    <div className={`falling-layer ${className}`} aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          style={{
            left: `${it.left}%`,
            fontSize: it.size,
            animationDuration: `${it.dur}s`,
            animationDelay: `${it.delay}s`,
            '--drift': `${it.drift}px`,
            '--rot': `${it.rot}deg`,
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  )
}

// Twinkling stars placed on an ellipse around a card.
export function Sparkles({ count = 12 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2 + rand(-0.15, 0.15)
        return {
          id: i,
          emoji: ['✨', '⭐', '🌟', '💫'][i % 4],
          left: 50 + 58 * Math.cos(a),
          top: 50 + 60 * Math.sin(a),
          size: rand(16, 30),
          delay: -rand(0, 2),
          dur: rand(1.4, 2.4),
        }
      }),
    [count],
  )
  return (
    <div className="sparkles" aria-hidden="true">
      {items.map((s) => (
        <span
          key={s.id}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        >
          {s.emoji}
        </span>
      ))}
    </div>
  )
}

// Tiny hearts that float around a button.
export function Halo({ children }) {
  return (
    <div className="halo">
      {children}
      <i style={{ '--d': '3.2s', top: '-14px', left: '8%' }}>💗</i>
      <i style={{ '--d': '4s', top: '-18px', right: '10%' }}>💕</i>
      <i style={{ '--d': '3.6s', bottom: '-14px', left: '18%' }}>💖</i>
      <i style={{ '--d': '4.4s', bottom: '-16px', right: '14%' }}>🤍</i>
    </div>
  )
}
