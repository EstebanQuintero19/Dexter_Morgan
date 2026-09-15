import { IMG } from '../data/assets.js'
import './Closing.css'

export default function Closing() {
  return (
    <footer id="close" style={{ backgroundImage: `url("${IMG.halftone}")` }}>
      <div className="frame">
        <p>He drove the boat into the hurricane<br />and let them think it worked.</p>
        <small>Oregon. A beard. A lumber yard. A room with nothing in it, and a man who feels nothing, finally telling the truth.</small>
        <img src={IMG.logo} alt="Dexter logo with blood spatter" />
      </div>
    </footer>
  )
}
