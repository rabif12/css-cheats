var counter = 1;
window.addEventListener('click', () => {
    console.log("working " + counter);
    counter++;
});


const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});