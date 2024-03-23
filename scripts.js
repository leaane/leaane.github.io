/* -------------  Autoscroll -------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

/* -------------  Burger Menu -------------- */
$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        $('.mob-nav').toggleClass('show-nav'); 
    });
});