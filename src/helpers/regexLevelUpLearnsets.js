function regexLevelUpLearnsets (textLevelUpLearnsets, conversionTable, pokemon) {
  const lines = textLevelUpLearnsets.split('\n')
  let species = []

  lines.forEach(line => {
    const matchConversion = line.match(/s\w+LevelUpLearnset/i)
    if (matchConversion !== null) {
      const index = matchConversion[0]
      species = conversionTable[index]
    }

    const matchLevelMove = line.match(/(\d+) *, *(MOVE_\w+)/i)
    if (matchLevelMove !== null) {
      const level = parseInt(matchLevelMove[1])
      const move = matchLevelMove[2]
      for (let i = 0; i < species.length; i++) { pokemon[species[i]].levelUpLearnsets.push([move, level]) }
    }
  })
  return pokemon
}

export default regexLevelUpLearnsets
