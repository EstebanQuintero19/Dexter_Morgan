import { Title } from './Motion.jsx'
import { useState } from 'react'
import { IMG } from '../data/assets.js'
import { KILLERS } from '../data/killers.js'
import './TrophyBox.css'

function Slot({ k, on, onEnter }) {
  return (
    <li className={(on ? 'on ' : '') + (k.empty ? 'empty' : '')} tabIndex={0}
        onMouseEnter={onEnter} onFocus={onEnter} onClick={onEnter}>
      <span className="slide">
        <span className="tag"><span>{k.label}</span><span>{k.date}</span></span>
        <span className={'drop' + (k.empty ? ' dry' : '')} />
      </span>
    </li>
  )
}

function Victim({ k, open }) {
  const [broken, setBroken] = useState(false)
  if (!k) {
    return <div className="idle">{open ? 'Eight slides. Eight seasons. Pass your hand over one.' : 'The lid is closed. Nobody has opened it but him.'}</div>
  }
  return (
    <div className="card">
      <div className="pic">
        {broken
          ? <div className="none">{k.name}</div>
          : <img src={k.img} alt={k.name} onError={() => setBroken(true)} />}
      </div>
      <h3>{k.name}</h3>
      <p className="role">Season {k.s}. {k.role}</p>
      <blockquote>"{k.quote}"<cite>{k.who}</cite></blockquote>
      <p className="end">{k.end}</p>
    </div>
  )
}

export default function TrophyBox() {
  const [open, setOpen] = useState(false)
  const [cur, setCur] = useState(null)
  const toggle = () => setOpen(o => !o)

  return (
    <section id="box" style={{ backgroundImage: `url("${IMG.slideBg}")` }}>
      <div className="frame">
        <Title>The box</Title>
        <p className="sub">Behind the air conditioner. One drop for each. Open it, and hover a slide.</p>
        <div className="boxwrap">
          <div className="scene">
            <div className={'wood' + (open ? ' open' : '')}>
              <div className="lid" role="button" tabIndex={0} aria-expanded={open}
                   aria-label={open ? 'Close the box' : 'Open the box'}
                   onClick={toggle}
                   onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }}>
                <span className="hinge l" /><span className="hinge r" />
                <span className="plate">EVIDENCE</span>
              </div>
              <span className="lamp" aria-hidden="true" />
              <ul className="slots">
                {KILLERS.map((k, i) => (
                  <Slot key={k.s} k={k} on={cur === i} onEnter={() => open && setCur(i)} />
                ))}
              </ul>
            </div>
          </div>
          <div className="victim">
            <Victim key={cur} k={cur != null ? KILLERS[cur] : null} open={open} />
          </div>
        </div>
      </div>
    </section>
  )
}
