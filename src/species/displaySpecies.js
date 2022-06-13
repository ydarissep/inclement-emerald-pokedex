window.toDataURLObj = {}

function displaySpecies(){
    let tBody = speciesTableTbody
    let count = 0
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


        let spriteContainer = document.createElement("td")
        spriteContainer.className = "sprite"
        if(species[speciesName]["dataURL"] !== ""){
            let sprite = document.createElement("img")
            sprite.src = species[speciesName]["dataURL"]
            spriteContainer.append(sprite)
        }
        else{
            let canvas = renderSprite(speciesName, count++)
            spriteContainer.append(canvas)
        }
        row.append(spriteContainer)
        


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



function renderSprite(speciesName, k){
    let sprite = new Image()
    let canvas = document.createElement("canvas")
    canvas.width = 64
    canvas.height = 64
    sprite.crossOrigin = 'anonymous'
    sprite.src = species[speciesName]["sprite"]

    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)

    sprite.onload = () => {
        context.drawImage(sprite, 0, 0)
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const backgroundColor = []
        for (let i = 0; i < 4; i++) {
          backgroundColor.push(imageData.data[i])
        }
        for (let i = 0; i < imageData.data.length; i += 4) {
          if (
            imageData.data[i] === backgroundColor[0] &&
            imageData.data[i + 1] === backgroundColor[1] &&
            imageData.data[i + 2] === backgroundColor[2]
          ) imageData.data[i + 3] = 0
        }
        context.putImageData(imageData, 0, 0) 

        toDataURLObj[speciesName] = canvas.toDataURL()

        if(k + 1 == Object.keys(species).length){
            for (const name of Object.keys(toDataURLObj)){
                species[name]["dataURL"] = toDataURLObj[name]
            }
            localStorage.setItem("species", LZString.compressToUTF16(JSON.stringify(species)))
        }
    }
    return canvas
}
