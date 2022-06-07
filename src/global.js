const speciesButton = document.getElementById("speciesButton")
const speciesTable = document.getElementById("speciesTable")
const speciesTableThead = document.getElementById("speciesTableThead")
const speciesTableTbody = document.getElementById("speciesTableTbody")
const speciesInput = document.getElementById("speciesInput")
const headerID = document.querySelector("th.ID")
const headerSprite = document.querySelector("th.sprite")
const headerName = document.querySelector("th.species")
const headerType = document.querySelector("th.types")
const headerAbilities = document.querySelector("th.abilities")
const headerHP = document.querySelector("th.baseHP")
const headerAtk = document.querySelector("th.baseAttack")
const headerDef = document.querySelector("th.baseDefense")
const headerSpA = document.querySelector("th.baseSpAttack")
const headerSpD = document.querySelector("th.baseSpDefense")
const headerSpe = document.querySelector("th.baseSpeed")
const headerBST = document.querySelector("th.BST")


speciesButton.addEventListener("click", () => {
    if(!speciesButton.classList.contains("active"))
        speciesButtonClick()
})

headerID.addEventListener("click", () => {
    if(headerID.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "ID", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "ID", asc = true, parseINT = true)
})
headerSprite.addEventListener("click", () => {
    if(headerID.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "ID", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "ID", asc = true, parseINT = true)
})
headerName.addEventListener("click", () => {
    if(headerName.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "species", asc = false)
    else
        sortTableByColumn(speciesTable, "species", asc = true)
})
headerType.addEventListener("click", () => {
    if(headerType.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "types", asc = false)
    else
        sortTableByColumn(speciesTable, "types", asc = true)
})
headerAbilities.addEventListener("click", () => {
    if(headerAbilities.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "abilities", asc = false)
    else
        sortTableByColumn(speciesTable, "abilities", asc = true)
})
headerHP.addEventListener("click", () => {
    if(headerHP.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseHP", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseHP", asc = true, parseINT = true)
})
headerAtk.addEventListener("click", () => {
    if(headerAtk.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseAttack", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseAttack", asc = true, parseINT = true)
})
headerDef.addEventListener("click", () => {
    if(headerDef.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseDefense", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseDefense", asc = true, parseINT = true)
})
headerSpA.addEventListener("click", () => {
    if(headerSpA.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseSpAttack", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseSpAttack", asc = true, parseINT = true)
})
headerSpD.addEventListener("click", () => {
    if(headerSpD.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseSpDefense", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseSpDefense", asc = true, parseINT = true)
})
headerSpe.addEventListener("click", () => {
    if(headerSpe.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "baseSpeed", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "baseSpeed", asc = true, parseINT = true)
})
headerBST.addEventListener("click", () => {
    if(headerBST.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, "BST", asc = false, parseINT = true)
    else
        sortTableByColumn(speciesTable, "BST", asc = true, parseINT = true)
})
speciesInput.addEventListener("input", e => {
    const value = e.target.value
    updateDisplayedSpecies(value)
})


window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};

function isTouching(entries){
    if(entries[0].isIntersecting)
        lazyLoading(false)
}
