import { useEffect } from 'react'
import { motion } from 'framer-motion'
import RippleButton from './RippleButton'
import { FallingLayer, Sparkles } from './Ambient'
import { lineVariants, screenMotion } from './motion'
import { useFX } from '../fx'
import happyMonkey from '../assets/monkey-happy.png'

const CONFETTI = ['💗', '💖', '💕', '🌸', '💝', '✨']
const BURST = ['💖', '💗', '💕', '💘', '❤️', '🩷', '✨', '🌟']

const LINES = [
  'YAYYYYY! 🥹❤️',
  'Meri Cutie Patootie ne maaf kar diya!',
  'Ab Mayank ki jaan mein jaan aayi 💗🫂',
]

export default function HappyScreen({ onHug, onKiss, onReplay }) {
  const fx = useFX()

  useEffect(() => {
    const t = setTimeout(() => {
      fx.burst({ x: window.innerWidth / 2, y: window.innerHeight * 0.38 }, BURST, 56)
      fx.rain(CONFETTI, 60, 2600)
    }, 250)
    return () => clearTimeout(t)
  }, [fx])

  return (
    <motion.main className="screen happy" {...screenMotion}>
      <FallingLayer emojis={CONFETTI} count={18} min={14} max={28} className="fixed-fall confetti" />

      <motion.h1
        className="meme-title"
        initial={{ opacity: 0, scale: 0.6, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 11 }}
      >
        MAYANK IS HAPPY 😭❤️
      </motion.h1>

      <div className="happy-stage">
        <svg className="glow-heart" viewBox="-1 -1 34 32" aria-hidden="true">
          <defs>
            <linearGradient id="gh" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff8fb8" />
              <stop offset="0.55" stopColor="#ff5c93" />
              <stop offset="1" stopColor="#c9a6ff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gh)"
            d="M23.6 0c-3.4 0-6.3 2.7-7.6 5.6C14.700 2.700 11.800 0 8.400 0 3.800 0 0 3.800 0 8.400c0 9.400 9.500 11.900 16 21.200 6.100-9.300 16-12.100 16-21.200C32 3.800 28.200 0 23.600 0z"
          />
        </svg>

        <motion.div
          className="glass-card monkey-card happy-card"
          initial={{ scale: 0.3, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.15 }}
        >
          <div className="bounce">
            <img className="monkey-img happy-img" src={happyMonkey} alt="Mayank as a happy, grinning monkey" draggable="false" />
          </div>
          <Sparkles count={12} />
        </motion.div>
      </div>

      <div className="message happy-message">
        {LINES.map((line, i) => (
          <motion.p key={line} custom={i} variants={lineVariants} initial="hidden" animate="show">
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="btn-row stack-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <RippleButton variant="pink" onClick={onHug} silent>
          Send a Virtual Hug 🫂
        </RippleButton>
        <RippleButton variant="lav" onClick={onKiss} silent>
          Ek Kiss Toh Banta Hai 😚
        </RippleButton>
        <RippleButton variant="white" onClick={onReplay}>
          Replay My Surprise 💌
        </RippleButton>
      </motion.div>

      <motion.p
        className="final-note glass-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.9 }}
      >
        No matter how silly I act sometimes, you mean a lot to me. ❤️
      </motion.p>
    </motion.main>
  )
}
