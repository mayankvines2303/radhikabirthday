import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const COLORS = [
  [255, 105, 160],
  [255, 150, 190],
  [255, 190, 215],
  [200, 160, 255],
  [255, 225, 238],
]

function heartPoint(t) {
  return {
    x: (16 * Math.sin(t) ** 3) / 17,
    y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17,
  }
}

function makeSprite(rgb) {
  const c = document.createElement('canvas')
  c.width = c.height = 32
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16)
  grad.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},1)`)
  grad.addColorStop(0.35, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.55)`)
  grad.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`)
  g.fillStyle = grad
  g.fillRect(0, 0, 32, 32)
  return c
}

function buildParticles() {
  const out = []
  // outline particles are bigger and brighter; fill particles are small, soft dots
  const push = (t, f, outline) => {
    const p = heartPoint(t)
    const a = Math.random() * Math.PI * 2
    const r = 1.1 + Math.random() * 0.9
    out.push({
      tx: p.x * f,
      ty: p.y * f,
      sx: Math.cos(a) * r,
      sy: Math.sin(a) * r,
      delay: Math.random() * 0.9,
      dur: 1.3 + Math.random() * 0.8,
      r: outline ? 3 + Math.random() * 2.4 : 1.8 + Math.random() * 2,
      base: outline ? 1 : 0.62,
      c: Math.floor(Math.random() * COLORS.length),
      ph: Math.random() * Math.PI * 2,
    })
  }
  for (let i = 0; i < 300; i++) push((i / 300) * Math.PI * 2, 1, true)
  ;[0.88, 0.74, 0.6, 0.46, 0.32, 0.18].forEach((f) => {
    const n = Math.floor(190 * f)
    for (let i = 0; i < n; i++) push((i / n) * Math.PI * 2 + f * 3, f, false)
  })
  return out
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const FORM_TIME = 2.7

export default function ParticleHeart() {
  const canvasRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const sprites = COLORS.map(makeSprite)
    const parts = buildParticles()
    let raf = 0
    let size = 0
    const start = performance.now()

    function resize() {
      size = Math.min(window.innerWidth * 0.7, 290)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      canvas.width = Math.round(size * dpr)
      canvas.height = Math.round(size * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw(now) {
      const e = reduced ? 99 : (now - start) / 1000
      ctx.clearRect(0, 0, size, size)
      ctx.globalCompositeOperation = 'source-over'
      const half = size / 2
      const unit = size * 0.46

      let beat = 1
      if (!reduced && e > FORM_TIME) {
        const ph = ((e - FORM_TIME) % 1.3) / 1.3
        const pulse = Math.exp(-(((ph - 0.08) / 0.05) ** 2)) + 0.7 * Math.exp(-(((ph - 0.28) / 0.06) ** 2))
        beat = 1 + 0.07 * pulse
      }

      for (const p of parts) {
        const k = reduced ? 1 : clamp((e - p.delay) / p.dur, 0, 1)
        const ease = 1 - (1 - k) ** 3
        let x = p.sx + (p.tx - p.sx) * ease
        let y = p.sy + (p.ty - p.sy) * ease
        let alpha = (0.25 + 0.75 * ease) * p.base
        if (!reduced && k >= 1) {
          x += Math.sin(e * 1.6 + p.ph) * 0.012
          y += Math.cos(e * 1.3 + p.ph) * 0.012
          alpha = p.base * (0.72 + 0.28 * Math.sin(e * 2.2 + p.ph))
        }
        const px = half + x * unit * beat
        const py = half + 0.04 * unit + y * unit * beat
        const r = p.r * (size / 290) * 2.2
        ctx.globalAlpha = clamp(alpha, 0.1, 1)
        ctx.drawImage(sprites[p.c], px - r, py - r, r * 2, r * 2)
      }
      ctx.globalAlpha = 1
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    const onResize = () => {
      resize()
      if (reduced) draw(performance.now())
    }
    window.addEventListener('resize', onResize)
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [reduced])

  return (
    <div className="heart-wrap" aria-hidden="true">
      <div className="heart-aura" />
      <canvas ref={canvasRef} className="heart-canvas" />
    </div>
  )
}
