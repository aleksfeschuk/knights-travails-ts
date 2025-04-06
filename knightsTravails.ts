type Position = [number, number];

function getKnightMoves(position: Position, result: Position[]): void {
    const x = position[0];
    const y = position[1];

    const moves: Position[] = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x - 1, y + 2],
        [x - 1, y - 2]
    ];


    const validMoves = moves.filter((move) => {
        const moveX = move[0];
        const moveY = move[1];

        return moveX >= 0 && moveX <= 7 && moveY >= 0 && moveY <= 7; 
    });

    for (const move of validMoves) {
        result.push(move);
    }
}