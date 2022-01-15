var counter = 1;
window.addEventListener('click', () => {
    console.log('clicked' + counter);
    counter++;
});

var clicker = document.querySelector('.clicker')

clicker.addEventListener('click', () => {
    clicker.classList.toggle('active')
});