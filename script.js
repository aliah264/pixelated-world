const startButton = document.getElementById('start-button');
const pages = document.querySelectorAll('.page');
const backButtons = document.querySelectorAll('.back-button');
const pixelStar = document.getElementById('pixel-star');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Function to move star to a random position
function moveStar() {
    const gameContainer = document.querySelector('.game-container');
    const maxX = gameContainer.clientWidth - pixelStar.clientWidth;
    const maxY = gameContainer.clientHeight - pixelStar.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    pixelStar.style.left = `${randomX}px`;
    pixelStar.style.top = `${randomY}px`;
}

// Star click event
pixelStar.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveStar();
});

// Move star every 2 seconds automatically
setInterval(moveStar, 2000);

// Function to show a random page after button click
startButton.addEventListener('click', () => {
    // Randomly select a page to display
    const randomPageIndex = Math.floor(Math.random() * pages.length);
    
    // Hide the main content and show the selected page
    document.querySelector('.content').style.display = 'none';
    pages[randomPageIndex].classList.add('page-active');
});

// Go back to the main screen when 'Go Back' is clicked
backButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide the current page and show the main content
        button.closest('.page').classList.remove('page-active');
        document.querySelector('.content').style.display = 'block';
    });
});
