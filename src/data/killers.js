import { killerImg } from './assets.js'

export const KILLERS = [
  { s: 1, name: 'Brian Moser', role: 'The Ice Truck Killer. His brother.',
    quote: "You can't be a killer and a hero. It doesn't work that way.", who: 'Brian, to Dexter',
    end: 'Throat cut on his own table. Staged as suicide. The only one Dexter wept for.' },
  { s: 2, name: 'Lila West', role: 'The one who wanted to see the real him.', empty: true,
    quote: "I'm the one who sees you.", who: 'Lila',
    end: 'A knife in Paris. No slide. He did not want to keep her.' },
  { s: 3, name: 'Miguel Prado', role: 'The friend who learned the code and used it wrong.',
    quote: "I've been sleeping my whole life, Dexter. You woke me up.", who: 'Miguel',
    end: 'Garroted. Left for the Skinner to take the blame.' },
  { s: 4, name: 'Arthur Mitchell', role: 'Trinity. The family man.',
    quote: 'Hello, Dexter Morgan.', who: 'Arthur, on the phone, seconds before it was over',
    end: 'A hammer, to Trinity’s own rhythm. Dexter came home to Rita in the tub. Harrison sitting in the blood.' },
  { s: 5, name: 'Jordan Chase', role: 'The motivational speaker. Take it.',
    quote: "Tick, tick, tick. That's the sound of your life running out.", who: 'Jordan',
    end: 'Dexter stepped back. Lumen took him herself.' },
  { s: 6, name: 'Travis Marshall', role: 'The Doomsday Killer.',
    quote: "It's the end of the world.", who: 'Travis',
    end: 'Knife to the chest. Deb opened the door. “Oh, God.”' },
  { s: 7, name: 'Isaak Sirko', role: 'The Koshka brotherhood. The one who understood.',
    quote: 'We are cut from the same cloth, you and I.', who: 'Isaak',
    end: 'Shot by his own people. Died on Dexter’s boat, not on his table.' },
  { s: 8, name: 'Oliver Saxon', role: 'The Brain Surgeon. Vogel’s son.',
    quote: 'You did this. You’re the reason she’s dead.', who: 'Saxon, about Deb',
    end: 'A pen through the neck, in an interrogation room, on camera. Self-defense.' },
].map(k => ({ ...k, img: killerImg(k.s) }))

export const SECTIONS = [
  ['born', 'Born in blood'],
  ['code', 'The code'],
  ['passenger', 'The passenger'],
  ['room', 'The room'],
  ['box', 'The box'],
  ['cost', 'The cost'],
]
