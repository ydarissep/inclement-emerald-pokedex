function regexMoves(textMoves, moves){
    const lines = textMoves.split("\n")
    let move = null, change = false, rebalanced = false

    lines.forEach(line => {

        const matchMoves = line.match(/\[ *(MOVE_\w+) *\]/i)
        if(matchMoves !== null){
            move = matchMoves[1]
            
            moves[move] = {}
            moves[move]["name"] = move
            moves[move]["changes"] = []
        }
        if(line.includes("REBALANCED_VERSION"))
            rebalanced = true
        else if(line.includes("else") && rebalanced === true){
            rebalanced = false
            change = true
        }
        else if(line.includes("endif") && change === true)
            change = false


        if(line.includes(".power")){
            const matchPower = line.match(/\d+/)
            if(matchPower !== null){
                const power = matchPower[0]

                moves[move] = setMove(moves[move], change, "power", power)
            }
        }
        else if(line.includes(".pp")){
            const matchPP = line.match(/\d+/)
            if(matchPP !== null){
                const PP = matchPP[0]

                moves[move] = setMove(moves[move], change, "PP", PP)
            }
        }
        else if(line.includes(".type")){
            const matchType = line.match(/TYPE_\w+/i)
            if(matchType !== null){
                const type = matchType[0]

                moves[move] = setMove(moves[move], change, "type", type)
            }
        }
        else if(line.includes(".accuracy")){
            const matchAccuracy = line.match(/\d+/)
            if(matchAccuracy !== null){
                const accuracy = matchAccuracy[0]

                moves[move] = setMove(moves[move], change, "accuracy", accuracy)
            }
        }
        else if(line.includes(".split")){
            const matchSplit = line.match(/SPLIT_\w+/i)
            if(matchSplit !== null){
                const split = matchSplit[0]

                moves[move] = setMove(moves[move], change, "split", split)
            }
        }
        else if(line.includes(".effect")){
            const matchEffect = line.match(/EFFECT_\w+/i)
            if(matchEffect !== null){
                const effect = matchEffect[0]

                moves[move] = setMove(moves[move], change, "effect", effect)
            }
        }
        else if(line.includes(".secondaryEffectChance")){
            const matchChance = line.match(/\d+/)
            if(matchChance !== null){
                const chance = matchChance[0]

                moves[move] = setMove(moves[move], change, "chance", chance)
            }
        }
        else if(line.includes(".target")){
            const matchTarget = line.match(/MOVE_TARGET_\w+/i)
            if(matchTarget !== null){
                const target = matchTarget[0]

                moves[move] = setMove(moves[move], change, "target", target)
            }
        }
        else if(line.includes(".flags")){
            const matchFlags = line.match(/FLAG_\w+/ig)
            if(matchFlags !== null){
                const flags = matchFlags

                moves[move] = setMove(moves[move], change, "flags", flags)
            }
        }
        else if(line.includes(".priority")){
            const matchPriority = line.match(/\d+/)
            if(matchPriority !== null){
                const priority = matchPriority[0]

                moves[move] = setMove(moves[move], change, "priority", priority)
            }
        }
    })

    return normalizeMoves(moves)
}





function setMove(move, change, input, output){
    if(change){
        move["changes"].push([input, output])
        return move
    }
    else{
       if(move[input] === undefined){
            move[input] = output
            return move
       }
    }
    return move
}


function normalizeMoves(moves){

    for (const move of Object.keys(moves)){

        if(moves[move]["power"] === undefined)
            moves[move]["power"] = 0

        if(moves[move]["PP"] === undefined)
            moves[move]["PP"] = 0

        if(moves[move]["type"] === undefined)
            moves[move]["type"] = ""

        if(moves[move]["accuracy"] === undefined)
            moves[move]["accuracy"] = 0

        if(moves[move]["split"] === undefined)
            moves[move]["split"] = ""

        if(moves[move]["chance"] === undefined)
            moves[move]["chance"] = ""

        if(moves[move]["chance"] === undefined)
            moves[move]["chance"] = 0

        if(moves[move]["target"] === undefined)
            moves[move]["target"] = []

        if(moves[move]["flags"] === undefined)
            moves[move]["flags"] = [""]

        if(moves[move]["priority"] === undefined)
            moves[move]["priority"] = 0
    }

    return moves
}