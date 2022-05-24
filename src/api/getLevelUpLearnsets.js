async function getLevelUpLearnsets () {
  const rawLevelUpLearnsets = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnsets.h')
  const textLevelUpLearnsets = await rawLevelUpLearnsets.text()

  return textLevelUpLearnsets
}

export default getLevelUpLearnsets
