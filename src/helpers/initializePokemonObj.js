function initializePokemonObj (pokemon) {
  const pokemonValues = Object.values(pokemon)
  for (let i = 0; i < pokemonValues.length; i++) {
    const key = pokemonValues[i].species
    pokemon[key].baseHP = 0
    pokemon[key].baseAttack = 0
    pokemon[key].baseDefense = 0
    pokemon[key].baseSpAttack = 0
    pokemon[key].baseSpDefense = 0
    pokemon[key].baseSpeed = 0
    pokemon[key].abilities = []
    pokemon[key].type1 = ''
    pokemon[key].type2 = ''
    pokemon[key].item1 = ''
    pokemon[key].item2 = ''
    pokemon[key].eggGroup1 = ''
    pokemon[key].eggGroup2 = ''
    pokemon[key].changes = []
    pokemon[key].levelUpLearnsets = []
    pokemon[key].TMHMLearnsets = []
    pokemon[key].eggMovesLearnsets = []
    pokemon[key].evolution = []
    pokemon[key].evolutionLine = [key]
    pokemon[key].forms = []
    pokemon[key].sprite = ''
  }
  return pokemon
}

export default initializePokemonObj
