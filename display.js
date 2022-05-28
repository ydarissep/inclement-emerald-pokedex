function displaySpecies(pokemon, speciesArrayToDisplay){
    const length = 11
    const tbody = document.getElementById("pokemonSearchResult")
    for (let i = 0; i < speciesArrayToDisplay.length; i++){
        let newSpecies = document.createElement("tr")
        const species = speciesArrayToDisplay[i]
        for(let j = 0; j < length; j++){
            if(j === 0){
                let sprite = document.createElement("td")
                let canvas = document.createElement("canvas")
                canvas.width = 64
                canvas.height = 64
                renderSprite(pokemon[species]["sprite"], canvas)
                sprite.append(canvas)
                newSpecies.append(sprite)
            }
            else if(j === 1){
                let name = document.createElement("td")
                name.innerText = sanitizeString(pokemon[species]["species"])
                newSpecies.append(name)
            }
            else if(j === 2){
                let types = document.createElement("td")
                const type1 = pokemon[species]["type1"]
                const type2 = pokemon[species]["type2"]
                types.innerText = sanitizeString(Array.from(new Set([type1, type2])).join(' / '))
                newSpecies.append(types)
            }
            else if(j === 3){
                let abilities = document.createElement("td")
                abilities.innerText = sanitizeString(Array.from(new Set(pokemon[species]["abilities"])).join(' / '))
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





function renderSprite(url, canvas) {
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



function sanitizeString(string) {
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
    return matchArray.join(" / ")
}