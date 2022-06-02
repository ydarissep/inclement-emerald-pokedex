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



async function displaySetup(){
    await fetchSpeciesObj()
    
    await document.getElementById("speciesButton").classList.remove("hide")
    await document.getElementById("speciesSearchTable").classList.remove("hide")
    await document.getElementById("speciesInput").classList.remove("hide")
    await speciesTable.classList.add("active")

    const options = {
        root: null,
        rootMartings: "0px",
        threshold: 0.5
    }
    const observer = await new IntersectionObserver(isTouching, options)
    await observer.observe(document.querySelector("footer"))
}

function speciesButtonClick(){
    speciesTable.classList.add("active")
}


function sortTableByColumn(table, column, asc = true, parseInteger = false) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    let j = 0


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


    for(let i = 0; i < rows.length; i++){
        if(j <= 75){
            if(!rows[i].classList.contains("hide")){
                rows[i].classList.remove("hideTemp")
                j++
            }
        }
        else
            rows[i].className = "hideTemp"
    }

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}



function isTouching(entries){
    if(entries[0].isIntersecting){
        let j = 0
        for(let i = 0; i < Object.keys(species).length; i++){
            if(speciesResult.rows[i].classList.contains("hideTemp")){
                j++
                speciesResult.rows[i].classList.remove("hideTemp")
            }
            if(j >= 75)
                break
        }
    }
}

