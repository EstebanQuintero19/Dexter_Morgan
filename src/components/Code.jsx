import { useEffect, useRef, useState } from 'react'
import { IMG } from '../data/assets.js'
import { motion } from 'framer-motion'
import { Rule, Title } from './Motion.jsx'
import './Code.css'

export default function Code() {
  const list = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: .6 })
    io.observe(list.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="code">
      <div className="frame">
        <Title>Harry's code</Title>
        <motion.ol ref={list} className={seen ? 'seen' : ''} initial="off" whileInView="on" viewport={{ once: true, margin: '-12% 0px' }} transition={{ staggerChildren: 0.12 }}>
          <Rule>Don't get caught. Everything else depends on this.</Rule>
          <Rule>Be sure. Never an innocent. Proof, not a feeling.</Rule>
          <Rule>Only those who have killed and will kill again.</Rule>
          <Rule>Leave nothing. Clean the room. <small className="aside">(He kept the slides anyway.)</small></Rule>
          <Rule>Blend in. Smile. Be the guy nobody looks at twice.</Rule>
          <Rule className="broken">
            <s>Don't get attached. No partner. No friends. No family.</s>
            <small>Broken: Rita, Harrison, Lumen, Hannah, Deb.</small>
          </Rule>
          <Rule>Control the need. Never on impulse. Always with a plan.</Rule>
        </motion.ol>
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
