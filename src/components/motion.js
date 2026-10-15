// Shared page-transition settings used by every screen.
export const screenMotion = {
  initial: { opacity: 0, y: 26, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -22, scale: 1.04, transition: { duration: 0.35, ease: 'easeIn' } },
}

export const lineVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.35 + i * 0.5, duration: 0.7, ease: 'easeOut' } }),
}
