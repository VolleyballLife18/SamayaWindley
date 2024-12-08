document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger icon and the navigation menu after the DOM is fully loaded
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('nav');

    // Add event listener for the hamburger icon click
    hamburgerIcon.addEventListener('click', function() {
        nav.classList.toggle('active'); // Toggle the 'active' class on the nav element
    });
});
