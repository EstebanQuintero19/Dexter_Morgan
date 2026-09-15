import { useEffect, useRef, useState } from 'react'
import { IMG } from '../data/assets.js'
import './Code.css'

export default function Code() {
  const list = useRef(null)
  const [seen, setSeen] = useState(false)

  // the broken rule gets crossed out in front of you, once, when the sheet comes into view
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: .6 })
    io.observe(list.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="code">
      <div className="frame">
        <h2>Harry's code</h2>
        <ol ref={list} className={seen ? 'seen' : ''}>
          <li>Don't get caught. Everything else depends on this.</li>
          <li>Be sure. Never an innocent. Proof, not a feeling.</li>
          <li>Only those who have killed and will kill again.</li>
          <li>Leave nothing. Clean the room. <small className="aside">(He kept the slides anyway.)</small></li>
          <li>Blend in. Smile. Be the guy nobody looks at twice.</li>
          <li className="broken">
            <s>Don't get attached. No partner. No friends. No family.</s>
            <small>Broken: Rita, Harrison, Lumen, Hannah, Deb.</small>
          </li>
          <li>Control the need. Never on impulse. Always with a plan.</li>
        </ol>
        <figure>
          <img src={IMG.suit} alt="Dexter in a suit, looking upward, high-contrast grain" />
        </figure>
        <p className="ghost">
          Harry shot himself in 1990, three years after he walked in on his son at work. The ghost stayed.{' '}
          <b>"You can't be both, Dexter."</b> He never told the boy which one to pick.
        </p>
      </div>
    </section>
  )
}
