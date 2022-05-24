async function getEvolution () {
  const rawEvolution = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/evolution.h')
  const textEvolution = await rawEvolution.text()

  return textEvolution
}

export default getEvolution
