import { useEffect, useRef } from 'react'
import { IMG } from '../data/assets.js'
import './Hero.css'

export default function Hero() {
  const hall = useRef(null)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const walk = () => {
      raf = 0
      const k = Math.min(scrollY / innerHeight, 1)
      hall.current?.style.setProperty('--walk', k.toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(walk) }
    addEventListener('scroll', onScroll, { passive: true })
    walk()
    return () => { removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <header id="hero">
      <div className="hall" ref={hall} style={{ backgroundImage: `url("${IMG.hallway}")` }} aria-hidden="true" />
      <div className="frame">
        <h1>DEXTER</h1>
        <p className="tag">
          Tonight's the night. And it's going to happen again and again. It has to happen.
          <small>Miami. A hallway. Someone waiting at the end of it.</small>
        </p>
      </div>
    </header>
  )
}
