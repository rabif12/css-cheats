var counter = 1;

window.addEventListener('click', () => {
    console.log("clicked" + counter);
    counter++;
})

//movement animation
const card = document.querySelector('.card');
var container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});