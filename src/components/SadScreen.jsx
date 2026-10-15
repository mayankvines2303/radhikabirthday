import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import RippleButton from './RippleButton'
import { FallingLayer } from './Ambient'
import { screenMotion } from './motion'
import { useFX } from '../fx'
import { sfx } from '../audio'
import sadMonkey from '../assets/monkey-sad.png'

const SAD_FALL = ['💔', '😭', '💧', '🥺', '💧', '💔']
const CARD_TEARS = ['💧', '😭', '💧']
const BUBBLES = ['huhuhu 😭', 'sniff sniff 🥺', 'plsss 🥹', 'maaf kar do 💔']

export default function SadScreen({ onForgive, onTryAgain }) {
  const fx = useFX()
  const [meltdown, setMeltdown] = useState(0) // how many times "Still Nahi" was pressed
  const [bubble, setBubble] = useState(0)

  useEffect(() => {
    fx.rain(['💧', '😭', '💔', '💧'], 22, 2200)
    const t = setInterval(() => setBubble((b) => (b + 1) % BUBBLES.length), 2200)
    return () => clearInterval(t)
  }, [fx])

  function stillNo() {
    setMeltdown((m) => m + 1)
    sfx.sad()
    fx.rain(['😭', '💧', '💔', '😢', '💧', '🥲'], 70, 2600)
  }

  return (
    <motion.main className="screen sad" {...screenMotion}>
      <FallingLayer emojis={SAD_FALL} count={16} min={16} max={30} className="fixed-fall" />

      <motion.h1
        className="meme-title"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
      >
        <span className="tremble">MAYANK IS CRYING 😭💔</span>
      </motion.h1>

      {/* key restarts the shake each time "Still Nahi" is pressed */}
      <div key={meltdown} className={`shake-wrap ${meltdown ? 'mega-shake' : 'shake-once'}`}>
        <motion.div
          className={`glass-card monkey-card ${meltdown ? 'mega' : ''}`}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: meltdown ? [1, 1.1, 1.05] : [0.6, 1.1, 1], opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img className="monkey-img sad-img sob" src={sadMonkey} alt="Mayank as a crying little monkey" draggable="false" />
          <FallingLayer emojis={CARD_TEARS} count={9} min={14} max={22} slow={0.6} className="card-tears" />
          <span key={bubble} className="bubble">{BUBBLES[bubble]}</span>
        </motion.div>
      </div>

      <div className="sad-text">
        <AnimatePresence mode="wait">
          {meltdown === 0 ? (
            <motion.div key="plea" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.5 }}>
              <p>Areyyy Cutie Patootie 😭</p>
              <p>Ab toh maaf kar do yaar…</p>
              <p>Dekho mera kya haal kar diya! 🥹</p>
            </motion.div>
          ) : (
            <motion.div key={`broken-${meltdown}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 12 }}>
              <p className="broken">Mayank ka toh dil hi toot gaya 💔😭</p>
              <p className="tiny">(thoda drama kar raha hoon — no pressure, jaan. Tum apna time lo 🫶)</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="btn-row stack-sm">
        <RippleButton variant="pink" onClick={onForgive} silent>
          Achha Baba, Maaf Kiya ❤️
        </RippleButton>
        <RippleButton variant="lav" onClick={stillNo} silent>
          Still Nahi 😈
        </RippleButton>
        <RippleButton variant="white" onClick={onTryAgain}>
          Try Again 🥺
        </RippleButton>
      </div>
    </motion.main>
  )
}
