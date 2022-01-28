var counter = 1;
window.addEventListener('click', () => {
    console.log("clicked " + counter);
    counter++;
});

/*===vanilla js sticky nav using scroll page Y===*/
var navbar = document.querySelector(".navbar");
var bgcolor = document.querySelector(".max-width");

function fixnav() {
    if (window.scrollY >= 100) {
        navbar.classList.add("added");
        bgcolor.classList.remove("bgcolor");
    } else {
        navbar.classList.remove("added");
        bgcolor.classList.add("bgcolor");
    };
};

window.addEventListener('scroll', fixnav);