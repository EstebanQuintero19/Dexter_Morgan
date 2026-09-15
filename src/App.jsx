import { useEffect, useRef, useState } from 'react'
import { SECTIONS } from './data/killers.js'
import { SPLAT, KNIFE_SMALL } from './data/assets.js'
import BloodDefs from './components/BloodDefs.jsx'
import Entrance from './components/Entrance.jsx'
import SoundToggle from './components/SoundToggle.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Born from './components/Born.jsx'
import Code from './components/Code.jsx'
import Passenger from './components/Passenger.jsx'
import Room from './components/Room.jsx'
import TrophyBox from './components/TrophyBox.jsx'
import Cost from './components/Cost.jsx'
import Closing from './components/Closing.jsx'

export default function App() {
  const [active, setActive] = useState(null)
  const sound = useRef(null)

  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--splat', `url("${SPLAT}")`)
    root.setProperty('--knife', `url("${KNIFE_SMALL}") 1 1, auto`)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    SECTIONS.forEach(([id]) => io.observe(document.getElementById(id)))
    return () => io.disconnect()
  }, [])

  function opened() {
    document.body.classList.remove('sealed')
    sound.current?.start()
  }

  return (
    <>
      <BloodDefs />
      <Entrance onOpen={opened} />
      <SoundToggle ref={sound} />
      <Nav active={active} />
      <Hero />
      <Born />
      <Code />
      <Passenger />
      <Room />
      <TrophyBox />
      <Cost />
      <Closing />
    </>
  )
}
