async function getSpecies () {
  const rawSpecies = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/include/constants/species.h')
  const textSpecies = await rawSpecies.text()

  return textSpecies
}

export default getSpecies
