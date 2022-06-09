



















function displayAbilities(abilities){
    let tBody = abilitiesTableTbody
    const abilitiesArray = Object.keys(abilities)
    tBody.innerText = ""
    for (let i = 0; i < abilitiesArray.length; i++){
        const abilitiesName = abilitiesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        row.className = "hideTemp"


        let nameContainer = document.createElement("td")
        let name = document.createElement("div")
        nameContainer.className = "name"
        name.innerText = abilities[abilitiesName]["ingameName"]
        nameContainer.append(name)
        row.append(nameContainer)

        let descriptionContainer = document.createElement("td")
        let description = document.createElement("div")
        descriptionContainer.className = "description"
        description.innerText = abilities[abilitiesName]["description"]
        descriptionContainer.append(description)
        row.append(descriptionContainer)
    }
}