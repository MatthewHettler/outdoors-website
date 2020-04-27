// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
// Open the mneu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// Close the mneu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});