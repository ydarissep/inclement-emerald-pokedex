async function getAbilities(abilities){
    footerP("Fetching abilities")
    const rawAbilities = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/text/abilities.h")
    const textAbilities = await rawAbilities.text()

    return regexAbilities(textAbilities, abilities)
}

async function buildAbilitiesObj(){
    let abilities = {}
    abilities = await getAbilities(abilities) 
    delete abilities["ABILITY_NONE"]
    delete abilities["ABILITY_NAME_LENGTH"]

    await localStorage.setItem("abilities", LZString.compressToUTF16(JSON.stringify(abilities)))
}


async function fetchAbilitiesObj(){
    if(!localStorage.getItem("abilities"))
        await buildAbilitiesObj()

    window.abilities = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("abilities")))
    
    await displayAbilities()
}