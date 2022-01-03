window.addEventListener('scroll', (e) => {
    var target = document.querySelector('.scroll');
    
    
    var scrolled = window.pageYOffset;
    var rate = scrolled * -2;
    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';

});