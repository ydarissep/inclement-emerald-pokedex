function updateDisplayedSpecies(input){
    const inputArray = input.toLowerCase().split(" ")
    const table = document.getElementById("speciesSearchResult")
    let hideRows = {}
    let k = 0
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
        if(k <= 75){
            if(!table.rows[i].classList.contains("hide")){
                table.rows[i].classList.remove("hideTemp")
                k++
            }
        }
        else
            table.rows[i].className = "hideTemp"
    }
}






function speciesButtonClick(){
    speciesTable.classList.add("active")
}









function displaySpecies(){
    let tBody = document.getElementById("speciesSearchResult")
    const speciesArray = Object.keys(species)
    tBody.innerText = ""
    for (let i = 0; i < speciesArray.length; i++){
        const name = speciesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        row.className = "hideTemp"

        let ID = document.createElement("td")
        ID.innerText = species[name]["ID"]
        row.append(ID)

        let sprite = document.createElement("td")
        let canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        renderSprite(species[name]["sprite"], canvas)
        sprite.alt = sanitizeString(species[name]["species"])
        sprite.append(canvas)
        row.append(sprite)

        let speciesName = document.createElement("td")
        speciesName.innerText = sanitizeString(species[name]["species"])
        row.append(speciesName)

        let types = document.createElement("td")
        let type1 = document.createElement("div")
        let type2 = document.createElement("div")
        type1.innerText = sanitizeString(species[name]["type1"])
        type2.innerText = sanitizeString(species[name]["type2"])
        type1.className = species[name]["type1"]
        type2.className = species[name]["type2"]
        types.append(type1)
        if(type1.innerText !== type2.innerText)
            types.append(type2)
        row.append(types)


        //let abilities = row.insertCell().innerText = sanitizeString(Array.from(new Set(species[name]["abilities"])).join(' ')).split("\n")

        let abilities = document.createElement("td")
        let ability1 = document.createElement("div")
        let ability2 = document.createElement("div")
        let HA = document.createElement("div")
        abilities.className = "abilities"
        const abilitiesArray = sanitizeString(Array.from(new Set(species[name]["abilities"])).join(' ')).split("\n")
        for (let j = 0; j < abilitiesArray.length; j++){
            if(j === 0){
                ability1.innerText = abilitiesArray[j]
                abilities.append(ability1)
            }
            else if(j === 1){
                ability2.innerText = abilitiesArray[j]
                abilities.append(ability2)
            }                
            else if(j === 2){
                HA.innerText = abilitiesArray[j]
                abilities.append(HA)
            }                
        }
        row.append(abilities)

        let baseHP = document.createElement("td")
        baseHP.innerText = species[name]["baseHP"]
        row.append(baseHP)

        let baseAttack = document.createElement("td")
        baseAttack.innerText = species[name]["baseAttack"]
        row.append(baseAttack)

        let baseDefense = document.createElement("td")
        baseDefense.innerText = species[name]["baseDefense"]
        row.append(baseDefense)

        let baseSpAttack = document.createElement("td")
        baseSpAttack.innerText = species[name]["baseSpAttack"]
        row.append(baseSpAttack)

        let baseSpDefense = document.createElement("td")
        baseSpDefense.innerText = species[name]["baseSpDefense"]
        row.append(baseSpDefense)

        let baseSpeed = document.createElement("td")
        baseSpeed.innerText = species[name]["baseSpeed"]
        row.append(baseSpeed)

        let BST = document.createElement("td")
        BST.innerText = species[name]["BST"]
        row.append(BST)
    }
}