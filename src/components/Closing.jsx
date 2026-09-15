import { useEffect, useRef } from 'react'
import { IMG } from '../data/assets.js'
import './Closing.css'

export default function Closing() {
  const end = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => document.body.classList.toggle('end', e.isIntersecting), { threshold: .9 })
    io.observe(end.current)
    return () => { io.disconnect(); document.body.classList.remove('end') }
  }, [])

  return (
    <footer id="close" style={{ backgroundImage: `url("${IMG.halftone}")` }}>
      <div className="frame">
        <p>"I destroy everyone I love.<br />I can't let that happen to Harrison."</p>
        <small>He drove the boat into the hurricane and let them think it worked. Oregon. A beard. A lumber yard. A room with nothing in it. He looks up. He says nothing.</small>
      </div>
      <div className="end" ref={end} aria-hidden="true" />
      <div className="black" aria-hidden="true" />
    </footer>
  )
}
