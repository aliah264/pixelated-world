const startButton = document.getElementById('start-button');
const pages = document.querySelectorAll('.page');
const backButtons = document.querySelectorAll('.back-button');
const pixelStar = document.getElementById('pixel-star');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Show random game page
startButton.addEventListener('click', () => {
    document.querySelector('.content').style.display = 'none';
    document.getElementById('page1').classList.add('page-active');
});

// Back button
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.page').classList.remove('page-active');
        document.querySelector('.content').style.display = 'block';
        score = 0;
        scoreDisplay.textContent = score;
    });
});

// Move the star randomly
function moveStar() {
    const gameContainer = document.querySelector('.game-container');
    const maxX = gameContainer.clientWidth - pixelStar.clientWidth;
    const maxY = gameContainer.clientHeight - pixelStar.clientHeight;
    
    pixelStar.style.left = `${Math.random() * maxX}px`;
    pixelStar.style.top = `${Math.random() * maxY}px`;
}

// Click event
pixelStar.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveStar();
});

// Move star every 2 seconds
setInterval(moveStar, 2000);
