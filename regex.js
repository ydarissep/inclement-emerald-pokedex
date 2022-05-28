async function getSpecies(pokemon){
	const rawSpecies = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/include/constants/species.h")
	const textSpecies = await rawSpecies.text()

	return regexSpecies(textSpecies, pokemon)
}


async function getBaseStats(pokemon){
	const rawBaseStats = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/base_stats.h")
	const textBaseStats = await rawBaseStats.text()
	return regexBaseStats(textBaseStats, pokemon)
}

async function getLevelUpLearnsets(pokemon){
	const rawLevelUpLearnsets = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnsets.h")
	const textLevelUpLearnsets = await rawLevelUpLearnsets.text()

	const rawLevelUpLearnsetsPointers = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnset_pointers.h")
	const textLevelUpLearnsetsPointers = await rawLevelUpLearnsetsPointers.text()


	const levelUpLearnsetsConversionTable = getLevelUpLearnsetsConversionTable(textLevelUpLearnsetsPointers)


	return regexLevelUpLearnsets(textLevelUpLearnsets, levelUpLearnsetsConversionTable, pokemon)
}

async function getTMHMLearnsets(pokemon){
	const rawTMHMLearnsets = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/tmhm_learnsets.h")
	const textTMHMLearnsets = await rawTMHMLearnsets.text()

	return regexTMHMLearnsets(textTMHMLearnsets, pokemon)
}

async function getEvolution(pokemon){
	const rawEvolution = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/evolution.h")
	const textEvolution = await rawEvolution.text()

	return regexEvolution(textEvolution, pokemon)
}

async function getForms(pokemon){
	const rawForms = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/form_species_tables.h")
	const textForms = await rawForms.text()

	return regexForms(textForms, pokemon)
}

async function getEggMovesLearnsets(pokemon){
	const rawEggMoves = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/egg_moves.h")
	const textEggMoves = await rawEggMoves.text()

	return regexEggMovesLearnsets(textEggMoves, pokemon)
}

async function getSprite(pokemon){
	const rawFrontPicTable = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon_graphics/front_pic_table.h")
	const textFrontPicTable = await rawFrontPicTable.text()

	const rawSprite = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/graphics/pokemon.h")
	const textSprite = await rawSprite.text()

	const spriteConversionTable = getSpriteConversionTable(textFrontPicTable, pokemon)

	return regexSprite(textSprite, spriteConversionTable, pokemon)
}


async function buildPokemonObj(){
	let pokemon = {}
	pokemon = await getSpecies(pokemon) 
 
	pokemon = await initializePokemonObj(pokemon)

	pokemon = await getEvolution(pokemon)
	pokemon = await getForms(pokemon) // should be called in that order until here
	pokemon = await getBaseStats(pokemon)
	pokemon = await getLevelUpLearnsets(pokemon)
	pokemon = await getTMHMLearnsets(pokemon)
	pokemon = await getEggMovesLearnsets(pokemon)
	pokemon = await getSprite(pokemon)
	displaySpecies(pokemon, Object.keys(pokemon))
	console.log(pokemon)
}


function initializePokemonObj(pokemon){
	for (const species of Object.keys(pokemon)){
		pokemon[species]["baseHP"] = 0
		pokemon[species]["baseAttack"] = 0
		pokemon[species]["baseDefense"] = 0
		pokemon[species]["baseSpAttack"] = 0
		pokemon[species]["baseSpDefense"] = 0
		pokemon[species]["baseSpeed"] = 0
		pokemon[species]["abilities"] = []
		pokemon[species]["type1"] = ""
		pokemon[species]["type2"] = ""
		pokemon[species]["item1"] = ""
		pokemon[species]["item2"] = ""
		pokemon[species]["eggGroup1"] = ""
		pokemon[species]["eggGroup2"] = ""
		pokemon[species]["changes"] = []
		pokemon[species]["levelUpLearnsets"] = []
		pokemon[species]["TMHMLearnsets"] = []
		pokemon[species]["eggMovesLearnsets"] = []
		pokemon[species]["evolution"] = []
		pokemon[species]["evolutionLine"] = [species]
		pokemon[species]["forms"] = []
		pokemon[species]["sprite"] = ""
	}
	return pokemon
}
