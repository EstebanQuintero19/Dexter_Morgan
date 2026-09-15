import { IMG } from '../data/assets.js'
import './Passenger.css'

export default function Passenger() {
  return (
    <section id="passenger">
      <div className="frame">
        <blockquote className="q1">I'm a very neat monster.</blockquote>
        <blockquote className="q2">People fake a lot of human interactions. I fake them all.</blockquote>
        <figure>
          <img src={IMG.hands} alt="Dexter, gloved hands raised in front of his chest, lit from behind" />
        </figure>
        <blockquote className="q3">The Dark Passenger doesn't leave. It just drives.</blockquote>
        <blockquote className="q4">
          Harry and Doris Morgan did a wonderful job raising me. But they're both dead now. I didn't kill them. Honest.
          <cite>Voice-over, season one</cite>
        </blockquote>
      </div>
    </section>
  )
}
