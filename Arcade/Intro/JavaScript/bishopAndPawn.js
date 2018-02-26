const bishopAndPawn = (bishop, pawn) => {
    const cols = {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6,
                g: 7,
                h: 8
    };
    
    const bishCol = cols[bishop.split('')[0]],
        bishPos = +bishop[1],
        pawCol = cols[pawn.split('')[0]],
        pawPos = +pawn[1];
    
    return bishCol + pawPos === bishPos + pawCol || 
           bishCol + bishPos === pawCol + pawPos ? true : false; 
}