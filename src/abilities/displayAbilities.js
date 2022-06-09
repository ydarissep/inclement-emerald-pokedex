function updateDisplayedAbilities(input){
    const inputArray = input.toLowerCase().split(" ")
    let hideRows = {}
    const tBody = abilitiesTableTbody
    let k = 0
    for (let j = 0; j < tBody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < 2; i++){
            compareValue += tBody.rows[j].cells[i].innerText.toLowerCase() + " "
        }
        for (let i = 0; i < inputArray.length; i++){
            if(!compareValue.includes(inputArray[i]))
                hideRows[j] = "hide"
        }
    }
    for(let i = 0; i < tBody.rows.length; i++){
        if(hideRows[i] === "hide")
            tBody.rows[i].classList.add("hide")
        else
            tBody.rows[i].classList.remove("hide")
    }
    lazyLoading(true)
}










function displayAbilities(abilities){
    let tBody = abilitiesTableTbody
    const abilitiesArray = Object.keys(abilities)
    tBody.innerText = ""

    for (let i = 0; i < abilitiesArray.length; i++){
        const abilitiesName = abilitiesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        if(i >= 75)
            row.className = "hideTemp"


        let ability = document.createElement("td")
        ability.className = "ability"
        ability.innerText = abilities[abilitiesName]["ingameName"]
        row.append(ability)

        let description = document.createElement("td")
        description.className = "description"
        description.innerText = abilities[abilitiesName]["description"]
        row.append(description)
    }
}