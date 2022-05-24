import altFormsLearnsets from './altFormsLearnsets'
function regexEggMovesLearnsets (textEggMoves, pokemon) {
  const lines = textEggMoves.split('\n')
  const speciesString = JSON.stringify(Object.keys(pokemon))
  let key = null

  lines.forEach(line => {
    if (/egg_moves/i.test(line)) { key = null }
    const matchMove = line.match(/MOVE_\w+/i)
    if (matchMove !== null) {
      const move = matchMove[0]
      if (key !== null) { pokemon[key].eggMovesLearnsets.push(move) }
    } else if (key === null) {
      const matchLine = line.match(/(\w+),/i)
      if (matchLine !== null) {
        const testSpecies = `SPECIES_${speciesString.match(matchLine[1])}`
        if (speciesString.includes(testSpecies)) { key = testSpecies }
      }
    }
  })

  return altFormsLearnsets(pokemon, 'evolutionLine', 'eggMovesLearnsets')
}

export default regexEggMovesLearnsets
