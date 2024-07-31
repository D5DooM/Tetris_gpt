function createGrid(rows, cols) {
    const grid = [];
    for (let r = 0; r < rows; r++) {
        grid.push(new Array(cols).fill(0));
    }
    return grid;
}

function mergeShape(grid, shape, position) {
    shape.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value !== 0) {
                grid[position.y + r][position.x + c] = value;
            }
        });
    });
}

function clearLines(grid, rows, cols, scoreCallback) {
    let linesCleared = 0;
    for (let r = rows - 1; r >= 0; r--) {
        if (grid[r].every(value => value !== 0)) {
            grid.splice(r, 1);
            grid.unshift(new Array(cols).fill(0));
            linesCleared++;
            showPopup(`Lines Cleared: ${linesCleared}`, 1000);
        }
    }
    if (linesCleared > 0) {
        applyGravity(grid, rows, cols);
        scoreCallback(linesCleared);
    }
}

function applyGravity(grid, rows, cols) {
    for (let r = rows - 2; r >= 0; r--) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] !== 0 && grid[r + 1][c] === 0) {
                let row = r;
                while (row < rows - 1 && grid[row + 1][c] === 0) {
                    grid[row + 1][c] = grid[row][c];
                    grid[row][c] = 0;
                    row++;
                }
            }
        }
    }
}
