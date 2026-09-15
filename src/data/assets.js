const A = 'dexter_assets/'

export const IMG = {
  hallway: A + 'Dark hallway Dexter phone wallpaper.jpeg',
  table: A + 'descarga (1).jpeg',
  halftone: A + 'descarga (2).jpeg',
  day: A + 'dexter (2).jpeg',
  night: A + 'Dexter Morgan — Fractured Mind.jpeg',
  suit: A + 'Dexter_Morgan-removebg-preview.png',
  hands: A + 'dexter_wallpaper_2-removebg-preview.png',
  gloves: A + 'Dexter.jpeg',
  knife: A + 'dexter (1).jpeg',
  sitting: A + 'descarga-removebg-preview.png',
  slideBg: A + 'dexter wallpaper.jpeg',
  logo: A + 'Dexter-logo-3.png',
}

export const THEME = A + '24 Blood Theme.mp3'

export const SPLAT = A + 'killers/icon_blood.png'
export const KNIFE = A + 'knife_cursor_64.png'      // entrance cursor, tip at (1,2)
export const KNIFE_SMALL = A + 'knife_cursor_32.png' // page cursor, tip at (1,1)

const KILLER_FILES = {
  1: 'Brian_Mouser.jpeg',
  2: 'lila west pfp.jpeg',
  3: 'Miguel Prado.jpeg',
  4: 'Arthur Mitchell, The Trinity Killer.jpeg',
  5: 'jordan chase dexter icon _ s5 ep_11.jpeg',
  6: 'Travis Marshall doomsday killer.jpeg',
  7: 'Isaac Sirko.jpeg',
  8: 'Oliver Saxon.jpeg',
}
export const killerImg = (season) => A + 'killers/' + KILLER_FILES[season]
