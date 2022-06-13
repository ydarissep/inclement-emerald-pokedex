async function getMoves(Moves){
    footerP("Fetching moves")
    const rawMoves = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/battle_moves.h")
    const textMoves = await rawMoves.text()

    return regexMoves(textMoves, Moves)
}

async function getMovesDescription(Moves){
    footerP("Fetching moves descriptions")
    const rawMovesDescription = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/text/move_descriptions.h")
    const textMovesDescription = await rawMovesDescription.text()

    return regexMovesDescription(textMovesDescription, Moves)
}



async function buildMovesObj(){
    let moves = {}
    moves = await getMoves(moves)
    moves = await getMovesDescription(moves)
    delete moves["MOVE_NONE"]

    await localStorage.setItem("moves", LZString.compressToUTF16(JSON.stringify(moves)))
}


async function fetchMovesObj(){
    if(!localStorage.getItem("moves"))
        await buildMovesObj()

    window.moves = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("moves")))
    
    await displayMoves()
}

