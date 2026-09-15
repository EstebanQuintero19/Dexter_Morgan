import { useImperativeHandle, useRef, useState, forwardRef } from 'react'
import { THEME } from '../data/assets.js'
import './SoundToggle.css'

const SoundToggle = forwardRef(function SoundToggle(_, ref) {
  const audio = useRef(null)
  const [on, setOn] = useState(false)

  function play() {
    const a = audio.current
    a.volume = .5
    a.play().then(() => setOn(true)).catch(() => {})
  }
  function toggle() {
    if (audio.current.paused) play()
    else { audio.current.pause(); setOn(false) }
  }
  useImperativeHandle(ref, () => ({ start: play }))

  return (
    <>
      <audio ref={audio} src={THEME} loop preload="auto" />
      <button className={'sound' + (on ? ' on' : '')} onClick={toggle} aria-pressed={on}>
        <i />{on ? 'Blood Theme — playing' : 'Blood Theme — muted'}
      </button>
    </>
  )
})

export default SoundToggle
