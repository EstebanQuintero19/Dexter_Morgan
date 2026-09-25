import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const once = { once: true, margin: '-12% 0px' }
const ease = [0.16, 1, 0.3, 1]

// Título que sube desde detrás de una línea, como algo que sale del agua.
export function Title({ children }) {
  return (
    <motion.h2
      initial={{ clipPath: 'inset(0 0 100% 0)', y: '0.4em' }}
      whileInView={{ clipPath: 'inset(0 0 -10% 0)', y: 0 }}
      viewport={once} transition={{ duration: 1, ease }}>
      {children}
    </motion.h2>
  )
}

// Regla de una lista que aparece de una en una (el <motion.ol> padre lleva el stagger).
export function Rule({ children, ...props }) {
  return (
    <motion.li {...props}
      variants={{ off: { opacity: 0, x: -14 }, on: { opacity: 1, x: 0 } }}
      transition={{ duration: 0.6, ease }}>
      {children}
    </motion.li>
  )
}

// Nota o foto que se pega a la pared: cae, gira hasta su inclinación y se queda.
export function Pinned({ as = 'div', tilt = 0, dy = 0, i = 0, ...props }) {
  const M = motion[as]
  return (
    <M {...props}
      initial={{ opacity: 0, y: -28, rotate: tilt * -2 }}
      whileInView={{ opacity: 1, y: dy, rotate: tilt }}
      viewport={once}
      transition={{ type: 'spring', stiffness: 170, damping: 15, delay: i * 0.07 }} />
  )
}

// Un clic deja una salpicadura donde cae el cuchillo. Se seca y desaparece.
export function Splatter({ src }) {
  const [drops, setDrops] = useState([])
  useEffect(() => {
    const hit = e => {
      if (e.target.closest('a, button, [tabindex], input, label, #entrance')) return
      const d = { k: e.timeStamp, x: e.clientX, y: e.clientY + scrollY, r: Math.random() * 360, s: 0.6 + Math.random() * 0.9 }
      setDrops(ds => [...ds.slice(-11), d])
    }
    addEventListener('pointerdown', hit)
    return () => removeEventListener('pointerdown', hit)
  }, [])
  return (
    <div className="splatter" aria-hidden="true">
      <AnimatePresence>
        {drops.map(d => (
          <motion.img key={d.k} src={src} alt=""
            style={{ left: d.x, top: d.y, rotate: d.r }}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: [0.2, d.s * 1.15, d.s], opacity: [0, 1, 1, 0], filter: ['saturate(1.3)', 'saturate(1.3)', 'saturate(.5) brightness(.5)', 'saturate(.5) brightness(.5)'] }}
            transition={{ duration: 7, times: [0, 0.02, 0.6, 1], ease: 'easeOut' }}
            onAnimationComplete={() => setDrops(ds => ds.filter(x => x.k !== d.k))} />
        ))}
      </AnimatePresence>
    </div>
  )
}

// Gotas que cuelgan del título y crecen despacio (en em: escalan con la letra).
const DRIPS = [[7.5, 0.12, 0], [24, 0.22, 1.4], [41, 0.08, 0.6], [57.5, 0.26, 2.2], [74, 0.15, 0.9], [91, 0.1, 1.8]]
export function Drips() {
  return (
    <span className="drips" aria-hidden="true">
      {DRIPS.map(([x, len, delay]) => (
        <i key={x} style={{ left: `${x}%`, '--len': `${len}em`, animationDelay: `${delay}s` }} />
      ))}
    </span>
  )
}

// Texto que se enciende palabra a palabra con el scroll.
// Interpola con función: framer acelera los rangos de opacidad con ScrollTimeline nativa y,
// pasado el rango, el valor volvería al inicial.
export function ScrollWords({ text, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => <Word key={i} p={scrollYProgress} a={i / words.length} b={(i + 1) / words.length}>{w}</Word>)}
    </p>
  )
}
function Word({ children, p, a, b }) {
  const k = useTransform(p, v => Math.min(1, Math.max(0, (v - a) / (b - a))))
  const opacity = useTransform(k, v => 0.12 + 0.88 * v)
  const color = useTransform(k, v => (v > 0.99 ? 'var(--bone)' : 'var(--blood)'))
  return <><motion.span style={{ opacity, color }}>{children}</motion.span>{' '}</>
}
