var counter = 1;
window.addEventListener("click", () => {
    console.log("clicked" + counter);
    counter++;
});

let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

images.forEach((img, idx ) => {
    img.style.backgroundImage = `url(./img/${idx + 1}.jpg)`;
});

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
};

function setTransform(el, transform) {
    el.style.transform = transform;
};

function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
    
};
function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    window = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`)
    requestAnimationFrame(animate);
};
init();
animate();
console.log(imageWidth);