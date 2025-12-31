document.addEventListener('DOMContentLoaded', () => {
    // Hero Entrance
    const hero = document.querySelector('.hero-content');
    setTimeout(() => hero.classList.remove('opacity-0', 'translate-y-10'), 300);

    // Typewriter Corrected (Nicolas Aguirres)
    const typewriter = document.getElementById('typewriter');
    const texts = ['Nicolas Aguirres', 'Frontend Developer', 'Fullstack Student'];
    let count = 0, index = 0, currentText = '', letter = '';

    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        typewriter.textContent = letter;
        if (letter.length === currentText.length) {
            count++; index = 0;
            setTimeout(type, 2000);
        } else { setTimeout(type, 100); }
    }());

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section-reveal').forEach(s => observer.observe(s));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? navbar.classList.add('glass-nav') : navbar.classList.remove('glass-nav');
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    menuBtn.onclick = () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('mobile-menu-active');
    };

    // Cerrar menú al hacer click en link
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.onclick = () => {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('mobile-menu-active');
        };
    });
});