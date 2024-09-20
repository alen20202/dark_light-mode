const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const modeImage = document.getElementById('mode-image');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
        modeImage.src = 'dark-mode-image.jpg'; // Replace with your dark mode image path
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
        modeImage.src = 'light-mode-image.jpg'; // Replace with your light mode image path
    }
});
