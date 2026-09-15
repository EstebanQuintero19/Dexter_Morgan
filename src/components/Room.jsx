import { IMG } from '../data/assets.js'
import './Room.css'

const STEPS = [
  ['Plastic', 'Walls, floor, table. Nothing touches anything.'],
  ['The photographs', "The guest's victims, taped where they have to look at them."],
  ['The waking', "M99 wears off. They're wrapped to the table. The question is always the same."],
  ['The drop', 'A cut on the cheek. One bead between two pieces of glass.'],
  ['The knife', 'Chest. Quick. He has never once called it mercy.'],
  ['The Gulf Stream', "Black bags. Weighted. The water off Bay Harbor keeps what he gives it. Until it didn't."],
]

export default function Room() {
  return (
    <section id="room" style={{ backgroundImage: `url("${IMG.table}")` }}>
      <div className="frame">
        <div>
          <h2>The room</h2>
          <p className="sub">The place changes. The order never does.</p>
          {STEPS.map(([title, text]) => (
            <div className="step" key={title}><b>{title}</b>{text}</div>
          ))}
        </div>
        <div className="evidence">
          <figure className="photo">
            <img src={IMG.gloves} alt="Dexter in apron and latex gloves, adjusting a sleeve, knife in hand" />
            <figcaption>Exhibit 04 — gloves, apron</figcaption>
          </figure>
          <figure className="photo">
            <img src={IMG.knife} alt="Dexter in shadow, knife raised, eyes down" />
            <figcaption>Exhibit 07 — instrument</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
