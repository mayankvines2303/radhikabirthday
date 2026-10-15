import { toggleMusic, toggleSfx, useAudioState } from '../audio'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

export default function MusicControls() {
  const { playing, sfxOn, unlocked } = useAudioState()
  return (
    <div className="controls" data-audio-control>
      {!unlocked && <span className="music-hint">tap for music 🎶</span>}
      <button
        type="button"
        className={`icon-btn ${playing ? 'on' : ''}`}
        onClick={toggleMusic}
        aria-label={playing ? 'Pause music' : 'Play music'}
        aria-pressed={playing}
        title={playing ? 'Pause music' : 'Play music'}
        data-audio-control
      >
        {playing ? (
          <Icon>
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </Icon>
        ) : (
          <Icon>
            <path d="M7 4l13 8-13 8z" />
          </Icon>
        )}
      </button>
      <button
        type="button"
        className={`icon-btn ${sfxOn ? 'on' : ''}`}
        onClick={toggleSfx}
        aria-label={sfxOn ? 'Mute sound effects' : 'Unmute sound effects'}
        aria-pressed={sfxOn}
        title={sfxOn ? 'Mute sound effects' : 'Unmute sound effects'}
        data-audio-control
      >
        {sfxOn ? (
          <Icon>
            <path d="M11 5L6 9H2v6h4l5 4z" />
            <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" />
          </Icon>
        ) : (
          <Icon>
            <path d="M11 5L6 9H2v6h4l5 4z" />
            <path d="M22 9l-6 6M16 9l6 6" />
          </Icon>
        )}
      </button>
    </div>
  )
}
