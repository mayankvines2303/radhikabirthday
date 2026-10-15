import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ParticleHeart from './ParticleHeart'
import Typewriter from './Typewriter'
import RippleButton from './RippleButton'
import { Halo } from './Ambient'
import { screenMotion } from './motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Welcome({ onOpen, opening }) {
  // 0 = heading, 1 = typing, 2 = second line, 3 = button
  const reduced = usePrefersReducedMotion()
  const [phase, setPhase] = useState(reduced ? 3 : 0)

  useEffect(() => {
    if (phase !== 0) return undefined
    const t = setTimeout(() => setPhase((p) => Math.max(p, 1)), 1300)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== 2) return undefined
    const t = setTimeout(() => setPhase(3), 900)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <motion.main className="screen welcome" {...screenMotion}>
      <ParticleHeart />

      <motion.h1
        className="script-title"
        initial={{ opacity: 0, y: 18, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
      >
        Hey Cutie Patootie! ❤️
      </motion.h1>

      <p className="typed">
        <Typewriter
          text="I’m glad you opened this page 🥹💕"
          start={phase >= 1}
          onDone={() => setPhase((p) => Math.max(p, 2))}
        />
      </p>

      <div className="welcome-tail">
        <AnimatePresence>
          {phase >= 2 && (
            <motion.p
              key="line2"
              className="soft-line"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              I made a little something just for you…
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 160, damping: 14 }}
            >
              <Halo>
                <RippleButton big onClick={onOpen} disabled={opening} silent>
                  Open Your Surprise 💌
                </RippleButton>
              </Halo>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
