import { useRef, useState } from 'react'
import { sfx } from '../audio'

// Pill button with a material-style ripple, glow and click sound.
export default function RippleButton({
  variant = 'pink',
  big = false,
  silent = false,
  onClick,
  children,
  className = '',
  ...rest
}) {
  const [ripples, setRipples] = useState([])
  const idRef = useRef(0)

  function handleClick(e) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const keyboard = e.detail === 0
    const x = keyboard ? r.width / 2 : e.clientX - r.left
    const y = keyboard ? r.height / 2 : e.clientY - r.top
    const size = Math.max(r.width, r.height) * 2
    const id = ++idRef.current
    setRipples((p) => [...p, { id, x, y, size }])
    setTimeout(() => setRipples((p) => p.filter((i) => i.id !== id)), 700)
    if (!silent) sfx.pop()
    onClick?.(e)
  }

  return (
    <button
      type="button"
      className={`btn btn-${variant} ${big ? 'btn-big' : ''} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      <span className="btn-label">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x - r.size / 2, top: r.y - r.size / 2, width: r.size, height: r.size }}
        />
      ))}
    </button>
  )
}
