// SVG filters and gradients shared by every blood effect on the page.
export default function BloodDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="ragged" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="b" />
          <feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
        </filter>
        <linearGradient id="dripfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a0a0f" />
          <stop offset=".55" stopColor="#9c0e17" />
          <stop offset=".85" stopColor="#d3181f" />
          <stop offset="1" stopColor="#7d0c12" />
        </linearGradient>
        <radialGradient id="bulbfill" cx=".38" cy=".32" r=".75">
          <stop offset="0" stopColor="#ff7b7b" />
          <stop offset=".22" stopColor="#e0212b" />
          <stop offset=".8" stopColor="#8a0c13" />
          <stop offset="1" stopColor="#3a060a" />
        </radialGradient>
      </defs>
    </svg>
  )
}
