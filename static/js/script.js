document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-opacity-90');
        } else {
            nav.classList.remove('bg-opacity-90');
        }
    });
});
