const startButton = document.getElementById('start-button');
const gamePage = document.getElementById('game-page');
const backButton = document.querySelector('.back-button');
const pixelStar = document.getElementById('pixel-star');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Show game page when button is clicked
startButton.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    gamePage.classList.add('page-active');
});

// Go back to the main screen
backButton.addEventListener('click', () => {
    gamePage.classList.remove('page-active');
    document.querySelector('.container').style.display = 'block';
    score = 0;
    scoreDisplay.textContent = score;
});

// Move the star randomly
function moveStar() {
    const gameContainer = document.querySelector('.game-container');
    const maxX = gameContainer.clientWidth - pixelStar.clientWidth;
    const maxY = gameContainer.clientHeight - pixelStar.clientHeight;
    
    pixelStar.style.left = `${Math.random() * maxX}px`;
    pixelStar.style.top = `${Math.random() * maxY}px`;
}

// Click event for scoring
pixelStar.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveStar();
});

// Move star every 2 seconds
setInterval(moveStar, 2000);
