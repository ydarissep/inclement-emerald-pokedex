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

const movesInput = document.getElementById("movesInput")
const movesButton = document.getElementById("movesButton")
const movesTable = document.getElementById("movesTable")
const movesTableThead = document.getElementById("movesTableThead")
const movesTableTbody = document.getElementById("movesTableTbody")


const headerAbilitiesName = document.querySelector("#abilitiesTableThead th.ability")
const headerAbilitiesDescription = document.querySelector("#abilitiesTableThead th.description")

const headerMovesType = document.querySelector("#movesTableThead th.type")
const headerMovesMove = document.querySelector("#movesTableThead th.move")
const headerMovesPower = document.querySelector("#movesTableThead th.power")
const headerMovesAccuracy = document.querySelector("#movesTableThead th.accuracy")
const headerMovesPP = document.querySelector("#movesTableThead th.PP")
const headerMovesPriority = document.querySelector("#movesTableThead th.priority")
const headerMovesDescription = document.querySelector("#movesTableThead th.description")

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
movesButton.addEventListener("click", () => {
    if(!movesButton.classList.contains("activeButton"))
        tableButtonClick("moves")
})






headerAbilitiesName.addEventListener("click", () => {
    if(headerAbilitiesName.classList.contains("th-sort-desc"))
        sortTableByClassName(abilitiesTable, "ability", asc = true)
    else
        sortTableByClassName(abilitiesTable, "ability", asc = false)
})
headerAbilitiesDescription.addEventListener("click", () => {
    if(headerAbilitiesDescription.classList.contains("th-sort-desc"))
        sortTableByClassName(abilitiesTable, "description", asc = true)
    else
        sortTableByClassName(abilitiesTable, "description", asc = false)
})







headerMovesType.addEventListener("click", () => {
    if(headerMovesType.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "type", asc = true)
    else
        sortTableByClassName(movesTable, "type", asc = false)
})
headerMovesMove.addEventListener("click", () => {
    if(headerMovesMove.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "move", asc = true)
    else
        sortTableByClassName(movesTable, "move", asc = false)
})
headerMovesPower.addEventListener("click", () => {
    if(headerMovesPower.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "power", asc = true, parseINT = true)
    else
        sortTableByClassName(movesTable, "power", asc = false, parseINT = true)
})
headerMovesAccuracy.addEventListener("click", () => {
    if(headerMovesAccuracy.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "accuracy", asc = true, parseINT = true)
    else
        sortTableByClassName(movesTable, "accuracy", asc = false, parseINT = true)
})
headerMovesPP.addEventListener("click", () => {
    if(headerMovesPP.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "PP", asc = true, parseINT = true)
    else
        sortTableByClassName(movesTable, "PP", asc = false, parseINT = true)
})
headerMovesPriority.addEventListener("click", () => {
    if(headerMovesPriority.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "priority", asc = true, parseINT = true)
    else
        sortTableByClassName(movesTable, "priority", asc = false, parseINT = true)
})
headerMovesDescription.addEventListener("click", () => {
    if(headerMovesDescription.classList.contains("th-sort-desc"))
        sortTableByClassName(movesTable, "description", asc = true)
    else
        sortTableByClassName(movesTable, "description", asc = false)
})







headerSpeciesID.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "ID", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "ID", asc = false, parseINT = true)
})
headerSpeciesSprite.addEventListener("click", () => {
    if(headerSpeciesID.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "ID", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "ID", asc = false, parseINT = true)
})
headerSpeciesName.addEventListener("click", () => {
    if(headerSpeciesName.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "species", asc = true)
    else
        sortTableByClassName(speciesTable, "species", asc = false)
})
headerSpeciesTypes.addEventListener("click", () => {
    if(headerSpeciesTypes.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "types", asc = true)
    else
        sortTableByClassName(speciesTable, "types", asc = false)
})
headerSpeciesAbilities.addEventListener("click", () => {
    if(headerSpeciesAbilities.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "abilities", asc = true)
    else
        sortTableByClassName(speciesTable, "abilities", asc = false)
})
headerSpeciesHP.addEventListener("click", () => {
    if(headerSpeciesHP.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseHP", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseHP", asc = false, parseINT = true)
})
headerSpeciesAtk.addEventListener("click", () => {
    if(headerSpeciesAtk.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseAttack", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseAttack", asc = false, parseINT = true)
})
headerSpeciesDef.addEventListener("click", () => {
    if(headerSpeciesDef.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseDefense", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseDefense", asc = false, parseINT = true)
})
headerSpeciesSpA.addEventListener("click", () => {
    if(headerSpeciesSpA.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseSpAttack", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpAttack", asc = false, parseINT = true)
})
headerSpeciesSpD.addEventListener("click", () => {
    if(headerSpeciesSpD.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseSpDefense", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpDefense", asc = false, parseINT = true)
})
headerSpeciesSpe.addEventListener("click", () => {
    if(headerSpeciesSpe.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "baseSpeed", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "baseSpeed", asc = false, parseINT = true)
})
headerSpeciesBST.addEventListener("click", () => {
    if(headerSpeciesBST.classList.contains("th-sort-desc"))
        sortTableByClassName(speciesTable, "BST", asc = true, parseINT = true)
    else
        sortTableByClassName(speciesTable, "BST", asc = false, parseINT = true)
})







speciesInput.addEventListener("input", e => {
    const value = e.target.value
    filterTableInput(value, [2, 3, 4], speciesTableTbody)
})
abilitiesInput.addEventListener("input", e => {
    const value = e.target.value
    filterTableInput(value, [0, 1], abilitiesTableTbody)
})
movesInput.addEventListener("input", e => {
    const value = e.target.value
    filterTableInput(value, [0, 1, 6], movesTableTbody)
})









window.onbeforeunload = () => {  
    window.scrollTo(0, 0);
}

function isTouching(entries){
    if(entries[0].isIntersecting)
        lazyLoading(false)
}



const options = {
        root: null,
        rootMargins: "0px",
        threshold: 0
}
const observer = new IntersectionObserver(isTouching, options)
observer.observe(document.querySelector("#footer"))


fetchData()

displaySetup()