import altFormsLearnsets from './altFormsLearnsets'

function regexTMHMLearnsets (textTMHMLearnsets, pokemon) {
  const lines = textTMHMLearnsets.split('\n')
  let species = null

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies !== null) {
      species = matchSpecies[0]
    }

    const matchTmhmMove = line.match(/TMHM\d* *\((\w+ *\d+) *_ *(\w+)/i)
    if (matchTmhmMove !== null) {
      const TMHM = matchTmhmMove[1]
      let move = matchTmhmMove[2]
      if (move === 'SOLARBEAM') { move = 'SOLAR_BEAM' } // Fuck Oldplayer :)
      move = `MOVE_${move}`

      pokemon[species].TMHMLearnsets.push([move, TMHM])
    }
  })

  return altFormsLearnsets(pokemon, 'forms', 'TMHMLearnsets')
}

export default regexTMHMLearnsets
