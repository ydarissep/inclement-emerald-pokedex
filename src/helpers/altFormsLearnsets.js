function altFormsLearnsets (pokemon, input, output) {
  for (const species of Object.keys(pokemon)) {
    if (pokemon[species][input].length >= 2) {
      for (let j = 0; j < pokemon[species][input].length; j++) {
        const targetSpecies = pokemon[species][input][j]

        if (pokemon[targetSpecies][output].length <= 0) { pokemon[targetSpecies][output] = pokemon[species][output] }
      }
    }
  }
  return pokemon
}

export default altFormsLearnsets
