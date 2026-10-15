// Global "effects layer": emoji bursts, falling rain and rising kisses that
// float above every screen and survive screen transitions.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { reducedNow } from './hooks/usePrefersReducedMotion'

const FXContext = createContext(null)
export const useFX = () => useContext(FXContext)

let uid = 0
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export function FXProvider({ children }) {
  const [items, setItems] = useState([])
  const timers = useRef(new Set())

  useEffect(() => {
    const set = timers.current
    return () => set.forEach(clearTimeout)
  }, [])

  const add = useCallback((list, ttl) => {
    setItems((prev) => [...prev, ...list].slice(-280))
    const t = setTimeout(() => {
      setItems((prev) => prev.filter((i) => !list.includes(i)))
      timers.current.delete(t)
    }, ttl)
    timers.current.add(t)
  }, [])

  const api = useMemo(
    () => ({
      // radial explosion from a point on screen
      burst({ x, y }, emojis, count = 28) {
        const n = reducedNow() ? Math.min(count, 8) : count
        const list = Array.from({ length: n }, () => {
          const a = Math.random() * Math.PI * 2
          const d = 90 + Math.random() * 230
          return {
            id: ++uid,
            kind: 'burst',
            x,
            y,
            emoji: pick(emojis),
            dx: Math.cos(a) * d,
            dy: Math.sin(a) * d - 70,
            rot: (Math.random() - 0.5) * 540,
            size: 18 + Math.random() * 26,
            dur: 900 + Math.random() * 800,
            delay: Math.random() * 120,
          }
        })
        add(list, 2100)
      },
      // confetti-style fall from the top of the screen
      rain(emojis, count = 30, stagger = 1800) {
        const n = reducedNow() ? Math.min(count, 8) : count
        const list = Array.from({ length: n }, () => ({
          id: ++uid,
          kind: 'rain',
          left: Math.random() * 100,
          emoji: pick(emojis),
          size: 16 + Math.random() * 24,
          dur: 2800 + Math.random() * 2400,
          delay: Math.random() * stagger,
          drift: (Math.random() - 0.5) * 140,
          rot: (Math.random() - 0.5) * 540,
        }))
        add(list, stagger + 5400)
      },
      // floating up from the bottom of the screen
      rise(emojis, count = 24, stagger = 1400) {
        const n = reducedNow() ? Math.min(count, 8) : count
        const list = Array.from({ length: n }, () => ({
          id: ++uid,
          kind: 'rise',
          left: 4 + Math.random() * 92,
          emoji: pick(emojis),
          size: 20 + Math.random() * 30,
          dur: 2600 + Math.random() * 2000,
          delay: Math.random() * stagger,
          drift: (Math.random() - 0.5) * 120,
          rot: (Math.random() - 0.5) * 60,
        }))
        add(list, stagger + 4800)
      },
      clear() {
        setItems([])
      },
    }),
    [add],
  )

  return (
    <FXContext.Provider value={api}>
      {children}
      <div className="fx-layer" aria-hidden="true">
        {items.map((i) =>
          i.kind === 'burst' ? (
            <span
              key={i.id}
              className="fx-burst"
              style={{
                left: i.x,
                top: i.y,
                fontSize: i.size,
                '--dx': `${i.dx}px`,
                '--dy': `${i.dy}px`,
                '--rot': `${i.rot}deg`,
                animationDuration: `${i.dur}ms`,
                animationDelay: `${i.delay}ms`,
              }}
            >
              {i.emoji}
            </span>
          ) : (
            <span
              key={i.id}
              className={i.kind === 'rain' ? 'fx-rain' : 'fx-rise'}
              style={{
                left: `${i.left}%`,
                fontSize: i.size,
                '--drift': `${i.drift}px`,
                '--rot': `${i.rot}deg`,
                animationDuration: `${i.dur}ms`,
                animationDelay: `${i.delay}ms`,
              }}
            >
              {i.emoji}
            </span>
          ),
        )}
      </div>
    </FXContext.Provider>
  )
}
