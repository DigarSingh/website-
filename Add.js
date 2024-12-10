// Add interactivity to the website

document.addEventListener('DOMContentLoaded', () => {
    // Highlight navigation menu items on hover
    const navLinks = document.querySelectorAll('.navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6347'; // Change to a highlight color
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#fff'; // Revert to original color
        });
    });

    // Add "Read More" functionality
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert('This will take you to the full article!');
        });
    });
});