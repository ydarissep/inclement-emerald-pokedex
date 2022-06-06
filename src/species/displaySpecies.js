function updateDisplayedSpecies(input){
    const inputArray = input.toLowerCase().split(" ")
    let hideRows = {}
    const tBody = speciesTableTbody
    let k = 0
    for (let j = 0; j < tBody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < 3; i++){
            compareValue += tBody.rows[j].cells[2+i].innerText.toLowerCase() + " "
        }
        for (let i = 0; i < inputArray.length; i++){
            if(!compareValue.includes(inputArray[i]))
                hideRows[j.toString()] = "hide"
        }
    }
    for(let i = 0; i < tBody.rows.length; i++){
        if(hideRows[i] !== undefined)
            tBody.rows[i].className = "hide"
        else
            tBody.rows[i].classList.remove("hide")
        if(k <= 75){
            if(!tBody.rows[i].classList.contains("hide")){
                tBody.rows[i].classList.remove("hideTemp")
                k++
            }
        }
        else
            tBody.rows[i].className = "hideTemp"
    }
}






function speciesButtonClick(){
    speciesTable.classList.add("active")
}









function displaySpecies(){
    let tBody = speciesTableTbody
    const speciesArray = Object.keys(species)
    tBody.innerText = ""
    for (let i = 0; i < speciesArray.length; i++){
        const speciesName = speciesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        row.className = "hideTemp"


        let IDcontainer = document.createElement("td")
        let ID = document.createElement("div")
        ID.className = "ID"
        ID.innerText = species[speciesName]["ID"]
        IDcontainer.append(ID)
        row.append(IDcontainer)


        let sprite = document.createElement("td")
        let canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        renderSprite(species[speciesName]["sprite"], canvas)
        sprite.className = "Sprite"
        sprite.append(canvas)
        row.append(sprite)


        let nameContainer = document.createElement("td")
        let name = document.createElement("div")
        name.className = "name"
        name.innerText = sanitizeString(species[speciesName]["species"])
        nameContainer.append(name)
        row.append(nameContainer)


        let typesContainer = document.createElement("td")
        let types = document.createElement("div")
        let type1 = document.createElement("div")
        let type2 = document.createElement("div")
        types.className = "Type"
        type1.innerText = sanitizeString(species[speciesName]["type1"])
        type2.innerText = sanitizeString(species[speciesName]["type2"])
        type1.className = species[speciesName]["type1"]
        type2.className = species[speciesName]["type2"]
        types.append(type1)
        if(type1.innerText !== type2.innerText)
            types.append(type2)
        typesContainer.append(types)
        row.append(typesContainer)


        let abilities = document.createElement("td")
        let ability1 = document.createElement("div")
        let ability2 = document.createElement("div")
        let HA = document.createElement("div")
        abilities.className = "Abilities"
        const abilitiesArray = sanitizeString(Array.from(new Set(species[speciesName]["abilities"])).join(' ')).split("\n")
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


        let baseStatsContainer = document.createElement("td")
        baseStatsContainer.colSpan = 7
        baseStatsContainer.className = "baseStats"

        let HPContainer = document.createElement("div")
        let HP = document.createElement("div")
        let headerHP = document.createElement("div")
        headerHP.innerText = "HP"
        headerHP.style.display = "none"
        HP.className = "BASESTATS_HP HP"
        HP.innerText = species[speciesName]["baseHP"]
        HPContainer.append(headerHP)
        HPContainer.append(HP)
        baseStatsContainer.append(HPContainer)


        let AtkContainer = document.createElement("div")
        let Atk = document.createElement("div")
        let headerAtk = document.createElement("div")
        headerAtk.innerText = "Atk"
        headerAtk.style.display = "none"
        Atk.className = "BASESTATS_ATK Atk"
        Atk.innerText = species[speciesName]["baseAttack"]
        AtkContainer.append(headerAtk)
        AtkContainer.append(Atk)
        baseStatsContainer.append(AtkContainer)


        let DefContainer = document.createElement("div")
        let Def = document.createElement("div")
        let headerDef = document.createElement("div")
        headerDef.innerText = "Def"
        headerDef.style.display = "none"
        Def.className = "BASESTATS_DEF Def"
        Def.innerText = species[speciesName]["baseDefense"]
        DefContainer.append(headerDef)
        DefContainer.append(Def)
        baseStatsContainer.append(DefContainer)


        let SpAContainer = document.createElement("div")
        let SpA = document.createElement("div")
        let headerSpA = document.createElement("div")
        headerSpA.innerText = "SpA"
        headerSpA.style.display = "none"
        SpA.className = "BASESTATS_SPA SpA"
        SpA.innerText = species[speciesName]["baseSpAttack"]
        SpAContainer.append(headerSpA)
        SpAContainer.append(SpA)
        baseStatsContainer.append(SpAContainer)


        let SpDContainer = document.createElement("div")
        let SpD = document.createElement("div")
        let headerSpD = document.createElement("div")
        headerSpD.innerText = "SpD"
        headerSpD.style.display = "none"
        SpD.className = "BASESTATS_SPD SpD"
        SpD.innerText = species[speciesName]["baseSpDefense"]
        SpDContainer.append(headerSpD)
        SpDContainer.append(SpD)
        baseStatsContainer.append(SpDContainer)


        let SpeContainer = document.createElement("div")
        let Spe = document.createElement("div")
        let headerSpe = document.createElement("div")
        headerSpe.innerText = "Spe"
        headerSpe.style.display = "none"
        Spe.className = "BASESTATS_SPE Spe"
        Spe.innerText = species[speciesName]["baseSpeed"]
        SpeContainer.append(headerSpe)
        SpeContainer.append(Spe)
        baseStatsContainer.append(SpeContainer)


        let BSTContainer = document.createElement("div")
        let BST = document.createElement("div")
        let headerBST = document.createElement("div")
        headerBST.innerText = "BST"
        headerBST.style.display = "none"
        BST.className = "BASESTATS_BST BST"
        BST.innerText = species[speciesName]["BST"]
        BSTContainer.append(headerBST)
        BSTContainer.append(BST)
        baseStatsContainer.append(BSTContainer)


        row.append(baseStatsContainer)
    }
}