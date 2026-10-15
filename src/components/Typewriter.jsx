import { useEffect, useMemo, useRef, useState } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

// Types text one character at a time. Array.from keeps emoji (surrogate pairs) intact.
export default function Typewriter({ text, start = true, speed = 55, onDone, className = '' }) {
  const chars = useMemo(() => Array.from(text), [text])
  const reduced = usePrefersReducedMotion()
  const [n, setN] = useState(0)
  const doneRef = useRef(false)

  useEffect(() => {
    if (!start) return undefined
    if (reduced) {
      setN(chars.length)
      return undefined
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setN(i)
      if (i >= chars.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [start, reduced, chars, speed])

  useEffect(() => {
    if (n > 0 && n >= chars.length && !doneRef.current) {
      doneRef.current = true
      onDone?.()
    }
  }, [n, chars.length, onDone])

  const finished = n >= chars.length
  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{chars.slice(0, n).join('')}</span>
      {!finished && <span className="caret" aria-hidden="true">|</span>}
    </span>
  )
}
