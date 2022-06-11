async function getMoves(Moves){
    const rawMoves = await fetch("https://raw.githubusercontent.com/BuffelSaft/pokeemerald/master/src/data/battle_moves.h")
    const textMoves = await rawMoves.text()

    return regexMoves(textMoves, Moves)
}

async function buildMovesObj(){
    let moves = {}
    moves = await getMoves(moves) 
    delete moves["MOVE_NONE"]

    await localStorage.setItem("moves", LZString.compressToUTF16(JSON.stringify(moves)))
}


async function fetchMovesObj(){
    if(!localStorage.getItem("moves"))
        await buildMovesObj()

    let moves = await JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("moves")))
    console.log(moves)
    
    await displayMoves(moves)
}