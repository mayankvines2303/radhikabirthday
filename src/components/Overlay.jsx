import { useEffect } from 'react'
import { motion } from 'framer-motion'
import RippleButton from './RippleButton'
import { useFX } from '../fx'
import { sfx } from '../audio'

function Hug() {
  return (
    <>
      <div className="hug-stage">
        <motion.span
          className="hug-heart"
          initial={{ x: -150, opacity: 0, rotate: -25 }}
          animate={{ x: -8, opacity: 1, rotate: 10 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          💗
        </motion.span>
        <motion.span
          className="hug-heart"
          initial={{ x: 150, opacity: 0, rotate: 25 }}
          animate={{ x: 8, opacity: 1, rotate: -10 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          💜
        </motion.span>
        <motion.span
          className="hug-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.7, 1], opacity: [0, 1, 1] }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          🫂
        </motion.span>
      </div>
      <h2 className="script-title small">Virtual Hug Sent! 🫂</h2>
      <p className="overlay-text">Ek tight, warm jhappi — sirf tumhare liye, Mayank ki taraf se 🤗💗</p>
    </>
  )
}

function Kiss() {
  return (
    <>
      <motion.div
        className="kiss-big"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: [0, 1.4, 1], rotate: [-20, 10, 0] }}
        transition={{ duration: 0.8 }}
      >
        <span className="kiss-wobble">😚</span>
      </motion.div>
      <h2 className="script-title small">Mwahhhh! 😘💋</h2>
      <p className="overlay-text">Ek nahi, poore sau — ginti mat karna, bas lete jao 🥰💗</p>
    </>
  )
}

export default function Overlay({ type, onClose }) {
  const fx = useFX()

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)

    const cx = window.innerWidth / 2
    const cy = window.innerHeight * 0.42
    const timers = []
    if (type === 'hug') {
      sfx.hug()
      timers.push(
        setTimeout(() => fx.burst({ x: cx, y: cy }, ['💗', '💜', '💞', '🫂', '✨'], 36), 1100),
      )
      fx.rise(['💗', '💜', '💞'], 14, 1600)
    } else {
      sfx.kiss()
      fx.burst({ x: cx, y: cy }, ['😘', '💋', '😚', '💗'], 30)
      fx.rise(['😘', '💋', '😚', '💗', '💕'], 36, 2000)
      timers.push(setTimeout(() => sfx.kiss(), 450), setTimeout(() => sfx.kiss(), 900))
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      timers.forEach(clearTimeout)
    }
  }, [type, fx, onClose])

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card overlay-card"
        role="dialog"
        aria-modal="true"
        aria-label={type === 'hug' ? 'Virtual hug' : 'Kiss'}
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        onClick={(e) => e.stopPropagation()}
      >
        {type === 'hug' ? <Hug /> : <Kiss />}
        <RippleButton variant="pink" onClick={onClose} autoFocus>
          Aww ❤️
        </RippleButton>
      </motion.div>
    </motion.div>
  )
}
