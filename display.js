const pokemonTable = document.getElementById("pokemonSearchTable")
const pokemonInput = document.getElementById("pokemonInput")
const headerID = document.getElementById("ID")
const headerSprite = document.getElementById("Sprite")
const headerName = document.getElementById("Name")
const headerType = document.getElementById("Type")
const headerAbilities = document.getElementById("Abilities")
const headerHP = document.getElementById("HP")
const headerAtk = document.getElementById("Atk")
const headerDef = document.getElementById("Def")
const headerSpA = document.getElementById("SpA")
const headerSpD = document.getElementById("SpD")
const headerSpe = document.getElementById("Spe")
const headerBST = document.getElementById("BST")

headerID.addEventListener("click", () => {
    if(headerID.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 0, false, true)
    else
        sortTableByColumn(pokemonTable, 0, true, true)
})
headerSprite.addEventListener("click", () => {
    if(headerSprite.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 0, false, true)
    else
        sortTableByColumn(pokemonTable, 0, true, true)
})
headerName.addEventListener("click", () => {
    if(headerName.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 2, false)
    else
        sortTableByColumn(pokemonTable, 2, true)
})
headerType.addEventListener("click", () => {
    if(headerType.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 3, false)
    else
        sortTableByColumn(pokemonTable, 3, true)
})
headerAbilities.addEventListener("click", () => {
    if(headerAbilities.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 4, false)
    else
        sortTableByColumn(pokemonTable, 4, true)
})
headerHP.addEventListener("click", () => {
    if(headerHP.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 5, false, true)
    else
        sortTableByColumn(pokemonTable, 5, true, true)
})
headerAtk.addEventListener("click", () => {
    if(headerAtk.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 6, false, true)
    else
        sortTableByColumn(pokemonTable, 6, true, true)
})
headerDef.addEventListener("click", () => {
    if(headerDef.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 7, false, true)
    else
        sortTableByColumn(pokemonTable, 7, true, true)
})
headerSpA.addEventListener("click", () => {
    if(headerSpA.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 8, false, true)
    else
        sortTableByColumn(pokemonTable, 8, true, true)
})
headerSpD.addEventListener("click", () => {
    if(headerSpD.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 9, false, true)
    else
        sortTableByColumn(pokemonTable, 9, true, true)
})
headerSpe.addEventListener("click", () => {
    if(headerSpe.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 10, false, true)
    else
        sortTableByColumn(pokemonTable, 10, true, true)
})
headerBST.addEventListener("click", () => {
    if(headerBST.classList.contains("th-sort-asc"))
        sortTableByColumn(pokemonTable, 11, false, true)
    else
        sortTableByColumn(pokemonTable, 11, true, true)
})

pokemonInput.addEventListener("input", e => {
    const value = e.target.value
    updateDisplayedSpecies(value)
})


function displaySpecies(speciesArrayToDisplay){
    const length = 11
    let tbody = document.getElementById("pokemonSearchResult")
    tbody.innerText = ""
    for (let i = 0; i < speciesArrayToDisplay.length; i++){
        let newSpecies = document.createElement("tr")
        const species = speciesArrayToDisplay[i]
        newSpecies.classList.add("row")

        //ID
        let ID = document.createElement("td")
        ID.className = "hide"
        ID.innerText = pokemon[species]["ID"]
        newSpecies.append(ID)

        //sprite
        let sprite = document.createElement("td")
        let canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        renderSprite(pokemon[species]["sprite"], canvas)
        sprite.append(canvas)
        newSpecies.append(sprite)

        //name
        let name = document.createElement("td")
        name.innerText = sanitizeString(pokemon[species]["species"])
        newSpecies.append(name)

        //types
        let types = document.createElement("td")
        const type1 = pokemon[species]["type1"]
        const type2 = pokemon[species]["type2"]
        types.innerText = sanitizeString(Array.from(new Set([type1, type2])).join(' '))
        newSpecies.append(types)

        //abilities
        let abilities = document.createElement("td")
        abilities.innerText = sanitizeString(Array.from(new Set(pokemon[species]["abilities"])).join(' '))
        newSpecies.append(abilities)

        //base HP
        let baseHP = document.createElement("td")
        baseHP.innerText = pokemon[species]["baseHP"]
        newSpecies.append(baseHP)

        //base Attack
        let baseAttack = document.createElement("td")
        baseAttack.innerText = pokemon[species]["baseAttack"]
        newSpecies.append(baseAttack)

        //base Defense
        let baseDefense = document.createElement("td")
        baseDefense.innerText = pokemon[species]["baseDefense"]
        newSpecies.append(baseDefense)

        //base SpAttack
        let baseSpAttack = document.createElement("td")
        baseSpAttack.innerText = pokemon[species]["baseSpAttack"]
        newSpecies.append(baseSpAttack)

        //base SpDefense
        let baseSpDefense = document.createElement("td")
        baseSpDefense.innerText = pokemon[species]["baseSpDefense"]
        newSpecies.append(baseSpDefense)

        //base Speed
        let baseSpeed = document.createElement("td")
        baseSpeed.innerText = pokemon[species]["baseSpeed"]
        newSpecies.append(baseSpeed)

        //BST
        let BST = document.createElement("td")
        BST.innerText = pokemon[species]["baseHP"] + pokemon[species]["baseAttack"] + pokemon[species]["baseDefense"] + pokemon[species]["baseSpAttack"] + pokemon[species]["baseSpDefense"] + pokemon[species]["baseSpeed"]
        newSpecies.append(BST)


        tbody.appendChild(newSpecies)
    }
}





function renderSprite(url, canvas){
  const sprite = new Image()
  sprite.crossOrigin = 'anonymous'
  sprite.src = url

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
  }
}


function sanitizeString(string){
    const regex = /SPECIES_|TYPE_|ABILITY_/ig
    const unsanitizedString = string.replace(regex, "")
    let matchArray = unsanitizedString.match(/\w+/g)
    if(matchArray !== null){
        for (i = 0; i < matchArray.length; i++){
            matchArray[i] = matchArray[i].split('_')
            for (j = 0; j < matchArray[i].length; j++){
                matchArray[i][j] = matchArray[i][j][0].toUpperCase() + matchArray[i][j].slice(1).toLowerCase()
            }
            matchArray[i] = matchArray[i].join(" ")
        }
    }
    return matchArray.join("\n")
}


function updateDisplayedSpecies(input){
    const inputArray = input.toLowerCase().split(" ")
    const table = document.getElementById("pokemonSearchResult")
    let hideRows = {}
    for (let j = 0; j < table.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < 3; i++){
            compareValue += table.rows[j].cells[2+i].innerText.toLowerCase() + " "
        }
        for (let i = 0; i < inputArray.length; i++){
            if(!compareValue.includes(inputArray[i]))
                hideRows[j.toString()] = "hide"
        }
    }
    for(let i = 0; i < table.rows.length; i++){
        if(hideRows[i] !== undefined)
            table.rows[i].className = "hide"
        else
            table.rows[i].classList.remove("hide")
    }
    table.insertBefore(table.rows[2], table.rows[1])
}

function displaySetup(){
    document.getElementById("pokemonSearchTable").classList.remove("hide")
    document.getElementById("pokemonInput").classList.remove("hide")
}


function sortTableByColumn(table, column, asc = true, parseInteger = false) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        if(parseInteger)
        {
            aColText = parseInt(aColText)
            bColText = parseInt(bColText)
        }
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}