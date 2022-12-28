const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    // Toggle the display of the menu
    console.log("toggle-button clicked!")
    navList.classList.toggle('active')
});