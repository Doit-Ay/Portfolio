document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skills-grid .skill, h2');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
    });

    let debounceTimer;
    window.addEventListener('scroll', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const scrollPosition = window.scrollY + window.innerHeight;
            animatedElements.forEach(element => {
                if (scrollPosition > element.offsetTop) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                    element.style.transition = 'all 0.4s ease-out';
                }
            });
        }, 100);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelector('form').addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('All fields are required!');
            e.preventDefault();
        }
    });
});
