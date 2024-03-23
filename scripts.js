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



/* -------------  Resume -------------- */
function adjustResumePadding() {
    var headerHeight = document.querySelector('.header-container').offsetHeight;
    var resumeSection = document.querySelector('.resume');
    var newPadding = headerHeight + 20; // Add 20px for additional spacing

    resumeSection.style.paddingTop = newPadding + 'px';
}

window.addEventListener('resize', adjustResumePadding);
window.addEventListener('DOMContentLoaded', adjustResumePadding);