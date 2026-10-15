// Tiny Web Audio engine: a synthesized romantic music-box tune + click sound effects.
// Nothing is downloaded, so there are no audio files to break after deployment.
// The AudioContext is only created after a real user gesture (browser autoplay rules).
import { useSyncExternalStore } from 'react'

const KEY = 'radhika-apology-prefs'

function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem(KEY) || '{}')
    return { musicOn: p.musicOn !== false, sfxOn: p.sfxOn !== false }
  } catch {
    return { musicOn: true, sfxOn: true }
  }
}

let state = { ...loadPrefs(), playing: false, unlocked: false }
const listeners = new Set()

function savePrefs() {
  try {
    localStorage.setItem(KEY, JSON.stringify({ musicOn: state.musicOn, sfxOn: state.sfxOn }))
  } catch {
    /* storage can be blocked (private mode) – preferences just won't persist */
  }
}

function setState(patch) {
  state = { ...state, ...patch }
  listeners.forEach((l) => l())
}

function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function useAudioState() {
  return useSyncExternalStore(subscribe, () => state)
}

/* ---------- context + buses ---------- */
let ctx = null
let master = null
let musicBus = null
let sfxBus = null

function makeImpulse(c) {
  const len = Math.floor(c.sampleRate * 2.4)
  const buf = c.createBuffer(2, len, c.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch)
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6)
  }
  return buf
}

function ensureCtx() {
  if (ctx) return ctx
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  ctx = new AC()
  master = ctx.createGain()
  master.gain.value = 0.9
  const comp = ctx.createDynamicsCompressor()
  master.connect(comp)
  comp.connect(ctx.destination)

  const reverbIn = ctx.createGain()
  const conv = ctx.createConvolver()
  conv.buffer = makeImpulse(ctx)
  const wet = ctx.createGain()
  wet.gain.value = 0.32
  reverbIn.connect(conv)
  conv.connect(wet)
  wet.connect(master)

  musicBus = ctx.createGain()
  musicBus.gain.value = 0
  musicBus.connect(master)
  musicBus.connect(reverbIn)

  sfxBus = ctx.createGain()
  sfxBus.gain.value = 0.7
  sfxBus.connect(master)
  sfxBus.connect(reverbIn)
  return ctx
}

/* ---------- note helpers ---------- */
const SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }
function noteMidi(name) {
  const m = /^([A-G])(#|b)?(\d)$/.exec(name)
  const acc = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0
  return (Number(m[3]) + 1) * 12 + SEMI[m[1]] + acc
}
const midiFreq = (m) => 440 * Math.pow(2, (m - 69) / 12)
const noteFreq = (name) => midiFreq(noteMidi(name))

function tone(dest, { freq, start, dur, type = 'sine', gain = 0.15, attack = 0.012, release = 0.4, lp }) {
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, start)
  g.gain.setValueAtTime(0.0001, start)
  g.gain.linearRampToValueAtTime(gain, start + attack)
  g.gain.exponentialRampToValueAtTime(0.0001, start + attack + dur + release)
  if (lp) {
    const f = ctx.createBiquadFilter()
    f.type = 'lowpass'
    f.frequency.value = lp
    o.connect(f)
    f.connect(g)
  } else {
    o.connect(g)
  }
  g.connect(dest)
  o.start(start)
  o.stop(start + attack + dur + release + 0.05)
}

function sweep(dest, { from, to, start, dur, type = 'sine', gain = 0.15 }) {
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  o.type = type
  o.frequency.setValueAtTime(from, start)
  o.frequency.exponentialRampToValueAtTime(to, start + dur)
  g.gain.setValueAtTime(0.0001, start)
  g.gain.linearRampToValueAtTime(gain, start + 0.012)
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur)
  o.connect(g)
  g.connect(dest)
  o.start(start)
  o.stop(start + dur + 0.05)
}

/* ---------- the tune: C – Am – F – G, music-box melody ---------- */
const BPM = 70
const EIGHTH = 60 / BPM / 2
const CHORDS = [
  ['C3', 'E3', 'G3'],
  ['A2', 'C3', 'E3'],
  ['F2', 'A2', 'C3'],
  ['G2', 'B2', 'D3'],
]
const ARP = [0, 1, 2, 3, 2, 1, 2, 1]
// [note, startBeat, lengthInBeats] for each of 8 bars
const MELODY = [
  [['E5', 0, 1.5], ['G5', 1.5, 0.5], ['E5', 2, 1], ['D5', 3, 1]],
  [['C5', 0, 1], ['E5', 1, 1], ['A5', 2, 1.5], ['G5', 3.5, 0.5]],
  [['A5', 0, 1.5], ['G5', 1.5, 0.5], ['F5', 2, 1], ['E5', 3, 1]],
  [['D5', 0, 1], ['E5', 1, 0.5], ['D5', 1.5, 0.5], ['B4', 2, 2]],
  [['G5', 0, 1], ['E5', 1, 1], ['C6', 2, 2]],
  [['B5', 0, 1], ['A5', 1, 1], ['E5', 2, 2]],
  [['F5', 0, 1], ['A5', 1, 1], ['C6', 2, 1], ['A5', 3, 1]],
  [['B5', 0, 1.5], ['D6', 1.5, 0.5], ['G5', 2, 2]],
]

let step = 0
let nextTime = 0
let timer = null

function scheduleStep(s, t) {
  const bar = Math.floor(s / 8) % 8
  const i = s % 8
  const mids = CHORDS[bar % 4].map(noteMidi)

  const idx = ARP[i]
  const am = idx === 3 ? mids[0] + 24 : mids[idx] + 12
  tone(musicBus, { freq: midiFreq(am), start: t, dur: EIGHTH * 1.3, type: 'triangle', gain: 0.06, release: 0.5, lp: 2600 })

  if (i === 0) {
    mids.forEach((m) =>
      tone(musicBus, { freq: midiFreq(m), start: t, dur: EIGHTH * 7, type: 'sine', gain: 0.045, attack: 0.35, release: 1.1 }),
    )
    tone(musicBus, { freq: midiFreq(mids[0] - 12), start: t, dur: EIGHTH * 3.5, type: 'sine', gain: 0.1, attack: 0.03, release: 0.6 })
  }
  if (i === 4) {
    tone(musicBus, { freq: midiFreq(mids[0] - 12), start: t, dur: EIGHTH * 3, type: 'sine', gain: 0.06, attack: 0.03, release: 0.5 })
  }

  MELODY[bar].forEach(([name, beat, beats]) => {
    if (Math.round(beat * 2) === i) {
      const f = noteFreq(name)
      const d = beats * EIGHTH * 2 * 0.9
      tone(musicBus, { freq: f, start: t, dur: d, type: 'sine', gain: 0.11, attack: 0.015, release: 0.9 })
      tone(musicBus, { freq: f * 2, start: t, dur: d * 0.5, type: 'sine', gain: 0.025, attack: 0.01, release: 0.5 })
    }
  })
}

function tick() {
  if (!ctx) return
  while (nextTime < ctx.currentTime + 0.8) {
    scheduleStep(step, nextTime)
    nextTime += EIGHTH
    step = (step + 1) % 64
  }
}

async function startMusic() {
  const c = ensureCtx()
  if (!c) return
  try {
    await c.resume()
  } catch {
    /* blocked – stay silent, the player can tap the music button */
  }
  if (c.state !== 'running') {
    setState({ playing: false })
    return
  }
  if (!timer) {
    nextTime = c.currentTime + 0.1
    timer = setInterval(tick, 150)
  }
  musicBus.gain.cancelScheduledValues(c.currentTime)
  musicBus.gain.setTargetAtTime(0.9, c.currentTime, 0.5)
  setState({ playing: true })
}

function stopMusic() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  if (ctx && musicBus) {
    musicBus.gain.cancelScheduledValues(ctx.currentTime)
    musicBus.gain.setTargetAtTime(0, ctx.currentTime, 0.12)
  }
  setState({ playing: false })
}

/* ---------- public controls ---------- */
export function unlock() {
  ensureCtx()
  if (!state.unlocked) setState({ unlocked: true })
  if (state.musicOn && !state.playing) startMusic()
  else if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {})
}

export function toggleMusic() {
  ensureCtx()
  if (!state.unlocked) setState({ unlocked: true })
  if (state.playing) {
    setState({ musicOn: false })
    stopMusic()
  } else {
    setState({ musicOn: true })
    startMusic()
  }
  savePrefs()
}

export function toggleSfx() {
  ensureCtx()
  if (!state.unlocked) setState({ unlocked: true })
  setState({ sfxOn: !state.sfxOn })
  savePrefs()
  if (state.sfxOn) sfx.pop()
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (!ctx) return
    if (document.hidden) ctx.suspend().catch(() => {})
    else if (state.unlocked) ctx.resume().catch(() => {})
  })
}

/* ---------- sound effects ---------- */
function ready() {
  return state.sfxOn && ctx && ctx.state === 'running'
}

export const sfx = {
  pop() {
    if (!ready()) return
    const t = ctx.currentTime
    sweep(sfxBus, { from: 520, to: 900, start: t, dur: 0.09, gain: 0.16 })
  },
  sparkle() {
    if (!ready()) return
    const t = ctx.currentTime
    ;['E6', 'G6', 'B6', 'E7'].forEach((n, i) =>
      tone(sfxBus, { freq: noteFreq(n), start: t + i * 0.07, dur: 0.1, type: 'triangle', gain: 0.07, release: 0.35 }),
    )
  },
  happy() {
    if (!ready()) return
    const t = ctx.currentTime
    ;['C5', 'E5', 'G5', 'C6', 'E6'].forEach((n, i) =>
      tone(sfxBus, { freq: noteFreq(n), start: t + i * 0.08, dur: 0.18, type: 'triangle', gain: 0.09, release: 0.5 }),
    )
  },
  sad() {
    if (!ready()) return
    const t = ctx.currentTime
    sweep(sfxBus, { from: 420, to: 300, start: t, dur: 0.35, type: 'triangle', gain: 0.12 })
    sweep(sfxBus, { from: 330, to: 200, start: t + 0.38, dur: 0.5, type: 'triangle', gain: 0.12 })
  },
  hug() {
    if (!ready()) return
    const t = ctx.currentTime
    ;['C4', 'E4', 'G4', 'C5'].forEach((n, i) =>
      tone(sfxBus, { freq: noteFreq(n), start: t + i * 0.12, dur: 0.9, type: 'sine', gain: 0.07, attack: 0.15, release: 1.0 }),
    )
  },
  kiss() {
    if (!ready()) return
    const t = ctx.currentTime
    sweep(sfxBus, { from: 900, to: 1700, start: t, dur: 0.06, gain: 0.14 })
    sweep(sfxBus, { from: 1300, to: 650, start: t + 0.07, dur: 0.09, gain: 0.12 })
  },
}
