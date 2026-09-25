import { Title } from './Motion.jsx'
import { IMG } from '../data/assets.js'
import './Born.css'

export default function Born() {
  return (
    <section id="born">
      <div className="frame">
        <div>
          <Title>Born in blood</Title>
          <p className="lead">
            A shipping container at the port of Miami. A chainsaw. His mother, in pieces. A three-year-old sitting in
            two inches of her blood for two days before a young cop opened the door and carried him out.
          </p>
          <p>
            Harry Morgan took the boy home and understood, sooner than he wanted to, what the container had made.
            He couldn't fix it. So he did the next thing: he taught it to aim.
          </p>
          <p>
            By day Dexter reads spatter for Miami Metro Homicide, brings donuts, remembers birthdays. By night he
            follows the other pattern. He says he feels nothing. What he does have is a method, a boat, a roll of
            plastic, and a box of glass slides hidden behind the air conditioner.
          </p>
          <div className="file">
            <dl>
              <dt>Name</dt><dd>Dexter Morgan</dd>
              <dt>Cover</dt><dd>Blood-spatter analyst, Miami Metro Homicide</dd>
              <dt>Father</dt><dd>Harry Morgan, detective. Dead. Still talks.</dd>
              <dt>Brother</dt><dd>Brian Moser. Same container. Different ending.</dd>
              <dt>Sister</dt><dd>Debra Morgan. The only thing that ever felt real.</dd>
              <dt>Boat</dt><dd><span className="red">Slice of Life</span></dd>
              <dt>Trophies</dt><dd>One drop each. Dozens. He stopped counting; the box didn't.</dd>
            </dl>
          </div>
        </div>
        <div className="two">
          <figure className="photo day">
            <img src={IMG.day} alt="Dexter with a forensic visor, holding a slide up to the light" />
            <figcaption>Daylight. The lab. The mask that works.</figcaption>
          </figure>
          <figure className="photo night">
            <img src={IMG.night} alt="Dexter's face torn into paper fragments and red stains" />
            <figcaption>After dark. What's left when the mask comes off.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
