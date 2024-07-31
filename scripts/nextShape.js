function drawNextShape() {
    const nextShapeCtx = document.getElementById('nextShapeCanvas').getContext('2d');
    nextShapeCtx.clearRect(0, 0, nextShapeCtx.canvas.width, nextShapeCtx.canvas.height);
    drawShape(nextShapeCtx, nextShape.shape, { x: 1, y: 1 }, 20);
}
