type Position = [number, number];

function getKnightMoves(position: Position): Position[] {
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


    return moves.filter((move) => {
        const moveX = move[0];
        const moveY = move[1];
        return moveX >= 0 && moveX <= 7 && moveY >= 0 && moveY <= 7;
    });
}


function knightMoves(start: Position, end: Position): Position[] { 

    const queue: Position[] = [start];
    const visited: Set<string> = new Set();
    visited.add(`${start[0]},${start[1]}`);

    const parents: Record<string, Position | null> = {};
    parents[`${start[0]},${start[1]}`] = null;

    let found = false;

    while(queue.length > 0) {
        const current = queue.shift()!;

        if (current[0] === end[0] && current[1] === end[1]) {
            found = true;
            break;
        }

        const nextMoves = getKnightMoves(current);
        for (const next of nextMoves) {
            const nextKey = `${next[0]},${next[1]}`;
            if (!visited.has(nextKey)) {
                visited.add(nextKey);
                queue.push(next);
                parents[nextKey] = current;
            }
        }
    }

    if (!found) {
        console.log('No path found from', start, 'to', end);
        return [];
    }

    const path: Position[] = [];
    let current: Position | null = end;

    while (current !== null) {
        path.unshift(current);
        const currentKey: string = `${current[0]},${current[1]}`;
        current = parents[currentKey];
    }

    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    for (const pos of path) {
        console.log(pos);
    }
    return path;

}

const result = knightMoves([0, 0], [3, 3]);
console.log("Result:", result);