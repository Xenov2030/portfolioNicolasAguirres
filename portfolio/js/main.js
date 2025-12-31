document.addEventListener('DOMContentLoaded', () => {

    // 1. Animación del Hero al cargar
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.classList.remove('opacity-0', 'translate-y-10');
    }, 400);

    // 2. Efecto Typewriter (Máquina de escribir)
    const textElement = document.getElementById('typewriter');
    const texts = ['Frontend Developer', 'Fullstack Student', 'UI/UX Enthusiast'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pausa al final de la palabra
        } else {
            setTimeout(type, 100);
        }
    }());

    // 3. Navbar Scroll Behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? navbar.classList.add('glass-nav') : navbar.classList.remove('glass-nav');
    });

    // 4. Reveal Sections on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section-reveal').forEach(s => observer.observe(s));

    // 5. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuBtn.onclick = () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('w-full');
        navMenu.classList.toggle('bg-black');
        navLinks.classList.toggle('p-10');
    };
});