document.addEventListener('keydown', event => {
    if (autoplay) return;

    const newPosition = { ...currentPosition };
    if (event.key === 'ArrowLeft') {
        newPosition.x -= 1;
    } else if (event.key === 'ArrowRight') {
        newPosition.x += 1;
    } else if (event.key === 'ArrowDown') {
        newPosition.y += 1;
    } else if (event.key === 'ArrowUp') {
        const rotatedShape = rotateMatrix(currentShape.shape);
        if (canMove(grid, rotatedShape, currentPosition)) {
            currentShape.shape = rotatedShape;
        }
        return;
    }
    if (canMove(grid, currentShape.shape, newPosition)) {
        currentPosition = newPosition;
    }
});
