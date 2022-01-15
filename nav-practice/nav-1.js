var counter = 1;
window.addEventListener('click', () => {
    console.log('clicked' + counter);
    counter++;
});

var clicker = document.querySelector('.clicker');
var container = document.querySelector('.container');

clicker.addEventListener('click', () => {
    container.classList.toggle('active');
    container.classList.toggle('container');
});