function getLevelUpLearnsetsConversionTable (textLevelUpLearnsetsPointers) {
  const lines = textLevelUpLearnsetsPointers.split('\n')
  const conversionTable = {}

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies != null && /SPECIES_NONE/i.test(line) !== true) {
      const value = matchSpecies[0]

      const matchConversion = line.match(/s\w+LevelUpLearnset/i)
      if (matchConversion !== null) {
        const index = matchConversion[0]

        // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
        if (conversionTable[index] === undefined) {
          conversionTable[index] = [value]
        } else {
          conversionTable[index].push(value)
        }
      }
    }
  })
  return conversionTable
}

export default getLevelUpLearnsetsConversionTable
