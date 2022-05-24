function regexForms (textForms, pokemon) {
  const lines = textForms.split('\n')
  let speciesArray = []

  lines.forEach(line => {
    const matchSpecies = line.match(/SPECIES_\w+/i)

    if (/FORM_SPECIES_END/i.test(line)) {
      for (let i = 0; i < speciesArray.length; i++) { pokemon[speciesArray[i]].forms = speciesArray }
      speciesArray = []
    } else if (matchSpecies !== null) {
      const species = matchSpecies[0]
      speciesArray.push(species)
    }
  })
  return pokemon
}

export default regexForms
