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
        let row = tBody.insertRow()

        row.className = "hideTemp"

        let ID = document.createElement("td")
        ID.className = "hide"
        ID.innerText = species[name]["ID"]
        row.append(ID)

        let sprite = row.insertCell()
        let canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        renderSprite(species[name]["sprite"], canvas)
        sprite.append(canvas)

        let speciesName = row.insertCell().innerText = sanitizeString(species[name]["species"])


        let type1 = species[name]["type1"]
        let type2 = species[name]["type2"]
        if(type1 === type2)
            type2 = ""
        let types = row.insertCell().innerText = sanitizeString(type1 + " " +type2)


        let abilities = row.insertCell().innerText = sanitizeString(Array.from(new Set(species[name]["abilities"])).join(' '))

        let baseHP = row.insertCell().innerText = species[name]["baseHP"]

        let baseAttack = row.insertCell().innerText = species[name]["baseAttack"]

        let baseDefense = row.insertCell().innerText = species[name]["baseDefense"]

        let baseSpAttack = row.insertCell().innerText = species[name]["baseSpAttack"]

        let baseSpDefense = row.insertCell().innerText = species[name]["baseSpDefense"]

        let baseSpeed = row.insertCell().innerText = species[name]["baseSpeed"]

        let BST = row.insertCell().innerText = species[name]["BST"]
    }
}