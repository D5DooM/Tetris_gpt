function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function rotateMatrix(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i])).reverse();
}

function canMove(grid, shape, position) {
    for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[r].length; c++) {
            if (shape[r][c] !== 0) {
                const newX = position.x + c;
                const newY = position.y + r;
                if (newX < 0 || newX >= grid[0].length || newY >= grid.length || grid[newY][newX] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
