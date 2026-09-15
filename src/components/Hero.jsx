import { IMG } from '../data/assets.js'
import './Hero.css'

export default function Hero() {
  return (
    <header id="hero" style={{ backgroundImage: `url("${IMG.hallway}")` }}>
      <div className="frame">
        <h1>DEXTER</h1>
        <p className="tag">
          Tonight's the night. And it's going to happen again and again. It has to happen.
          <small>Miami. A hallway. Someone waiting at the end of it.</small>
        </p>
      </div>
    </header>
  )
}
