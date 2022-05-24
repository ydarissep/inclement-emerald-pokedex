function getEvolutionLine (pokemon) {
  for (const species of Object.keys(pokemon)) {
    for (let j = 0; j < pokemon[species].evolution.length; j++) {
      const targetSpecies = pokemon[species].evolution[j][2]
      pokemon[species].evolutionLine.push(targetSpecies)
    }

    for (let j = 0; j < pokemon[species].evolution.length; j++) {
      const targetSpecies = pokemon[species].evolution[j][2]
      pokemon[targetSpecies].evolutionLine = pokemon[species].evolutionLine
    }
  }

  for (const species of Object.keys(pokemon)) { pokemon[species].evolutionLine = Array.from(new Set(pokemon[species].evolutionLine)) } // remove duplicates

  return pokemon
}

export default getEvolutionLine
