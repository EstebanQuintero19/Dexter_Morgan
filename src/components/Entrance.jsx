import { useEffect, useRef, useState } from 'react'
import './Entrance.css'

// The plastic sheet. Drag across the screen to cut it; the two halves peel apart along the cut.
export default function Entrance({ onOpen }) {
  const ref = useRef(null)
  const pts = useRef([])
  const cutting = useRef(false)
  const lastDrip = useRef(0)
  const [d, setD] = useState('')
  const [drips, setDrips] = useState([])
  const [spatter, setSpatter] = useState([])
  const [clip, setClip] = useState(null)
  const [open, setOpen] = useState(false)
  const [shake, setShake] = useState(0)

  function finish() {
    const p = pts.current
    if (p.length > 1) {
      if (p[0][0] > p.at(-1)[0]) p.reverse()
      const y0 = p[0][1], y1 = p.at(-1)[1]
      const line = p.map(q => `${q[0]}px ${q[1]}px`)
      setClip({
        top: `polygon(0 0,100% 0,100% ${y1}px,${line.slice().reverse().join(',')},0 ${y0}px)`,
        bottom: `polygon(0 ${y0}px,${line.join(',')},100% ${y1}px,100% 100%,0 100%)`,
      })
      const [ex, ey] = p.at(-1)
      setSpatter(Array.from({ length: 14 }, () => ({
        x: ex + (Math.random() - .3) * 90,
        y: ey + (Math.random() - .5) * 70,
        r: 1.5 + Math.random() * 4,
        k: .6 + Math.random() * .8,
      })))
    }
    setOpen(true)
    onOpen()
    setTimeout(() => { if (ref.current) ref.current.style.display = 'none' }, 1400)
  }

  const down = e => {
    if (e.target.tagName === 'BUTTON') return
    cutting.current = true
    pts.current = [[e.clientX, e.clientY]]
    ref.current.setPointerCapture(e.pointerId)
  }
  const move = e => {
    if (!cutting.current) return
    pts.current.push([e.clientX, e.clientY])
    setD('M' + pts.current.map(q => q.join(' ')).join(' L'))
    if (Math.abs(e.clientX - lastDrip.current) > 110 && Math.random() < .8) {
      lastDrip.current = e.clientX
      setDrips(s => [...s, { x: e.clientX, y: e.clientY, len: 20 + Math.random() * 80 }])
    }
  }
  const up = () => {
    if (!cutting.current) return
    cutting.current = false
    const p = pts.current
    if (Math.abs(p.at(-1)[0] - p[0][0]) < innerWidth * .5) {
      pts.current = []
      setD('')
      setDrips([])
      setShake(s => s + 1)
      return
    }
    finish()
  }

  useEffect(() => {
    const k = e => { if (e.key === 'Enter' && !open) { pts.current = []; finish() } }
    addEventListener('keydown', k)
    return () => removeEventListener('keydown', k)
  }, [open])

  return (
    <div id="entrance" ref={ref} className={open ? 'open' : ''} onPointerDown={down} onPointerMove={move} onPointerUp={up}>
      <div className="sheet top" style={clip ? { clipPath: clip.top } : undefined} />
      <div className="sheet bottom" style={clip ? { clipPath: clip.bottom } : undefined} />
      {drips.map((p, i) => (
        <span key={i} className="cut-drip" style={{ left: p.x, top: p.y, '--len': p.len + 'px' }} />
      ))}
      <svg className="cut" aria-hidden="true">
        <path className="cutline" d={d} />
        <path className="cutshine" d={d} />
        <g className="spatter">
          {spatter.map((s, i) => <ellipse key={i} cx={s.x} cy={s.y} rx={s.r} ry={s.r * s.k} />)}
        </g>
      </svg>
      <div key={shake} className={'hint' + (shake ? ' shake' : '')}>
        <strong>Cut the plastic to come in</strong>
        <span>Drag from one side of the screen to the other.</span>
        <button type="button" onClick={() => { pts.current = []; finish() }}>Come in without cutting</button>
      </div>
    </div>
  )
}
