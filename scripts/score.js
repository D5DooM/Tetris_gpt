let score = 0;
const LINE_POINTS = [0, 40, 100, 300, 1200]; // Points for 0, 1, 2, 3, and 4 lines cleared respectively

function updateScore(linesCleared) {
    score += LINE_POINTS[linesCleared];
    document.getElementById('score').textContent = score;
}
