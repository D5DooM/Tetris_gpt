const canvas = document.getElementById('tetrisCanvas');
const ctx = canvas.getContext('2d');

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

let grid = createGrid(ROWS, COLS);
let currentShape = getRandomShape();
let nextShape = getRandomShape();
let currentPosition = { x: 3, y: 0 };
let dropInterval = 1000;
let lastDropTime = Date.now();
let autoplay = false;

document.getElementById('autoplayButton').addEventListener('click', () => {
    autoplay = !autoplay;
    if (autoplay) {
        document.getElementById('autoplayButton').textContent = 'Stop Autoplay';
    } else {
        document.getElementById('autoplayButton').textContent = 'Autoplay';
    }
});

function dropShape() {
    const now = Date.now();
    if (now - lastDropTime > dropInterval) {
        lastDropTime = now;
        const newPosition = { x: currentPosition.x, y: currentPosition.y + 1 };
        if (canMove(grid, currentShape.shape, newPosition)) {
            currentPosition = newPosition;
        } else {
            mergeShape(grid, currentShape.shape, currentPosition);
            clearLines(grid, ROWS, COLS, updateScore);
            currentShape = nextShape;
            nextShape = getRandomShape();
            currentPosition = { x: 3, y: 0 };
            if (!canMove(grid, currentShape.shape, currentPosition)) {
                updateLeaderboard();
                alert('Game Over');
                grid = createGrid(ROWS, COLS);
                score = 0;
                document.getElementById('score').textContent = score;
            }
            drawNextShape();
        }
    }
}

function autoplayMove() {
    if (!autoplay) return;
    const potentialMoves = [
        { x: currentPosition.x - 1, y: currentPosition.y },
        { x: currentPosition.x + 1, y: currentPosition.y },
        { x: currentPosition.x, y: currentPosition.y + 1 }
    ];
    for (const move of potentialMoves) {
        if (canMove(grid, currentShape.shape, move)) {
            currentPosition = move;
            return;
        }
    }
    if (canMove(grid, rotateMatrix(currentShape.shape), currentPosition)) {
        currentShape.shape = rotateMatrix(currentShape.shape);
    }
}

function gameLoop() {
    drawGrid(ctx, grid, BLOCK_SIZE);
    drawShape(ctx, currentShape.shape, currentPosition);
    dropShape();
    autoplayMove();
    requestAnimationFrame(gameLoop);
}

gameLoop();
