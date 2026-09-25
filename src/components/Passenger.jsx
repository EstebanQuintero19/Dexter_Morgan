import { IMG } from '../data/assets.js'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './Passenger.css'

const side = (from) => ({
  initial: { opacity: 0, x: from, filter: 'blur(8px)' },
  whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-15% 0px' },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
})

export default function Passenger() {
  const ref = useRef(null)
  // La figura sale de la oscuridad y se acerca mientras cruzas la sección.
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(p, [0, 0.5, 1], [0.8, 1.08, 1.2])
  const bright = useTransform(p, [0, 0.45, 0.8], [0.15, 1.1, 0.4])
  const filter = useTransform(bright, b => `contrast(1.15) brightness(${b})`)
  return (
    <section id="passenger" ref={ref}>
      <div className="frame">
        <motion.blockquote className="q1" {...side(-80)}>I'm a very neat monster.</motion.blockquote>
        <motion.blockquote className="q2" {...side(80)}>People fake a lot of human interactions. I fake them all.</motion.blockquote>
        <motion.figure style={{ scale, filter }}>
          <img src={IMG.hands} alt="Dexter, gloved hands raised in front of his chest, lit from behind" />
        </motion.figure>
        <motion.blockquote className="q3" {...side(-80)}>The Dark Passenger doesn't leave. It just drives.</motion.blockquote>
        <motion.blockquote className="q4" {...side(80)}>
          Harry and Doris Morgan did a wonderful job raising me. But they're both dead now. I didn't kill them. Honest.
          <cite>Voice-over, season one</cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
