import { motion } from 'framer-motion'
import RippleButton from './RippleButton'
import { Halo } from './Ambient'
import { lineVariants, screenMotion } from './motion'

const LINES = [
  'Mayank se thodi si galti ho gayi…',
  'Ab itna bhi gussa mat ho na, meri jaan.',
  'Mujhe maaf kar do please? 🥺💗',
]

export default function Apology({ onForgive, onRefuse }) {
  return (
    <motion.main className="screen apology" {...screenMotion}>
      <motion.div className="glass-card message-card" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 140, damping: 14 }}>
        <motion.h1
          className="script-title"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Sorry Cutie Patootie 🥹❤️
        </motion.h1>

        <div className="message">
          {LINES.map((line, i) => (
            <motion.p key={line} custom={i} variants={lineVariants} initial="hidden" animate="show">
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="btn-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <Halo>
          <RippleButton variant="pink" big onClick={onForgive} silent>
            Maaf Kar Diya ❤️
          </RippleButton>
        </Halo>
        <Halo>
          <RippleButton variant="lav" big onClick={onRefuse} silent>
            Nahi Kiya 😤
          </RippleButton>
        </Halo>
      </motion.div>
    </motion.main>
  )
}
