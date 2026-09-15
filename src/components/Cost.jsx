import { IMG } from '../data/assets.js'
import './Cost.css'

const LOSSES = [
  ['Rita', "Trinity's last victim. Found in the bathtub the night Dexter finally killed him. Harrison on the floor, in the blood.", 'Born in blood. Both of us.'],
  ['Doakes', 'The one who saw it first. Blown up in a cabin in the Everglades and buried as the Bay Harbor Butcher.', 'I know what you are.'],
  ['LaGuerta', "She got close. Deb pulled the trigger so Dexter wouldn't have to. Then Deb couldn't put the gun down.", null],
  ['Deb', 'Shot by Saxon. A stroke on the table. Dexter turned off the machine himself, carried her onto the boat, and gave her to the water like all the others.', null],
]

export default function Cost() {
  return (
    <section id="cost">
      <div className="frame">
        <div className="head">
          <figure>
            <img src={IMG.sitting} alt="Dexter sitting alone in the dark, hands folded" />
          </figure>
          <div>
            <h2>The cost</h2>
            <p className="sub">The code kept him out of prison. It did not keep anyone else alive. Lift the plastic.</p>
            <p className="big">"I destroy everyone I love."</p>
          </div>
        </div>
        <ul className="bags">
          {LOSSES.map(([name, text, quote]) => (
            <li key={name} tabIndex={0}>
              <div className="body">
                <b>{name}</b>
                <p>{text}</p>
                {quote && <q>{quote}</q>}
              </div>
              <span className="sheet" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
