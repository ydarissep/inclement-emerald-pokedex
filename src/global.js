const speciesInput = document.getElementById("speciesInput")
const speciesButton = document.getElementById("speciesButton")
const speciesTable = document.getElementById("speciesTable")
const speciesTableThead = document.getElementById("speciesTableThead")
const speciesTableTbody = document.getElementById("speciesTableTbody")

const abilitiesInput = document.getElementById("abilitiesInput")
const abilitiesButton = document.getElementById("abilitiesButton")
const abilitiesTable = document.getElementById("abilitiesTable")
const abilitiesTableThead = document.getElementById("abilitiesTableThead")
const abilitiesTableTbody = document.getElementById("abilitiesTableTbody")

const headerAbilitiesName = document.querySelector("#abilitiesTableThead th.ability")
const headerAbilitiesDescription = document.querySelector("#abilitiesTableThead th.description")


const headerSpeciesID = document.querySelector("#speciesTableThead th.ID")
const headerSpeciesSprite = document.querySelector("#speciesTableThead th.sprite")
const headerSpeciesName = document.querySelector("#speciesTableThead th.species")
const headerSpeciesTypes = document.querySelector("#speciesTableThead th.types")
const headerSpeciesAbilities = document.querySelector("#speciesTableThead th.abilities")
const headerSpeciesHP = document.querySelector("#speciesTableThead th.baseHP")
const headerSpeciesAtk = document.querySelector("#speciesTableThead th.baseAttack")
const headerSpeciesDef = document.querySelector("#speciesTableThead th.baseDefense")
const headerSpeciesSpA = document.querySelector("#speciesTableThead th.baseSpAttack")
const headerSpeciesSpD = document.querySelector("#speciesTableThead th.baseSpDefense")
const headerSpeciesSpe = document.querySelector("#speciesTableThead th.baseSpeed")
const headerSpeciesBST = document.querySelector("#speciesTableThead th.BST")
const topButton = document.querySelector('.topButton')

topButton.onclick = () => {
    window.scrollTo({top: 0, behavior: 'auto'})
    lazyLoading(reset = true)
}


speciesButton.addEventListener("click", () => {
    if(!speciesButton.classList.contains("activeButton"))
        tableButtonClick("species")
})

abilitiesButton.addEventListener("click", () => {
    if(!abilitiesButton.classList.contains("activeButton"))
        tableButtonClick("abilities")  
})




headerAbilitiesName.addEventListener("click", () => {
    if(headerAbilitiesName.classList.contains("th-sort-asc"))
        sortTableByClassName(abilitiesTable, "ability", asc = false)
    else
        sortTableByClassName(abilitiesTable, "ability", asc = true)
})

headerAbilitiesDescription.addEventListener("click", () => {
    if(headerAbilitiesDescription.classList.contains("th-sort-asc"))
        sortTableByClassName(abilitiesTable, "description", asc = false)
    else
        sortTableByClassName(abilitiesTable, "description", asc = true)
})







headerSpeciesID.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "ID", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "ID", asc = true, parseINT = true)
})
headerSpeciesSprite.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "ID", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "ID", asc = true, parseINT = true)
})
headerSpeciesName.addEventListener("click", () => {
    if(headerSpeciesName.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "species", asc = false)
    else
        sortTableByClassName(speciesTable, "species", asc = true)
})
headerSpeciesTypes.addEventListener("click", () => {
    if(headerSpeciesTypes.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "types", asc = false)
    else
        sortTableByClassName(speciesTable, "types", asc = true)
})
headerSpeciesAbilities.addEventListener("click", () => {
    if(headerSpeciesAbilities.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "abilities", asc = false)
    else
        sortTableByClassName(speciesTable, "abilities", asc = true)
})
headerSpeciesHP.addEventListener("click", () => {
    if(headerSpeciesHP.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseHP", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseHP", asc = true, parseINT = true)
})
headerSpeciesAtk.addEventListener("click", () => {
    if(headerSpeciesAtk.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseAttack", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseAttack", asc = true, parseINT = true)
})
headerSpeciesDef.addEventListener("click", () => {
    if(headerSpeciesDef.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseDefense", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseDefense", asc = true, parseINT = true)
})
headerSpeciesSpA.addEventListener("click", () => {
    if(headerSpeciesSpA.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseSpAttack", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpAttack", asc = true, parseINT = true)
})
headerSpeciesSpD.addEventListener("click", () => {
    if(headerSpeciesSpD.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseSpDefense", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpDefense", asc = true, parseINT = true)
})
headerSpeciesSpe.addEventListener("click", () => {
    if(headerSpeciesSpe.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "baseSpeed", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpeed", asc = true, parseINT = true)
})
headerSpeciesBST.addEventListener("click", () => {
    if(headerSpeciesBST.classList.contains("th-sort-asc"))
        sortTableByClassName(speciesTable, "BST", asc = false, parseINT = true)
    else
        sortTableByClassName(speciesTable, "BST", asc = true, parseINT = true)
})




speciesInput.addEventListener("input", e => {
    const value = e.target.value
    updateDisplayedSpecies(value)
})

abilitiesInput.addEventListener("input", e => {
    const value = e.target.value
    updateDisplayedAbilities(value)
})


window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};

function isTouching(entries){
    if(entries[0].isIntersecting)
        lazyLoading(false)
}
