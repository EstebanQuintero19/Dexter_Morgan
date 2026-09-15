import { SECTIONS } from '../data/killers.js'
import './Nav.css'

export default function Nav({ active }) {
  return (
    <ul className="nav" aria-label="Sections">
      {SECTIONS.map(([id, label]) => (
        <li key={id}>
          <a href={'#' + id} className={active === id ? 'active' : ''}>
            <span className="slide" aria-hidden="true"><span className="drop" /></span>
            <span className="label">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
