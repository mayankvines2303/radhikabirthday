import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export const reducedNow = () =>
  typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(QUERY).matches

export default function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(reducedNow)

  useEffect(() => {
    if (!window.matchMedia) return undefined
    const mq = window.matchMedia(QUERY)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
