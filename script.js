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








function regexEggMovesLearnsets(textEggMoves, pokemon){
	const lines = textEggMoves.split("\n")
	const speciesString = JSON.stringify(Object.keys(pokemon))
	let species = null

	lines.forEach(line => {
		if(/egg_moves/i.test(line))
			species = null
		const matchMove = line.match(/MOVE_\w+/i)
		if(matchMove !== null){
			const move = matchMove[0]
			if(species !== null)
				pokemon[species]["eggMovesLearnsets"].push(move)
		}
		else if(species === null){
			const matchLine = line.match(/(\w+),/i)
			if(matchLine !== null){
				const testSpecies = `SPECIES_${speciesString.match(matchLine[1])}`
				if(speciesString.includes(testSpecies))
					species = testSpecies
			}
		}
	})


	return altFormsLearnsets(pokemon, "evolutionLine", "eggMovesLearnsets")
}









function getSpriteConversionTable(textFrontPicTable, pokemon){
	const lines = textFrontPicTable.split("\n")
    const speciesString = JSON.stringify(Object.keys(pokemon))
    let conversionTable = {}

    lines.forEach(line => {

        const matchConversionSpecies = line.match(/(\w+) *, *(gMonFrontPic_\w+)/i)
        if(matchConversionSpecies != null){

            const testSpecies = `SPECIES_${matchConversionSpecies[1]}`
            if(speciesString.includes(testSpecies)){
                const species = testSpecies
                const index = matchConversionSpecies[2]

                if(conversionTable[index] === undefined) // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
                    conversionTable[index] = [species]
                else // DO NOT TOUCH THAT FUTURE ME, THIS IS THE WAY, DON'T QUESTION ME
                    conversionTable[index].push(species)
            }
        }
    })
    return conversionTable
}

function regexSprite(textSprite, conversionTable, pokemon){
    const lines = textSprite.split("\n")
    const conversionTableString = JSON.stringify(Object.keys(conversionTable))

    lines.forEach(line => {
        const matchgMonFrontPic = line.match(/gMonFrontPic_\w+/i)
        if(matchgMonFrontPic !== null){

            const conversion = matchgMonFrontPic[0]
            if(conversionTableString.includes(conversion)){
                const species = conversionTable[conversion]

                const matchPath = line.match(/graphics\/pokemon\/(\w+\/\w+\/\w+\/\w+\/\w+|\w+\/\w+\/\w+\/\w+|\w+\/\w+\/\w+|\w+\/\w+|\w+)\//i) // ¯\_(ツ)_/¯
                if(matchPath !== null){
                    const path = matchPath[1]
                    const url = `https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/graphics/pokemon/${path}/front.png`
                    for(let i = 0; i < conversionTable[conversion].length; i++)
                        pokemon[conversionTable[conversion][i]]["sprite"] = url
                }
            }
        }
    })
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