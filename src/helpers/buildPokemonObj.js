import getSpecies from '../api/getSpecies'
import regexSpecies from './regexSpecies'

import initializePokemonObj from './initializePokemonObj'

import getEvolution from '../api/getEvolution'
import regexEvolution from './regexEvolution'

import getForms from '../api/getForms'
import regexForms from './regexForms'

import getBaseStats from '../api/getBaseStats'
import regexBaseStats from './regexBaseStats'

import getLevelUpLearnsetsPointers from '../api/getLevelUpLearnsetsPointers'
import getLevelUpLearnsetsConversionTable from './getLevelUpLearnsetsConversionTable'
import getLevelUpLearnsets from '../api/getLevelUpLearnsets'
import regexLevelUpLearnsets from './regexLevelUpLearnsets'

import getTMHMLearnsets from '../api/getTMHMLearnsets'
import regexTMHMLearnsets from './regexTMHMLearnsets'

import getEggMovesLearnsets from '../api/getEggMovesLearnsets'
import regexEggMovesLearnsets from './regexEggMovesLearnsets'

async function buildPokemonObj () {
  let pokemon = {}

  const species = await getSpecies()
  pokemon = regexSpecies(species, pokemon)

  // This must be called here
  pokemon = initializePokemonObj(pokemon)

  const evolutions = await getEvolution()
  pokemon = regexEvolution(evolutions, pokemon)

  const forms = await getForms()
  pokemon = regexForms(forms, pokemon)

  const baseStats = await getBaseStats()
  pokemon = regexBaseStats(baseStats, pokemon)

  const pointers = await getLevelUpLearnsetsPointers()
  const conversionTable = getLevelUpLearnsetsConversionTable(pointers)
  const levelUpLearnsets = await getLevelUpLearnsets()
  pokemon = regexLevelUpLearnsets(levelUpLearnsets, conversionTable, pokemon)

  const TMHMLearnsets = await getTMHMLearnsets()
  pokemon = regexTMHMLearnsets(TMHMLearnsets, pokemon)

  const eggMovesLearnsets = await getEggMovesLearnsets()
  pokemon = regexEggMovesLearnsets(eggMovesLearnsets, pokemon)

  console.log(pokemon)
}

export default buildPokemonObj
