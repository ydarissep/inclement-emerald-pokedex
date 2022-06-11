function updateDisplayedSpecies(input){
    const inputArray = input.toLowerCase().split(" ")
    let hideRows = {}
    const tBody = speciesTableTbody
    let k = 0
    for (let j = 0; j < tBody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < 3; i++){
            compareValue += tBody.rows[j].cells[2+i].innerText.toLowerCase() + " "
        }
        for (let i = 0; i < inputArray.length; i++){
            if(!compareValue.includes(inputArray[i]))
                hideRows[j] = "hide"
        }
    }
    for(let i = 0; i < tBody.rows.length; i++){
        if(hideRows[i] === "hide")
            tBody.rows[i].classList.add("hide")
        else
            tBody.rows[i].classList.remove("hide")
    }
    lazyLoading(true)
}





function displaySpecies(species){
    let tBody = speciesTableTbody
    const speciesArray = Object.keys(species)
    tBody.innerText = ""
    for (let i = 0; i < speciesArray.length; i++){
        const speciesName = speciesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        if(i >= 75)
            row.className = "hideTemp"


        let IDcontainer = document.createElement("td")
        let ID = document.createElement("div")
        IDcontainer.className = "ID"
        ID.innerText = species[speciesName]["ID"]
        IDcontainer.append(ID)
        row.append(IDcontainer)


        let sprite = document.createElement("td")
        let canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        renderSprite(species[speciesName]["sprite"], canvas)
        sprite.className = "sprite"
        sprite.append(canvas)
        row.append(sprite)


        let nameContainer = document.createElement("td")
        let name = document.createElement("div")
        nameContainer.className = "species"
        name.innerText = sanitizeString(species[speciesName]["name"])
        nameContainer.append(name)
        row.append(nameContainer)


        let typesContainer = document.createElement("td")
        let types = document.createElement("div")
        let type1 = document.createElement("div")
        let type2 = document.createElement("div")
        typesContainer.className = "types"
        type1.innerText = sanitizeString(species[speciesName]["type1"])
        type2.innerText = sanitizeString(species[speciesName]["type2"])
        type1.className = `${species[speciesName]["type1"]} background`
        type2.className = `${species[speciesName]["type2"]} background`
        types.append(type1)
        if(type1.innerText !== type2.innerText)
            types.append(type2)
        typesContainer.append(types)
        row.append(typesContainer)


        let abilitiesContainer = document.createElement("td")
        let ability1 = document.createElement("div")
        let ability2 = document.createElement("div")
        let HA = document.createElement("div")
        abilitiesContainer.className = "abilities"
        const abilitiesArray = sanitizeString(Array.from(new Set(species[speciesName]["abilities"])).join(' ')).split("\n")
        for (let j = 0; j < abilitiesArray.length; j++){
            if(j === 0){
                ability1.innerText = abilitiesArray[j]
                abilitiesContainer.append(ability1)
            }
            else if(j === 1){
                ability2.innerText = abilitiesArray[j]
                abilitiesContainer.append(ability2)
            }                
            else if(j === 2){
                HA.innerText = abilitiesArray[j]
                abilitiesContainer.append(HA)
            }                
        }
        row.append(abilitiesContainer)

        let speciesObj = species[speciesName]

        row.append(createBaseStatsContainer("HP", "baseHP", speciesObj))

        row.append(createBaseStatsContainer("Atk", "baseAttack", speciesObj))

        row.append(createBaseStatsContainer("Def", "baseDefense", speciesObj))

        row.append(createBaseStatsContainer("SpA", "baseSpAttack", speciesObj))

        row.append(createBaseStatsContainer("SpD", "baseSpDefense", speciesObj))

        row.append(createBaseStatsContainer("Spe", "baseSpeed", speciesObj))

        row.append(createBaseStatsContainer("BST", "BST", speciesObj))
    }
}


function createBaseStatsContainer(headerText, stats, speciesObj){
    let baseStatsContainer = document.createElement("td")
    let baseStats = document.createElement("div")
    let baseStatsHeader = document.createElement("div") //only used for mobile view


    baseStatsHeader.innerText = headerText //only used for mobile view
    baseStatsHeader.style.display = "none" //only used for mobile view
    baseStatsHeader.className = "baseStatsHeader" //only used for mobile view

    baseStats.className = `baseStatsBold ${stats}` //only used for mobile view

    baseStats.innerText = speciesObj[stats]

    baseStatsContainer.append(baseStatsHeader)
    baseStatsContainer.append(baseStats)
    baseStatsContainer.className = `${stats}Container`

    return baseStatsContainer
}