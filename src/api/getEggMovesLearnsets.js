async function getEggMovesLearnsets () {
  const rawEggMoves = await fetch('https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/egg_moves.h')
  const textEggMoves = await rawEggMoves.text()

  return textEggMoves
}

export default getEggMovesLearnsets
