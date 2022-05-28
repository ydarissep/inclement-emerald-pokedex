function displaySpecies(pokemon, speciesArrayToDisplay){
    const length = 11
    const tbody = document.getElementById("pokemonSearchResult")
    for (let i = 0; i < speciesArrayToDisplay.length; i++){
        let newSpecies = document.createElement("tr")
        const species = speciesArrayToDisplay[i]
        for(let j = 0; j < length; j++){
            if(j === 0){
                let sprite = document.createElement("td")
                let img = document.createElement("img")
                img.src = pokemon[species]["sprite"]
                sprite.append(img)
                newSpecies.append(sprite)
            }
            else if(j === 1){
                let name = document.createElement("td")
                name.innerText = pokemon[species]["species"]
                newSpecies.append(name)
            }
            else if(j === 2){
                let types = document.createElement("td")
                types.innerText = pokemon[species]["type1"]+"/"+pokemon[species]["type2"]
                newSpecies.append(types)
            }
            else if(j === 3){
                let abilities = document.createElement("td")
                abilities.innerText = pokemon[species]["abilities"][0]+" / "+pokemon[species]["abilities"][1]+" / "+pokemon[species]["abilities"][2]
                newSpecies.append(abilities)
            }
            else if(j === 4){
                let baseHP = document.createElement("td")
                baseHP.innerText = pokemon[species]["baseHP"]
                newSpecies.append(baseHP)
            }
            else if(j === 5){
                let baseAttack = document.createElement("td")
                baseAttack.innerText = pokemon[species]["baseAttack"]
                newSpecies.append(baseAttack)
            }
            else if(j === 6){
                let baseDefense = document.createElement("td")
                baseDefense.innerText = pokemon[species]["baseDefense"]
                newSpecies.append(baseDefense)
            }
            else if(j === 7){
                let baseSpAttack = document.createElement("td")
                baseSpAttack.innerText = pokemon[species]["baseSpAttack"]
                newSpecies.append(baseSpAttack)
            }
            else if(j === 8){
                let baseSpDefense = document.createElement("td")
                baseSpDefense.innerText = pokemon[species]["baseSpDefense"]
                newSpecies.append(baseSpDefense)
            }
            else if(j === 9){
                let baseSpeed = document.createElement("td")
                baseSpeed.innerText = pokemon[species]["baseSpeed"]
                newSpecies.append(baseSpeed)
            }
            else if(j === 10){
                let BST = document.createElement("td")
                BST.innerText = pokemon[species]["baseHP"] + pokemon[species]["baseAttack"] + pokemon[species]["baseDefense"] + pokemon[species]["baseSpAttack"] + pokemon[species]["baseSpDefense"] + pokemon[species]["baseSpeed"]
                newSpecies.append(BST)
            }
        }
        tbody.appendChild(newSpecies)
    }
}