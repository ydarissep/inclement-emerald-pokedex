function sanitizeString(string){
    const regex = /^SPECIES_|^TYPE_|ABILITY_|^SPECIES_NONE|^ABILITY_NONE|^MOVE_|^SPLIT_|FLAG_/ig
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
        return matchArray.join("\n")
    }
    else
        return unsanitizedString
}








async function displaySetup(){    
    await footerP("")

    await speciesTable.classList.remove("hide")
    await speciesButton.classList.remove("hide")
    await speciesInput.classList.remove("hide")

    await abilitiesButton.classList.remove("hide")
    await movesButton.classList.remove("hide")

    await topButton.classList.remove("hide")
    await speciesTable.classList.add("activeTable")
    await speciesButton.classList.add("activeButton")
    await speciesInput.classList.add("activeInput")
}

async function fetchData(){
    await forceUpdate()

    await fetchSpeciesObj()
    await fetchAbilitiesObj()
    await fetchMovesObj()

    await displaySetup()
}


async function forceUpdate(){
    const update = 15
    if(localStorage.getItem("forceUpdate") != update){
        await localStorage.removeItem("species")
        await localStorage.removeItem("abilities")
        await localStorage.removeItem("moves")
        await localStorage.setItem("forceUpdate", update)
        await footerP("Fetching data please wait... this is only done once.")
    }
}





function footerP(input){
    if(input === "")
        document.querySelectorAll("#footer > p").forEach(paragraph => paragraph.remove())

    const paragraph = document.createElement("p")
    const footer = document.getElementById("footer")
    paragraph.innerText = input
    footer.append(paragraph)
}






function sortTableByClassName(table, className, asc = true, parseINT = false) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`.${className}`).textContent.trim();
        let bColText = b.querySelector(`.${className}`).textContent.trim();

        if(parseINT)
        {
            aColText = parseInt(aColText)
            if(isNaN(aColText))
                aColText = 0
            bColText = parseInt(bColText)
            if(isNaN(bColText))
                bColText = 0
        }

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    lazyLoading(true)

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th.${className}`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th.${className}`).classList.toggle("th-sort-desc", !asc);
}







function filterTableInput(input, columns, tbody){
    const inputArray = input.toLowerCase().split(" ")
    let hideRows = {}
    let k = 0
    for (let j = 0; j < tbody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < columns.length; i++){
            compareValue += tbody.rows[j].cells[columns[i]].innerText.toLowerCase() + " "
        }
        for (let i = 0; i < inputArray.length; i++){
            inputArray[i] = inputArray[i].replace("-", " ")
            if(!compareValue.includes(inputArray[i]))
                hideRows[j] = "hide"
        }
    }
    for(let i = 0; i < tbody.rows.length; i++){
        if(hideRows[i] === "hide")
            tbody.rows[i].classList.add("hide")
        else
            tbody.rows[i].classList.remove("hide")
    }
    lazyLoading(true)
}







function lazyLoading(reset = false){
    const activeTables = document.getElementsByClassName("activeTable")
    let rows = []
    if(activeTables.length > 0)
    {
        rows = activeTables[0].tBodies[0].rows
        let j = 0
        for(let i = 0; i < rows.length; i++){
            if(reset){
                if(j <= 75){
                    if(!rows[i].classList.contains("hide")){
                        rows[i].classList.remove("hideTemp")
                        j++
                    }
                }
                else
                    rows[i].classList.add("hideTemp")
            }
            else{
                if(!rows[i].classList.contains("hide")){
                    if(rows[i].classList.contains("hideTemp")){
                        j++
                        rows[i].classList.remove("hideTemp")
                    }
                }
                if(j >= 75)
                    break
            }
        }
    }
}






async function tableButtonClick(input){
    await lazyLoading(reset = true)
    const activeTable = await document.querySelectorAll(".activeTable")
    const activeButton = await document.querySelectorAll(".activeButton")
    const activeInput = await document.querySelectorAll(".activeInput")

    activeTable.forEach(table => {
        table.classList.remove("activeTable")
        table.classList.add("hide")
    })


    activeButton.forEach(button => {
        button.classList.remove("activeButton")
    })

    activeInput.forEach(input => {
        input.classList.remove("activeInput")
        input.classList.add("hide")
    })

    const targetTable = await document.getElementById(`${input}Table`)
    const targetButton = await document.getElementById(`${input}Button`)
    const targetInput = await document.getElementById(`${input}Input`)

    targetTable.classList.remove("hide")
    targetTable.classList.add("activeTable")

    targetButton.classList.add("activeButton")

    targetInput.classList.remove("hide")
    targetInput.classList.add("activeInput")
}