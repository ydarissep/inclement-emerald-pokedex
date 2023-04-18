async function getAbilities(abilities){
    footerP("Fetching abilities")
    const rawAbilities = await fetch(`https://raw.githubusercontent.com/${repo}/src/data/text/abilities.h`)
    const textAbilities = await rawAbilities.text()

    return regexAbilities(textAbilities, abilities)
}

async function buildAbilitiesObj(){
    let abilities = {}
    abilities = await getAbilities(abilities) 
    delete abilities["ABILITY_NONE"]
    delete abilities["ABILITY_NAME_LENGTH"]

    await localStorage.setItem("abilities", LZString.compressToUTF16(JSON.stringify(abilities)))
    return abilities
}


async function fetchAbilitiesObj(){
    if(!localStorage.getItem("abilities")){
        window.abilities = await buildAbilitiesObj()
    }
    else{
        window.abilities = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("abilities")))
    }

    window.abilitiesTracker = []
    for(let i = 0, j = Object.keys(abilities).length; i < j; i++){
        abilitiesTracker[i] = {}
        abilitiesTracker[i]["key"] = Object.keys(abilities)[i]
        abilitiesTracker[i]["filter"] = []
    }
}
