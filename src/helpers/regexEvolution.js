import getEvolutionLine from './getEvolutionLine'

function regexEvolution (textEvolution, pokemon) {
  const lines = textEvolution.split('\n')
  let species

  lines.forEach(line => {
    const matchSpecies = line.match(/\[ *(SPECIES_\w+) *\]/i)
    if (matchSpecies !== null) { species = matchSpecies[1] }

    const matchEvoInfo = line.match(/(\w+), *(\w+), *(\w+)/)
    if (matchEvoInfo !== null) {
      const method = matchEvoInfo[1]
      const condition = matchEvoInfo[2]
      const targetSpecies = matchEvoInfo[3]
      pokemon[species].evolution.push([method, condition, targetSpecies])
    }
  })

  return getEvolutionLine(pokemon)
}

export default regexEvolution
