async function getSpecies(pokemon){
	const rawSpecies = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/include/constants/species.h")
	const textSpecies = await rawSpecies.text()

	return regexSpecies(textSpecies, pokemon)
}

function regexSpecies(textSpecies, pokemon){
	const lines = textSpecies.split("\n").map(line => line.trim())
	let formsStart = null, ID

	lines.forEach(line => {
		if (/#define *FORMS_START *\w+/i.test(line))
			formsStart = ID
		if(/#define SPECIES_\w+/i.test(line) && /SPECIES_NONE /i.test(line) !== true && /SPECIES_EGG /i.test(line) !== true){
			const species = line.match(/#define (SPECIES_\w+)/i)[1]
			ID = parseInt(line.match(/\d+/)[0])
			pokemon[species] = {}
			pokemon[species]["species"] = species
			if(Number.isInteger(formsStart))
				pokemon[species]["ID"] = ID+formsStart
			else{
				pokemon[species]["ID"] = ID
			}
		}
	})
	return pokemon
}






async function getBaseStats(pokemon){
	const rawBaseStats = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/base_stats.h")
	const textBaseStats = await rawBaseStats.text()
	return regexBaseStats(textBaseStats, pokemon)
	/*
	fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/base_stats.h")
	.then(response => response.text())
	.then(response => {regexBaseStats(response)})
	.catch(err => console.error(err))
	*/
}

function regexBaseStats(textBaseStats, pokemon){
	const lines = textBaseStats.split("\n").map(line => line.trim())

	const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|item1|item2|eggGroup1|eggGroup2|abilities|SPECIES_\w*/i
	let change, value, key

	lines.forEach(line => {

		if(/#else/i.test(line))
				change = true
		else if(/#endif/i.test(line))
				change = false

		if(regex.test(line)){

			const match = line.match(regex)[0]

			if(match === "baseHP" || match === "baseAttack" || match === "baseDefense" || match === "baseSpeed" || match === "baseSpAttack" || match === "baseSpDefense")
				value = parseInt(line.match(/\d+/)[0])
			else if(match === "type1" || match === "type2" || match === "item1" || match === "item2" || match === "eggGroup1" || match === "eggGroup2")
				value = line.match(/\w+/ig)[1]
			else if(match === "abilities")
				value = line.match(/ABILITY_\w+/ig)

			if(/SPECIES_/i.test(line) && /SPECIES_NONE/i.test(line) !== true){
				key = match
				change = false // technically useless, could be removed
			}
			else if(change === true)
				pokemon[key]["changes"].push([match, value])
			else if(change === false){
				pokemon[key][match] = value
			}
		}
	})
	return pokemon
}








async function getLevelUpLearnsets(pokemon){
	const rawLevelUpLearnsets = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnsets.h")
	const textLevelUpLearnsets = await rawLevelUpLearnsets.text()

	const rawLevelUpLearnsetsPointers = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/level_up_learnset_pointers.h")
	const textLevelUpLearnsetsPointers = await rawLevelUpLearnsetsPointers.text()
	const levelUpLearnsetsConversionTable = getLevelUpLearnsetsConversionTable(textLevelUpLearnsetsPointers)

	return regexLevelUpLearnsets(textLevelUpLearnsets, levelUpLearnsetsConversionTable, pokemon)
}

function getLevelUpLearnsetsConversionTable(bigString){
	const lines = bigString.split("\n").map(line => line.trim())
	let conversionTable = {}

	lines.forEach(line => {
		if(/SPECIES_/i.test(line) && /SPECIES_NONE/i.test(line) !== true){
			const match = line.match(/\w+/ig)
			const species = match[0]
			const conversion = match[1]

			if(conversionTable[conversion] === undefined)
				conversionTable[conversion] = [species]
			else
				conversionTable[conversion].push(species)
		}
	})
	//console.log(conversionTable)
	return conversionTable
}

function regexLevelUpLearnsets(textLevelUpLearnsets, conversionTable, pokemon){
	const lines = textLevelUpLearnsets.split("\n").map(line => line.trim())
	let key = []

	lines.forEach(line => {
		if(/s\w+LevelUpLearnset/i.test(line))
			key = conversionTable[line.match(/s\w+LevelUpLearnset/i)[0]]
		if(/LEVEL_UP_MOVE\( *\d+, *\w+/i.test(line)){
			const move = line.match(/, *(\w+)/)[1]
			const level = line.match(/\( *(\d+) *,/)[1]
			for(let i = 0; i < key.length; i++)
				pokemon[key[i]]["levelUpLearnsets"].push([move, parseInt(level)])
		}
	})
	return pokemon
}








async function getTMHMLearnsets(pokemon){
	const rawTMHMLearnsets = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/tmhm_learnsets.h")
	const textTMHMLearnsets = await rawTMHMLearnsets.text()

	return regexTMHMLearnsets(textTMHMLearnsets, pokemon)
}

function regexTMHMLearnsets(textTMHMLearnsets, pokemon){
	const pokemonValues = Object.values(pokemon)
	const lines = textTMHMLearnsets.split("\n").map(line => line.trim())
	let key

	lines.forEach(line => {
		if(/SPECIES_/.test(line) && /SPECIES_NONE/i.test(line) !== true){
			key = line.match(/SPECIES_\w+/i)[0]
		}
		if(/TMHM\d *\( *[TH]M\d+ *_ *\w+/i.test(line)){
			let move = line.match(/[TH]M\d+_(\w+)/i)[1]
			if(move === "SOLARBEAM")
				move = "SOLAR_BEAM" // Fuck Oldplayer :)
			move = `MOVE_${move}`
			const TMHM = line.match(/([TH]M\d+)_\w+/i)[1]

			pokemon[key]["TMHMLearnsets"].push([move, TMHM])
		}

	})



	for (let i = 0; i < pokemonValues.length; i++){ // this should be a separate function :)

		key = pokemonValues[i].species

		if(pokemon[key]["forms"].length >= 2){
				for (let j = 0; j < pokemon[key]["forms"].length; j++){
					const targetKey = pokemon[key]["forms"][j]
					if(pokemon[targetKey]["TMHMLearnsets"].length <= 0)
						pokemon[targetKey]["TMHMLearnsets"] = pokemon[key]["TMHMLearnsets"]
				}
		}
	}

	return pokemon
}








async function getEvolution(pokemon){
	const rawEvolution = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/evolution.h")
	const textEvolution = await rawEvolution.text()

	return regexEvolution(textEvolution, pokemon)
}

function regexEvolution(textEvolution, pokemon){
	const lines = textEvolution.split("\n").map(line => line.trim())
	let key

	lines.forEach(line =>{
		if(/\[ *SPECIES_\w+ *\]/i.test(line))
			key = line.match(/\[ *(SPECIES_\w+) *\]/i)[1]
		if(/\w+, *\w+, *\w+/.test(line)){
			const match = line.match(/(\w+), *(\w+), *(\w+)/)
			pokemon[key]["evolution"].push([match[1], match[2], match[3]])
		}
	})
	getEvolutionLine(pokemon)
	return pokemon
}

function getEvolutionLine(pokemon){
	const pokemonValues = Object.values(pokemon)

	for (let i = 0; i < pokemonValues.length; i++){

		const key = pokemonValues[i].species

		for (let j = 0; j < pokemon[key]["evolution"].length; j++){
			const targetSpecies = pokemon[key]["evolution"][j][2]
			pokemon[key]["evolutionLine"].push(targetSpecies)
		}

		for (let j = 0; j < pokemon[key]["evolution"].length; j++){
			const targetSpecies = pokemon[key]["evolution"][j][2]
			pokemon[targetSpecies]["evolutionLine"] = pokemon[key]["evolutionLine"]
		}
	}

	for (let i = 0; i < pokemonValues.length; i++){

		const key = pokemonValues[i].species

		pokemon[key]["evolutionLine"] = Array.from(new Set(pokemon[key]["evolutionLine"])) // remove duplicates
	}
	return pokemon
}










async function getForms(pokemon){
	const rawForms = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/form_species_tables.h")
	const textForms = await rawForms.text()

	return regexForms(textForms, pokemon)
}

function regexForms(textForms, pokemon){
	const lines = textForms.split("\n").map(line => line.trim())
	let speciesArray = []

	lines.forEach(line => {
		if(/FORM_SPECIES_END/i.test(line)){
			for (let i = 0; i < speciesArray.length; i++)
				pokemon[speciesArray[i]]["forms"] = speciesArray
			speciesArray = []
		}
		else if(/SPECIES_\w+/.test(line)){	
			const match = line.match(/SPECIES_\w+/i)[0]
			speciesArray.push(match)
		}
	})
	return pokemon
}










async function getEggMovesLearnsets(pokemon){
	const rawEggMoves = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/egg_moves.h")
	const textEggMoves = await rawEggMoves.text()

	return regexEggMovesLearnsets(textEggMoves, pokemon)
}

function regexEggMovesLearnsets(textEggMoves, pokemon){
	const lines = textEggMoves.split("\n").map(line => line.trim())
	const speciesString = JSON.stringify(Object.keys(pokemon))
	const pokemonValues = Object.values(pokemon)
	let key = null

	lines.forEach(line => {
		if(/egg_moves/i.test(line))
			key = null
		const matchMove = line.match(/MOVE_\w+/i)
		if(matchMove !== null){
			const move = matchMove[0]
			if(key !== null)
				pokemon[key]["eggMovesLearnsets"].push(move)
		}
		else if(key === null){
			const matchLine = line.match(/(\w+),/i)
			if(matchLine !== null){
				const testSpecies = `SPECIES_${speciesString.match(matchLine[1])}`
				if(speciesString.includes(testSpecies))
					key = testSpecies
			}
		}
	})


	for (let i = 0; i < pokemonValues.length; i++){ // this should be a separate function :)

		key = pokemonValues[i].species

		if(pokemon[key]["evolutionLine"].length > 1){
				for (let j = 0; j < pokemon[key]["evolutionLine"].length; j++){
					const targetKey = pokemon[key]["evolutionLine"][j]
					if(pokemon[targetKey]["eggMovesLearnsets"].length <= 0)
						pokemon[targetKey]["eggMovesLearnsets"] = pokemon[key]["eggMovesLearnsets"]
				}
		}
	}


	return pokemon
}

















async function buildPokemonObj(){
	let pokemon = {}
	pokemon = await getSpecies(pokemon)

	pokemon = await initializePokemonObj(pokemon)

	pokemon = await getEvolution(pokemon)
	pokemon = await getForms(pokemon)
	pokemon = await getBaseStats(pokemon)
	pokemon = await getLevelUpLearnsets(pokemon)
	pokemon = await getTMHMLearnsets(pokemon)
	pokemon = await getEggMovesLearnsets(pokemon)
	console.log(pokemon)
}

function initializePokemonObj(pokemon){
	pokemonValues = Object.values(pokemon)
	for (let i = 0; i < pokemonValues.length; i++){
		const key = pokemonValues[i].species
		pokemon[key]["baseHP"] = 0
		pokemon[key]["baseAttack"] = 0
		pokemon[key]["baseDefense"] = 0
		pokemon[key]["baseSpAttack"] = 0
		pokemon[key]["baseSpDefense"] = 0
		pokemon[key]["baseSpeed"] = 0
		pokemon[key]["abilities"] = []
		pokemon[key]["type1"] = ""
		pokemon[key]["type2"] = ""
		pokemon[key]["item1"] = ""
		pokemon[key]["item2"] = ""
		pokemon[key]["eggGroup1"] = ""
		pokemon[key]["eggGroup2"] = ""
		pokemon[key]["changes"] = []
		pokemon[key]["levelUpLearnsets"] = []
		pokemon[key]["TMHMLearnsets"] = []
		pokemon[key]["eggMovesLearnsets"] = []
		pokemon[key]["evolution"] = []
		pokemon[key]["evolutionLine"] = [key]
		pokemon[key]["forms"] = []
	}
	return pokemon
}