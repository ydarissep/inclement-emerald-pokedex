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

        let type = document.createElement("div")
        type.className = `${moves[moveName]["type"]} type background`
        type.innerText = sanitizeString(moves[moveName]["type"])
        container.append(type)

        let split = document.createElement("div")
        split.className = `${moves[moveName]["split"]} split background`
        split.innerText = sanitizeString(moves[moveName]["split"])
        container.append(split)

        row.append(container)


        let move = document.createElement("td")
        move.className = "move"
        move.innerText = sanitizeString(moves[moveName]["name"])
        row.append(move)


        let power = document.createElement("td")
        power.className = "power"
        if(moves[moveName]["power"] == 0 || moves[moveName]["power"] === undefined)
            power.innerText = "-"
        else
            power.innerText = moves[moveName]["power"]
        row.append(power)


        let accuracy = document.createElement("td")
        accuracy.className = "accuracy"
        if(moves[moveName]["accuracy"] == 0 || moves[moveName]["accuracy"] === undefined)
            accuracy.innerText = "-"
        else
            accuracy.innerText = moves[moveName]["accuracy"]
        row.append(accuracy)


        let PP = document.createElement("td")
        PP.className = "PP"
        PP.innerText = moves[moveName]["PP"]
        row.append(PP)


        let priority = document.createElement("td")
        priority.className = "priority"
        if(moves[moveName]["priority"] == 0 || moves[moveName]["priority"] === undefined)
            priority.innerText = "-"
        else
            priority.innerText = moves[moveName]["priority"]
        row.append(priority)


        let description = document.createElement("td")
        description.className = "description"
        for(let j = 0; j < moves[moveName]["description"].length; j++){
            const desc = document.createElement("div")
            desc.innerText += moves[moveName]["description"][j].replace("\\n", "")
            description.append(desc)
        }
        row.append(description)



        /*
        let flagsContainer = document.createElement("td")
        flagsContainer.className = "flags"
        for(let j = 0; j < moves[moveName]["flags"].length; j++){
            const flags = document.createElement("div")
            flags.className = "flag"
            flags.innerText = sanitizeString(moves[moveName]["flags"][j])
            flagsContainer.append(flags)
        }
        row.append(flagsContainer)

        let changesContainer = document.createElement("td")
        changesContainer.className = "changes"
        for(let j = 0; j < moves[moveName]["changes"].length; j++){
            if(moves[moveName]["changes"][j][0] !== "flags"){
                const change = document.createElement("div")
                change.className = "change"
                change.innerText = `${moves[moveName]["changes"][j][0]}: ${sanitizeString(moves[moveName]["changes"][j][1])}`
                changesContainer.append(change)
            }
        }
        row.append(changesContainer)
        */
    }
}