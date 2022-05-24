async function getTMHMLearnsets () {
  const rawTMHMLearnsets = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/tmhm_learnsets.h')
  const textTMHMLearnsets = await rawTMHMLearnsets.text()

  return textTMHMLearnsets
}

export default getTMHMLearnsets
