async function getLevelUpLearnsetsPointers () {
  const rawLevelUpLearnsetsPointers = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnset_pointers.h')
  const textLevelUpLearnsetsPointers = await rawLevelUpLearnsetsPointers.text()

  return textLevelUpLearnsetsPointers
}

export default getLevelUpLearnsetsPointers
