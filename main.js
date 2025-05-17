window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('jos');
    } else {
        nav.classList.remove('jos');
    }
});