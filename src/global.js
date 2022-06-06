const speciesButton = document.getElementById("speciesButton")
const speciesTable = document.getElementById("speciesTable")
const speciesTableThead = document.getElementById("speciesTableThead")
const speciesTableTbody = document.getElementById("speciesTableTbody")
const speciesInput = document.getElementById("speciesInput")
const headerID = document.querySelector("th.ID")
const headerSprite = document.querySelector("th.Sprite")
const headerName = document.querySelector("th.Name")
const headerType = document.querySelector("th.Type")
const headerAbilities = document.querySelector("th.Abilities")
const headerHP = document.querySelector("th.HP")
const headerAtk = document.querySelector("th.Atk")
const headerDef = document.querySelector("th.Def")
const headerSpA = document.querySelector("th.SpA")
const headerSpD = document.querySelector("th.SpD")
const headerSpe = document.querySelector("th.Spe")
const headerBST = document.querySelector("th.BST")


speciesButton.addEventListener("click", () => {
    if(!speciesButton.classList.contains("active"))
        speciesButtonClick()
})

headerID.addEventListener("click", () => {
    if(headerID.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 0, false, true)
    else
        sortTableByColumn(speciesTable, 0, true, true)
})
headerSprite.addEventListener("click", () => {
    if(headerID.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 0, false, true)
    else
        sortTableByColumn(speciesTable, 0, true, true)
})
headerName.addEventListener("click", () => {
    if(headerName.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 2, false)
    else
        sortTableByColumn(speciesTable, 2, true)
})
headerType.addEventListener("click", () => {
    if(headerType.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 3, false)
    else
        sortTableByColumn(speciesTable, 3, true)
})
headerAbilities.addEventListener("click", () => {
    if(headerAbilities.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 4, false)
    else
        sortTableByColumn(speciesTable, 4, true)
})
headerHP.addEventListener("click", () => {
    if(headerHP.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 5, false, true)
    else
        sortTableByColumn(speciesTable, 5, true, true)
})
headerAtk.addEventListener("click", () => {
    if(headerAtk.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 6, false, true)
    else
        sortTableByColumn(speciesTable, 6, true, true)
})
headerDef.addEventListener("click", () => {
    if(headerDef.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 7, false, true)
    else
        sortTableByColumn(speciesTable, 7, true, true)
})
headerSpA.addEventListener("click", () => {
    if(headerSpA.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 8, false, true)
    else
        sortTableByColumn(speciesTable, 8, true, true)
})
headerSpD.addEventListener("click", () => {
    if(headerSpD.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 9, false, true)
    else
        sortTableByColumn(speciesTable, 9, true, true)
})
headerSpe.addEventListener("click", () => {
    if(headerSpe.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 10, false, true)
    else
        sortTableByColumn(speciesTable, 10, true, true)
})
headerBST.addEventListener("click", () => {
    if(headerBST.classList.contains("th-sort-asc"))
        sortTableByColumn(speciesTable, 11, false, true)
    else
        sortTableByColumn(speciesTable, 11, true, true)
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
