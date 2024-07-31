function updateLeaderboard() {
    let highScores = JSON.parse(localStorage.getItem('tetrisHighScores')) || [];
    highScores.push(score);
    highScores = highScores.sort((a, b) => b - a).slice(0, 5);
    localStorage.setItem('tetrisHighScores', JSON.stringify(highScores));

    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    highScores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = score;
        leaderboardElement.appendChild(li);
    });
}
