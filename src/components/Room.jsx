import { IMG } from '../data/assets.js'
import { KILLERS } from '../data/killers.js'
import { Pinned, Title } from './Motion.jsx'
import './Room.css'

const STEPS = [
  ['Plastic', 'Walls, floor, table. Nothing touches anything.'],
  ['The photographs', "The guest's victims, taped where they have to look at them.", 'pinned'],
  ['The waking', "M99 wears off. They're wrapped to the table. The question is always the same."],
  ['The drop', 'A cut on the cheek. One bead between two pieces of glass.'],
  ['The knife', 'Chest. Quick. He has never once called it mercy.'],
  ['The Gulf Stream', "Black bags. Weighted. The water off Bay Harbor keeps what he gives it. Until it didn't."],
]
const PINNED = [1, 4, 6, 8].map(s => KILLERS.find(k => k.s === s))

export default function Room() {
  return (
    <section id="room" style={{ backgroundImage: `url("${IMG.window}")` }}>
      <div className="frame">
        <div>
          <Title>The room</Title>
          <p className="sub">The place changes. The order never does.</p>
          <div className="steps">
            {STEPS.map(([title, text, extra], i) => (
              <Pinned className={'note' + (extra ? ' ' + extra : '')} key={title} i={i}
                   tilt={(i % 2 ? 1 : -1) * (1 + (i % 3) * .6)}
                   style={extra === 'pinned' ? { backgroundImage: `url("${IMG.wall}")` } : undefined}>
                <b>{title}</b>
                {text}
                {extra === 'pinned' && (
                  <div className="wall">
                    {PINNED.map((k, j) => (
                      <img key={k.s} src={k.img} alt={k.name} style={{ '--tilt': `${(j % 2 ? -1 : 1) * (2 + j)}deg` }} />
                    ))}
                  </div>
                )}
              </Pinned>
            ))}
          </div>
        </div>
        <div className="evidence">
          <Pinned as="figure" className="photo wide" tilt={-1} i={1}>
            <img src={IMG.table} alt="The table, wrapped in plastic, under two work lights" />
            <figcaption>Exhibit 01 — the table</figcaption>
          </Pinned>
          <Pinned as="figure" className="photo" tilt={2} dy="1.5rem" i={2}>
            <img src={IMG.gloves} alt="Dexter in apron and latex gloves, adjusting a sleeve, knife in hand" />
            <figcaption>Exhibit 04 — gloves, apron</figcaption>
          </Pinned>
          <Pinned as="figure" className="photo" tilt={-2.5} i={3}>
            <img src={IMG.knife} alt="Dexter in shadow, knife raised, eyes down" />
            <figcaption>Exhibit 07 — instrument</figcaption>
          </Pinned>
        </div>
      </div>
    </section>
  )
}
