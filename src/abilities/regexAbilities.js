function regexAbilities(textAbilities, abilities){
    const lines = textAbilities.split("\n")
    let conversionTable = {}

    for(let i = lines.length - 1; i >= 0; i--){
        let ability = lines[i].match(/(ABILITY_\w+)/i) //this is going to get confusing real quick :)
        if(ability !== null){
            ability = ability[0]


            if(abilities[ability] === undefined){
                abilities[ability] = {}
                abilities[ability]["name"] = ability
            }
            

            const matchAbilityIngameName = lines[i].match(/_ *\( *" *(.*)" *\) *,/i)
            if(matchAbilityIngameName !== null){
                const abilityIngameName = matchAbilityIngameName[1]

                abilities[ability]["ingameName"] = abilityIngameName
            }
        }


        const matchConversionDescription = lines[i].match(/s\w+Description/i)
        if(matchConversionDescription !== null){
            const conversionDescription = matchConversionDescription[0]



            if(ability !== null){ // :=)


                if(conversionTable[conversionDescription] === undefined)
                    conversionTable[conversionDescription] = [ability]
                else
                    conversionTable[conversionDescription].push(ability)


            }
            else{
                const matchDescription = lines[i].match(/_ *\( *" *(.*)" *\) *;/i)
                if(matchDescription !== null){
                    const description = matchDescription[1]
                    if(conversionTable[conversionDescription] !== undefined){
                        for(let j = 0; j < conversionTable[conversionDescription].length; j++)
                        abilities[conversionTable[conversionDescription][j]]["description"] = description
                    }
                }
            }
        }
    }
    return abilities
}