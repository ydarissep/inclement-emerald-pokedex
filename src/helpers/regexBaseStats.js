function regexBaseStats (textBaseStats, pokemon) {
  const lines = textBaseStats.split('\n')

  const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|item1|item2|eggGroup1|eggGroup2|abilities/i
  let change = false; let value; let species

  lines.forEach(line => {
    if (/#else/i.test(line)) { change = true }
    if (/#endif/i.test(line)) { change = false }

    const matchSpecies = line.match(/SPECIES_\w+/i)
    if (matchSpecies !== null && /SPECIES_NONE/i.test(line) !== true) {
      species = matchSpecies[0]
      change = false
    }

    const matchRegex = line.match(regex)
    if (matchRegex !== null) {
      const match = matchRegex[0]

      if (match === 'baseHP' || match === 'baseAttack' || match === 'baseDefense' || match === 'baseSpeed' || match === 'baseSpAttack' || match === 'baseSpDefense') {
        const matchInt = line.match(/\d+/)
        if (matchInt !== null) { value = parseInt(matchInt[0]) }
      } else if (match === 'type1' || match === 'type2' || match === 'item1' || match === 'item2' || match === 'eggGroup1' || match === 'eggGroup2') {
        value = line.match(/\w+_\w+/i)
        if (value !== null) { value = value[0] }
      } else if (match === 'abilities') { value = line.match(/ABILITY_\w+/ig) }

      if (change === true) { pokemon[species].changes.push([match, value]) } else if (change === false) { pokemon[species][match] = value }
    }
  })

  return pokemon
}

export default regexBaseStats
