import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Background } from './components/Ambient'
import Welcome from './components/Welcome'
import Apology from './components/Apology'
import SadScreen from './components/SadScreen'
import HappyScreen from './components/HappyScreen'
import Overlay from './components/Overlay'
import MusicControls from './components/MusicControls'
import { useFX } from './fx'
import { sfx, unlock } from './audio'

const BURST_OPEN = ['💖', '💗', '💕', '❤️', '💘', '💝', '✨']
const BURST_YAY = ['💖', '💗', '💕', '💘', '🩷', '✨']

function centerOf(e) {
  const r = e?.currentTarget?.getBoundingClientRect?.()
  return r
    ? { x: r.left + r.width / 2, y: r.top + r.height / 2 }
    : { x: window.innerWidth / 2, y: window.innerHeight / 2 }
}

export default function App() {
  const fx = useFX()
  const [screen, setScreen] = useState('welcome') // welcome | apology | sad | happy
  const [overlay, setOverlay] = useState(null) // null | 'hug' | 'kiss'
  const [opening, setOpening] = useState(false)
  const [runKey, setRunKey] = useState(0)
  const openTimer = useRef(null)

  // Music may only start after a real user gesture. Ignore taps on the audio buttons
  // themselves – those handle their own state.
  useEffect(() => {
    const onGesture = (e) => {
      if (e.target instanceof Element && e.target.closest('[data-audio-control]')) return
      unlock()
    }
    const events = ['pointerdown', 'keydown']
    events.forEach((ev) => window.addEventListener(ev, onGesture, { passive: true }))
    return () => events.forEach((ev) => window.removeEventListener(ev, onGesture))
  }, [])

  useEffect(() => () => clearTimeout(openTimer.current), [])

  // every screen starts at the top (mobile scroll position)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen])

  const openSurprise = useCallback(
    (e) => {
      if (opening) return
      setOpening(true)
      sfx.sparkle()
      fx.burst(centerOf(e), BURST_OPEN, 40)
      openTimer.current = setTimeout(() => {
        setScreen('apology')
        setOpening(false)
      }, 750)
    },
    [fx, opening],
  )

  const forgive = useCallback(
    (e) => {
      sfx.happy()
      fx.burst(centerOf(e), BURST_YAY, 34)
      setScreen('happy')
    },
    [fx],
  )

  const refuse = useCallback(() => {
    sfx.sad()
    setScreen('sad')
  }, [])

  const tryAgain = useCallback(() => setScreen('apology'), [])

  const replay = useCallback(() => {
    fx.clear()
    clearTimeout(openTimer.current)
    setOverlay(null)
    setOpening(false)
    setRunKey((k) => k + 1)
    setScreen('welcome')
  }, [fx])

  const closeOverlay = useCallback(() => setOverlay(null), [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Background />
        <MusicControls />

        <AnimatePresence mode="wait">
          {screen === 'welcome' && <Welcome key={`welcome-${runKey}`} onOpen={openSurprise} opening={opening} />}
          {screen === 'apology' && <Apology key="apology" onForgive={forgive} onRefuse={refuse} />}
          {screen === 'sad' && <SadScreen key="sad" onForgive={forgive} onTryAgain={tryAgain} />}
          {screen === 'happy' && (
            <HappyScreen
              key="happy"
              onHug={() => setOverlay('hug')}
              onKiss={() => setOverlay('kiss')}
              onReplay={replay}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {overlay && <Overlay key={overlay} type={overlay} onClose={closeOverlay} />}
        </AnimatePresence>

        <footer className="footer">Made with love by Mayank ❤️</footer>
      </div>
    </MotionConfig>
  )
}
