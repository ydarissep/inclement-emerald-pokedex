function sanitizeString(string){
    const regex = /^SPECIES_|^TYPE_|ABILITY_|^SPECIES_NONE|^ABILITY_NONE|^MOVE_|^SPLIT_|FLAG_|^EFFECT_|^ITEM_/ig
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








async function fetchData(){
    await forceUpdate()

    await fetchMovesObj()
    await fetchAbilitiesObj()
    await fetchSpeciesObj()


    await displaySetup()
}





async function displaySetup(){    
    await footerP("")


    await tableInput.classList.remove("hide")

    await tableButton.classList.remove("hide")

    await tableFilter.classList.remove("hide")

    await table.classList.remove("hide")

    await topButton.classList.remove("hide")
}





async function forceUpdate(){
    const update = 5
    if(localStorage.getItem("update") != update){
        await localStorage.clear()
        await localStorage.setItem("update", update)
        await footerP("Fetching data please wait... this is only run once")
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
    const inputArray = input.toLowerCase().replace(/-|'/g, " ").split(" ")
    let hideRows = {}
    for (let j = 0; j < tbody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < columns.length; i++){
            compareValue += `${tbody.rows[j].cells[columns[i]].textContent.toLowerCase()} `
        }
        for (let i = 0; i < inputArray.length; i++){
            if(!compareValue.includes(inputArray[i])){
                hideRows[j] = "hide"
                break
            }
        }
    }
    for(let i = 0; i < tbody.rows.length; i++){
        if(hideRows[i] !== undefined)
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
                    if(!rows[i].classList.contains("hide") && !rows[i].className.includes("hideFilter")){
                        rows[i].classList.remove("hideTemp")
                        j++
                    }
                }
                else
                    rows[i].classList.add("hideTemp")
            }
            else{
                if(!rows[i].classList.contains("hide") && !rows[i].className.includes("hideFilter")){
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
    const activeFilter = await document.querySelectorAll(".activeFilter")

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

    activeFilter.forEach(filter => {
        filter.classList.remove("activeInput")
        filter.classList.add("hide")
    })


    const targetTable = await document.getElementById(`${input}Table`)
    const targetButton = await document.getElementById(`${input}Button`)
    const targetInput = await document.getElementById(`${input}Input`)
    const targetFilter = await document.getElementById(`${input}Filter`)

    targetTable.classList.remove("hide")
    targetTable.classList.add("activeTable")

    targetButton.classList.add("activeButton")

    targetInput.classList.remove("hide")
    targetInput.classList.add("activeInput")

    targetFilter.classList.remove("hide")
    targetFilter.classList.add("activeFilter")
}








function createFilter(list , obj, objInputArray, filterCount, element, labelString, className, isInt = false){


    const activeTables = document.getElementsByClassName("activeTable")
    if(activeTables.length > 0){
        const rows = activeTables[0].tBodies[0].rows

        const filter = document.createElement("div")
        const label = document.createElement("label")
        const input = document.createElement("input")
        const datalist = document.createElement("datalist")
        const button = document.createElement("button")

        filter.setAttribute("id", `filter${filterCount}`)

        label.setAttribute("for", `input${filterCount}`)
        label.innerText = labelString

        input.setAttribute("type", "search")
        input.setAttribute("id", `input${filterCount}`)
        input.setAttribute("list", `datalist${filterCount}`)
        
        datalist.setAttribute("id", `datalist${filterCount}`)


        for (let i = 0; i < list.length; i++){
            const option = document.createElement("option")
            option.innerText = list[i]
            datalist.append(option)
        }


        button.setAttribute("type", "button")
        button.setAttribute("id", `button${filterCount}`)
        button.innerText = "X"

        input.addEventListener("input", e => {
            let value = e.target.value
            if(!isInt)
                value = value.replace(/-|'/g, " ").toLowerCase()
            filterInput(value, objInputArray, rows, filterCount, obj, className, isInt)
        })

        button.addEventListener("click", () => {
            for (let i = 0; i < rows.length; i++){
                rows[i].classList.remove(`hideFilter${filterCount}`)
            }
            filter.remove()
            lazyLoading(reset = true)
        })

        filter.append(label)
        filter.append(input)
        filter.append(datalist)
        filter.append(button)
        element.append(filter)
    }
}



function filterInput(value, objInputArray, rows, filterCount, obj, className, isInt = false){
    let hideRows = {}

    for (let j = 0; j < rows.length; j++){


        const key = `${className.toUpperCase()}_${rows[j].querySelector(`.${className}`).textContent.toUpperCase().replace(/ /g, "_")}`

        for (let i = 0; i < objInputArray.length; i++){
            let compareValue = obj[key][objInputArray[i]]
            if(isInt){
                if(compareValue === value || value == ""){
                    hideRows[j] = "show"
                    break                        
                }
            }
            else{
                compareValue = JSON.stringify(compareValue).toLowerCase()
                if(compareValue.includes(value.replace(/ /g, "_"))){
                    hideRows[j] = "show"
                    break
                }
            }
        }
    }


    for(let i = 0; i < rows.length; i++){
        if(hideRows[i] !== "show")
            rows[i].classList.add(`hideFilter${filterCount}`)
        else
            rows[i].classList.remove(`hideFilter${filterCount}`)
    }
    lazyLoading(true)
}



function createOptionArray(objInputArray, obj, isInt = false){
    let list = []
    for (const name of Object.keys(obj)){
        for (let i = 0; i < objInputArray.length; i++){
            let value = obj[name][objInputArray[i]]
            if(!isInt)
                value = sanitizeString(value)
            if(!list.includes(value))
                list.push(value)
        }
    }
    return list
}