async function getBaseStats () {
  const rawBaseStats = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/base_stats.h')
  const textBaseStats = await rawBaseStats.text()
  return textBaseStats
}

export default getBaseStats
