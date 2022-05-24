function regexSpecies (textSpecies, pokemon) {
  const lines = textSpecies.split('\n')
  let formsStart = null; let ID = 0

  lines.forEach(line => {
    if (/#define *FORMS_START *\w+/i.test(line)) { formsStart = ID }

    const matchSpecies = line.match(/#define *(SPECIES_\w+)/i)
    if (matchSpecies !== null && /SPECIES_NONE /i.test(line) !== true && /SPECIES_EGG /i.test(line) !== true) {
      const species = matchSpecies[1]

      const matchInt = line.match(/\d+/)
      if (matchInt !== null) {
        ID = parseInt(matchInt[0])

        pokemon[species] = {}
        pokemon[species].species = species

        if (Number.isInteger(formsStart)) { pokemon[species].ID = ID + formsStart } else { pokemon[species].ID = ID }
      }
    }
  })
  return pokemon
}

export default regexSpecies
