function drawGrid(ctx, grid, blockSize) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grid.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value !== 0) {
                ctx.fillStyle = value;
                ctx.fillRect(c * blockSize, r * blockSize, blockSize, blockSize);
                ctx.strokeRect(c * blockSize, r * blockSize, blockSize, blockSize);
            }
        });
    });
}

function drawShape(ctx, shape, position, blockSize = BLOCK_SIZE) {
    shape.forEach((row, r) => {
        row.forEach((value, c) => {
            if (value !== 0) {
                ctx.fillStyle = value;
                ctx.fillRect((position.x + c) * blockSize, (position.y + r) * blockSize, blockSize, blockSize);
                ctx.strokeRect((position.x + c) * blockSize, (position.y + r) * blockSize, blockSize, blockSize);
            }
        });
    });
}
