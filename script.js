const button = document.querySelector('.pixel-button');
const pages = document.querySelectorAll('.page');
const backButtons = document.querySelectorAll('.back-button');

// Function to show a random page after button click
button.addEventListener('click', () => {
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
