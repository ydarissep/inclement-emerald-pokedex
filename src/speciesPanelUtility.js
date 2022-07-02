const graph = document.getElementById("statsGraph")
const graphStats = [...graph.children]
const statDisplays = [...document.querySelectorAll('p > span')]


const speciesPanelMainContainer = document.getElementById("speciesPanelMainContainer")
const speciesPanelCloseButton = document.getElementById("speciesPanelCloseButton")
const speciesName = document.getElementById("speciesName")
const speciesID = document.getElementById("speciesID")
const speciesSprite = document.getElementById("speciesSprite")
const speciesType1 = document.getElementById("speciesType1")
const speciesType2 = document.getElementById("speciesType2")
const speciesAbilities = document.getElementById("speciesAbilities")
const speciesBaseStatsGraph = document.getElementById("speciesBaseStatsGraph")
const speciesEvolutionsContainer = document.getElementById("speciesEvolutionsContainer")
const speciesEvoMethod = document.getElementById("speciesEvoMethod")
const speciesFormes = document.getElementById("speciesFormes")
const speciesFormesText = document.getElementById("speciesFormesText")
const speciesEggGroups = document.getElementById("speciesEggGroups")
const speciesHeldItems = document.getElementById("speciesHeldItems")
const speciesHeldItemsContainer = document.getElementById("speciesHeldItemsContainer")
const speciesChangesContainer = document.getElementById("speciesChangesContainer")

async function createSpeciesPanel(name){
    speciesPanelMainContainer.classList.remove("hide")

    const row = document.getElementById(`${name}`)

    speciesName.innerText = row.getElementsByClassName("species")[0].innerText
    speciesID.innerText = `#${species[name]["ID"]}`

    speciesSprite.src = getSpeciesSpriteSrc(name)

    speciesType1.innerText = sanitizeString(species[name]["type1"])
    speciesType2.innerText = sanitizeString(species[name]["type2"])
    speciesType1.className = `${species[name]["type1"]} background`
    speciesType2.className = `${species[name]["type2"]} background`

    if(speciesType1.innerText === speciesType2.innerText)
        speciesType2.classList.add("hide")
    else
        speciesType2.classList.remove("hide")






    while (speciesAbilities.firstChild)
        speciesAbilities.removeChild(speciesAbilities.firstChild)

    let abilitiesArray = []

    for (let i = 0; i < species[name]["abilities"].length; i++){
        if(species[name]["abilities"][i] !== "ABILITY_NONE" 
        && !abilitiesArray.includes(species[name]["abilities"][i]))
            abilitiesArray.push(species[name]["abilities"][i])
    }

    for (let i = 0; i < abilitiesArray.length; i++){
        const abilityContainer = document.createElement("div")
        const abilityName = document.createElement("span")
        const abilityDescription = document.createElement("span")

        abilityName.innerText = `${sanitizeString(abilities[abilitiesArray[i]]["name"])}`
        abilityDescription.innerText = abilities[abilitiesArray[i]]["description"]

        if(i === abilitiesArray.length - 1 && i > 0)
            abilityName.className = "bold"
        else
            abilityName.className = "italic"
        abilityDescription.className = "speciesPanelAbilitiesDescriptionPadding"
        abilityContainer.className = "flex wrap"

        abilityContainer.append(abilityName)
        abilityContainer.append(abilityDescription)
        speciesAbilities.append(abilityContainer)
    }







    let monStats = [species[name]["baseHP"], 
    species[name]["baseAttack"], 
    species[name]["baseDefense"], 
    species[name]["baseSpAttack"], 
    species[name]["baseSpDefense"], 
    species[name]["baseSpeed"],
    species[name]["BST"]]

    
    graphStats.forEach ((stat, index) => {
        statDisplays[index].innerText = monStats[index]

        if(index !== 6){
            stat.style.width = `${(monStats[index] / 255) * graph.offsetWidth}px`
            stat.style.background = `hsl(${monStats[index]*0.7},85%,45%)`
        }
        else{
            stat.style.width = `${(monStats[index] / 255) * graph.offsetWidth/6}px`
            stat.style.background = `hsl(${(monStats[index]*1)/6},85%,45%)`   
        }
    })



    while (speciesEvolutionsContainer.firstChild) 
        speciesEvolutionsContainer.removeChild(speciesEvolutionsContainer.firstChild);
    while (speciesEvoMethod.firstChild)
        speciesEvoMethod.removeChild(speciesEvoMethod.firstChild)

    if(species[name]["evolutionLine"].length > 1){
        for (let i = 0; i < species[name]["evolutionLine"].length; i++){
            speciesEvolutionsContainer.append(createClickableImgAndName(species[name]["evolutionLine"][i]))
        }
    }

    if(species[name]["evolution"].length === 0){
        const evoMethod = document.createElement("div")
        evoMethod.innerText = "Does not evolve"
        evoMethod.className = "italic"
        speciesEvoMethod.append(evoMethod)
    }
    else{
        for (let i = 0; i < species[name]["evolution"].length; i++){
            const evoMethod = document.createElement("div")
            const sprite = document.createElement("img")
            evoMethod.innerText = `${sanitizeString(species[name]["evolution"][i][0])} (${sanitizeString(species[name]["evolution"][i][1])}) ➝ ${sanitizeString(species[name]["evolution"][i][2])}`
            sprite.src = getSpeciesSpriteSrc(species[name]["evolution"][i][2])
            sprite.className = "miniSprite2"
            evoMethod.className = "evoMethod"
            evoMethod.append(sprite)

            evoMethod.addEventListener("click", () => {
                createSpeciesPanel(species[name]["evolution"][i][2])
            })

            speciesEvoMethod.append(evoMethod)
        }
    }


    while (speciesFormes.firstChild)
        speciesFormes.removeChild(speciesFormes.firstChild)


    if(species[name]["forms"].length === 0)
        speciesFormesText.classList.add("hide")
    else
        speciesFormesText.classList.remove("hide")

    if(species[name]["forms"].length > 1){
        for (let i = 0; i < species[name]["forms"].length; i++){
            speciesFormes.append(createClickableImgAndName(species[name]["forms"][i]))
        }
    }







    while (speciesEggGroups.firstChild) 
        speciesEggGroups.removeChild(speciesEggGroups.firstChild);
    while (speciesHeldItems.firstChild)
        speciesHeldItems.removeChild(speciesHeldItems.firstChild)


    const eggGroup1 = document.createElement("div")
    const eggGroup2 = document.createElement("div")
    eggGroup1.innerText = sanitizeString(species[name]["eggGroup1"])
    eggGroup2.innerText = sanitizeString(species[name]["eggGroup2"])
    speciesEggGroups.append(eggGroup1)
    if(species[name]["eggGroup1"] !== species[name]["eggGroup2"])
        speciesEggGroups.append(eggGroup2)





    if(species[name]["item1"] !== ""){
        const heldItem1 = document.createElement("div")
        heldItem1.innerText = `50% ${sanitizeString(species[name]["item1"])}`
        speciesHeldItems.append(heldItem1)
    }
    if(species[name]["item2"] !== ""){
        const heldItem2 = document.createElement("div")
        heldItem2.innerText = `5% ${sanitizeString(species[name]["item2"])}`
        speciesHeldItems.append(heldItem2)
    }

    if(speciesHeldItems.firstChild)
        speciesHeldItemsContainer.classList.remove("hide")
    else
        speciesHeldItemsContainer.classList.add("hide")


    /*
    if(species[name]["changes"].length !== 0)
        speciesChangesContainer.classList.remove("hide")
    else
        speciesChangesContainer.classList.add("hide")
    */

}






function getSpeciesSpriteSrc(speciesName){
    const row = document.getElementById(`${speciesName}`)
    
    if(row.getElementsByClassName("src")[0].src !== undefined)
        return row.getElementsByClassName("src")[0].src
    else if(row.getElementsByClassName("src")[0].toDataURL() !== undefined)
        return row.getElementsByClassName("src")[0].toDataURL()
    else
        return species[speciesName]["sprite"]
}



function createClickableImgAndName(speciesName){
    const container = document.createElement("div")
    const sprite = document.createElement("img")
    const name = document.createElement("span")

    container.className = "flexCenter flex flexRow hover"

    sprite.src = getSpeciesSpriteSrc(speciesName)
    sprite.className = "miniSprite"

    name.innerText = sanitizeString(species[speciesName]["name"])
    name.className = "underline"


    container.append(sprite)
    container.append(name)

    container.addEventListener("click", () => {
        createSpeciesPanel(speciesName)
    })

    return container
}


speciesPanelCloseButton.addEventListener("click", () => {
    speciesPanelMainContainer.classList.add("hide")
})