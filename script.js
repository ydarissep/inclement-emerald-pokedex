async function getSpecies(pokemon){
	const rawSpecies = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/include/constants/species.h")
	const textSpecies = await rawSpecies.text()

	return regexSpecies(textSpecies, pokemon)
}

function regexSpecies(textSpecies, pokemon){
	const lines = textSpecies.split("\n")
	let formsStart = null, ID = 0

	lines.forEach(line => {

		if (/#define *FORMS_START *\w+/i.test(line))
			formsStart = ID

		const matchSpecies = line.match(/#define *(SPECIES_\w+)/i)
		if(matchSpecies !== null && /SPECIES_NONE /i.test(line) !== true && /SPECIES_EGG /i.test(line) !== true){
			const species = matchSpecies[1]


			matchInt = line.match(/\d+/)
			if(matchInt !== null){
				ID = parseInt(matchInt[0])



				pokemon[species] = {}
				pokemon[species]["species"] = species


				if(Number.isInteger(formsStart))
					pokemon[species]["ID"] = ID+formsStart
				else
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
}

function regexBaseStats(textBaseStats, pokemon){
	const lines = textBaseStats.split("\n")

	const regex = /baseHP|baseAttack|baseDefense|baseSpeed|baseSpAttack|baseSpDefense|type1|type2|item1|item2|eggGroup1|eggGroup2|abilities/i
	let change = false, value, species

	lines.forEach(line => {

		if(/#else/i.test(line))
				change = true
		if(/#endif/i.test(line))
				change = false





		const matchSpecies = line.match(/SPECIES_\w+/i)
		if(matchSpecies !== null && /SPECIES_NONE/i.test(line) !== true){
			species = matchSpecies[0]
			change = false
		}





		const matchRegex = line.match(regex)
		if(matchRegex !== null){
			const match = matchRegex[0]





			if(match === "baseHP" || match === "baseAttack" || match === "baseDefense" || match === "baseSpeed" || match === "baseSpAttack" || match === "baseSpDefense"){
				const matchInt = line.match(/\d+/)
				if(matchInt !== null)
					value = parseInt(matchInt[0])
			}
			else if(match === "type1" || match === "type2" || match === "item1" || match === "item2" || match === "eggGroup1" || match === "eggGroup2"){
				value = line.match(/\w+_\w+/i)
				if(value !== null)
					value = value[0]
			}
			else if(match === "abilities")
				value = line.match(/ABILITY_\w+/ig)





			if(change === true)
				pokemon[species]["changes"].push([match, value])
			else if(change === false)
				pokemon[species][match] = value
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

function getLevelUpLearnsetsConversionTable(textLevelUpLearnsetsPointers){
	const lines = textLevelUpLearnsetsPointers.split("\n")
	let conversionTable = {}

	lines.forEach(line => {

		const matchSpecies = line.match(/SPECIES_\w+/i)
		if(matchSpecies != null && /SPECIES_NONE/i.test(line) !== true){
			const value = matchSpecies[0]



			const matchConversion = line.match(/s\w+LevelUpLearnset/i)
			if(matchConversion !== null){
				const index = matchConversion[0]



				if(conversionTable[index] === undefined) // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
					conversionTable[index] = [value]
				else // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
					conversionTable[index].push(value)
			}
		}
	})
	return conversionTable
}

function regexLevelUpLearnsets(textLevelUpLearnsets, conversionTable, pokemon){
	const lines = textLevelUpLearnsets.split("\n")
	let species = []

	lines.forEach(line => {
		const matchConversion = line.match(/s\w+LevelUpLearnset/i)
		if(matchConversion !== null){
			const index = matchConversion[0]
			species = conversionTable[index]
		}



		const matchLevelMove = line.match(/(\d+) *, *(MOVE_\w+)/i)
		if(matchLevelMove !== null){
			const level = parseInt(matchLevelMove[1])
			const move = matchLevelMove[2]
			for(let i = 0; i < species.length; i++)
				pokemon[species[i]]["levelUpLearnsets"].push([move, level])
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
	const lines = textTMHMLearnsets.split("\n")
	let species = null

	lines.forEach(line => {
		const matchSpecies = line.match(/SPECIES_\w+/i)
		if(matchSpecies !== null){
			species = matchSpecies[0]
		}




		const matchTmhmMove = line.match(/TMHM\d* *\((\w+ *\d+) *_ *(\w+)/i)
		if(matchTmhmMove !== null){
			const TMHM = matchTmhmMove[1]
			let move = matchTmhmMove[2]
			if(move === "SOLARBEAM")
				move = "SOLAR_BEAM" // Fuck Oldplayer :)
			move = `MOVE_${move}`

			pokemon[species]["TMHMLearnsets"].push([move, TMHM])
		}
	})



	return altFormsLearnsets(pokemon, "forms", "TMHMLearnsets")
}












































async function getEvolution(pokemon){
	const rawEvolution = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/evolution.h")
	const textEvolution = await rawEvolution.text()

	return regexEvolution(textEvolution, pokemon)
}



function regexEvolution(textEvolution, pokemon){
	const lines = textEvolution.split("\n")
	let species

	lines.forEach(line =>{

		const matchSpecies = line.match(/\[ *(SPECIES_\w+) *\]/i)
		if(matchSpecies !== null)
			species = matchSpecies[1]





		const matchEvoInfo = line.match(/(\w+), *(\w+), *(\w+)/)
		if(matchEvoInfo !== null){
			const method = matchEvoInfo[1]
			const condition = matchEvoInfo[2]
			const targetSpecies = matchEvoInfo[3]
			pokemon[species]["evolution"].push([method, condition, targetSpecies])
		}
	})


	return getEvolutionLine(pokemon)
}



function getEvolutionLine(pokemon){
	for (const species of Object.keys(pokemon)){

		for (let j = 0; j < pokemon[species]["evolution"].length; j++){

			const targetSpecies = pokemon[species]["evolution"][j][2]
			pokemon[species]["evolutionLine"].push(targetSpecies)
		}



		for (let j = 0; j < pokemon[species]["evolution"].length; j++){

			const targetSpecies = pokemon[species]["evolution"][j][2]
			pokemon[targetSpecies]["evolutionLine"] = pokemon[species]["evolutionLine"]
		}
	}

	for (const species of Object.keys(pokemon))
		pokemon[species]["evolutionLine"] = Array.from(new Set(pokemon[species]["evolutionLine"])) // remove duplicates


	return pokemon
}
















































async function getForms(pokemon){
	const rawForms = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/pokemon/form_species_tables.h")
	const textForms = await rawForms.text()

	return regexForms(textForms, pokemon)
}

function regexForms(textForms, pokemon){
	const lines = textForms.split("\n")
	let speciesArray = []

	lines.forEach(line => {
		const matchSpecies = line.match(/SPECIES_\w+/i)
		
		if(/FORM_SPECIES_END/i.test(line)){
			for (let i = 0; i < speciesArray.length; i++)
				pokemon[speciesArray[i]]["forms"] = speciesArray
			speciesArray = []
		}
		else if(matchSpecies !== null){
			const species = matchSpecies[0]
			speciesArray.push(species)
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
	const lines = textEggMoves.split("\n")
	const speciesString = JSON.stringify(Object.keys(pokemon))
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


	return altFormsLearnsets(pokemon, "evolutionLine", "eggMovesLearnsets")
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
		pokemon[key]["sprite"] = ""
	}
	return pokemon
}





function altFormsLearnsets(pokemon, input, output){
	for (const species of Object.keys(pokemon)){

		if(pokemon[species][input].length >= 2){

				for (let j = 0; j < pokemon[species][input].length; j++){
					const targetSpecies = pokemon[species][input][j]

					if(pokemon[targetSpecies][output].length <= 0)
						pokemon[targetSpecies][output] = pokemon[species][output]
				}
		}
	}
	return pokemon
}
