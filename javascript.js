// JavaScript to toggle the menu overlay
const menuButton = document.querySelector('button'); // Replace with the actual button selector

menuButton.addEventListener('click', () => {
    const menuOverlay = document.getElementById('menu-overlay');
    if (menuOverlay.style.display === 'block') {
        menuOverlay.style.display = 'none';
        menuOverlay.style.opacity = 0;
    } else {
        menuOverlay.style.display = 'block';
        menuOverlay.style.opacity = 1;
    }
});
