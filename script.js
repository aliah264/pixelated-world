// Pixelated Character Animation
const character = document.getElementById('character');
const button = document.querySelector('.pixel-button');

// Add animation on button click
button.addEventListener('click', () => {
    character.classList.add('animate');
    
    // After 1 second, reset the animation
    setTimeout(() => {
        character.classList.remove('animate');
    }, 1000);
});

// Example of random mini-game trigger (just a simple alert for now)
button.addEventListener('dblclick', () => {
    alert('Mini-Game: Match-3 coming soon!');
});
