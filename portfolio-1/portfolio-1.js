var counter = 1;
window.addEventListener('click', () => {
    console.log("clicked " + counter);
    counter++;
});

/*===vanilla js sticky nav using scroll page Y===*/
var navbar = document.querySelector(".navbar");

function fixnav() {
    if (window.scrollY >= 100) {
        navbar.classList.add("added");
    } else {
        navbar.classList.remove("added");
    };
};

window.addEventListener('scroll', fixnav);