function updateDisplayedMoves(input){
    const inputArray = input.toLowerCase().split(" ")
    let hideRows = {}
    const tBody = movesTableTbody
    let k = 0
    for (let j = 0; j < tBody.rows.length; j++){
        let compareValue = ""
        for (let i = 0; i < 2; i++){
            compareValue += tBody.rows[j].cells[i].innerText.toLowerCase() + " " // Type + Name
        }
        compareValue += tBody.rows[j].cells[6].innerText.toLowerCase() + " " // Description
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










function displayMoves(moves){
    let tBody = movesTableTbody
    const movesArray = Object.keys(moves)
    tBody.innerText = ""

    for (let i = 0; i < movesArray.length; i++){
        const moveName = movesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        if(i >= 75)
            row.className = "hideTemp"

        let container = document.createElement("td")

        container.className = "type split"

        let type = document.createElement("div")
        type.className = `${moves[moveName]["type"]} background`
        type.innerText = sanitizeString(moves[moveName]["type"])
        container.append(type)

        let split = document.createElement("div")
        split.className = `${moves[moveName]["split"]} background`
        split.innerText = sanitizeString(moves[moveName]["split"])
        container.append(split)

        row.append(container)


        let move = document.createElement("td")
        move.className = "move"
        move.innerText = sanitizeString(moves[moveName]["name"])
        row.append(move)

        const moveObj = moves[moveName]

        row.append(createInputContainer("Power", "power", moveObj))

        row.append(createInputContainer("Acc", "accuracy", moveObj))

        row.append(createInputContainer("PP", "PP", moveObj))

        row.append(createInputContainer("Prio", "priority", moveObj))


        let description = document.createElement("td")
        description.className = "description"
        for(let j = 0; j < moves[moveName]["description"].length; j++){
            const desc = document.createElement("div")
            desc.innerText += moves[moveName]["description"][j].replace("\\n", " ")
            description.append(desc)
        }
        row.append(description)
    }
}


function createInputContainer(headerText, input, moveObj){
    let inputContainer = document.createElement("td")
    let inputValue = document.createElement("div")
    let inputHeader = document.createElement("div") //only used for mobile view


    inputHeader.innerText = headerText //only used for mobile view
    inputHeader.style.display = "none" //only used for mobile view
    inputHeader.className = "movesHeader" //only used for mobile view

    inputValue.className = `movesBold ${input}` //only used for mobile view

    if(moveObj[input] == 0 || moveObj[input] === undefined)
        inputValue.innerText = "-"
    else
        inputValue.innerText = moveObj[input]

    inputContainer.append(inputHeader)
    inputContainer.append(inputValue)
    inputContainer.className = `${input}Container`

    return inputContainer
}