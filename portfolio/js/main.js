/*==================== SHOW/HIDE MENU ====================*/
// Selección de elementos del menú
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Mostrar menú cuando se hace clic en el toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Ocultar menú cuando se hace clic en cerrar
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Cerrar menú al hacer clic en un link de navegación
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/*==================== REMOVE MENU MOBILE ====================*/
// Cerrar menú cuando se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Función para activar el link correspondiente según la sección visible
function scrollActive() {
    const scrollY = window.pageYOffset;
    
    // Obtener todas las secciones con ID
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

// Ejecutar al hacer scroll
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
// Cambiar el estilo del header al hacer scroll
function scrollHeader() {
    const header = document.getElementById('header');
    
    // Cuando el scroll sea mayor a 50 viewport height, agregar clase
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
// Mostrar botón de scroll to top
function scrollUp() {
    const scrollUp = document.getElementById('scroll-top');
    
    // Cuando el scroll sea mayor a 560 viewport height, mostrar el botón
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== SCROLL TO TOP ====================*/
// Funcionalidad del botón scroll to top
const scrollTopButton = document.getElementById('scroll-top');

if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*==================== SMOOTH SCROLL ====================*/
// Smooth scroll para todos los links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Si el href es solo "#", scroll al top
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
// Animaciones al hacer scroll (fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
const animateElements = document.querySelectorAll(
    '.skills__card, .project__card, .certification__card, .reason__card'
);

animateElements.forEach(el => observer.observe(el));

/*==================== LAZY LOADING FOR IMAGES ====================*/
// Lazy loading para imágenes (si se agregan en el futuro)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

// Observar todas las imágenes con data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

/*==================== TYPING EFFECT (OPCIONAL) ====================*/
// Efecto de escritura para el hero title (opcional - puede activarse)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Descomentar para activar el efecto de escritura en el hero
// const heroTitle = document.querySelector('.hero__title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// }

/*==================== SKILLS PROGRESS BARS (OPCIONAL) ====================*/
// Función para animar barras de progreso si se agregan en el futuro
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skills__progress');
    
    progressBars.forEach(bar => {
        const value = bar.dataset.value;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 100);
    });
}

// Ejecutar cuando las skills estén visibles
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

/*==================== PROJECTS FILTER (OPCIONAL) ====================*/
// Sistema de filtrado de proyectos si se agregan categorías en el futuro
function filterProjects(category) {
    const projects = document.querySelectorAll('.project__card');
    
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.classList.add('fade-in');
            }, 100);
        } else {
            project.style.display = 'none';
            project.classList.remove('fade-in');
        }
    });
}

/*==================== CONTACT FORM VALIDATION (OPCIONAL) ====================*/
// Validación básica si se agrega un formulario de contacto
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        // Validación de email
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });
    
    return isValid;
}

/*==================== COPY TO CLIPBOARD ====================*/
// Función para copiar texto al clipboard (útil para email, etc.)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar mensaje de confirmación
        showNotification('Copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Función para mostrar notificaciones
function showNotification(message, duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--secondary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de la duración especificada
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

/*==================== THEME TOGGLE (DARK/LIGHT - OPCIONAL) ====================*/
// Sistema de cambio de tema claro/oscuro (actualmente está en modo oscuro)
// Puede implementarse en el futuro
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Cargar tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

// Cargar tema al inicio
loadTheme();

/*==================== PRELOADER (OPCIONAL) ====================*/
// Preloader simple si se desea agregar
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }, 500);
    }
});

/*==================== PERFORMANCE OPTIMIZATION ====================*/
// Debounce function para optimizar eventos que se disparan frecuentemente
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Aplicar debounce a funciones de scroll para mejor rendimiento
window.addEventListener('scroll', debounce(scrollActive));
window.addEventListener('scroll', debounce(scrollUp));

/*==================== ACCESSIBILITY IMPROVEMENTS ====================*/
// Mejorar accesibilidad con navegación por teclado
document.addEventListener('keydown', (e) => {
    // ESC para cerrar menú mobile
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
    
    // Navegación con Tab
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        // Lógica adicional de navegación si es necesario
    }
});

/*==================== EXTERNAL LINKS ====================*/
// Agregar atributos de seguridad a links externos automáticamente
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Animación adicional al hacer scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(revealOnScroll));

/*==================== CONSOLE MESSAGE ====================*/
// Mensaje en consola para developers curiosos
console.log('%c¡Hola Developer! 👋', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cSi estás revisando el código, me encantaría conectar contigo.', 'color: #10b981; font-size: 14px;');
console.log('%cPortfolio creado con HTML, CSS y JavaScript vanilla', 'color: #94a3b8; font-size: 12px;');

/*==================== INITIALIZE ====================*/
// Función de inicialización
function init() {
    // Cargar tema
    loadTheme();
    
    // Activar scroll active en la carga
    scrollActive();
    
    // Mostrar/ocultar scroll up button
    scrollUp();
    
    // Log de inicialización
    console.log('Portfolio cargado exitosamente! ✅');
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/*==================== SERVICE WORKER (PWA - OPCIONAL) ====================*/
// Registrar service worker si existe (para convertir en PWA en el futuro)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(error => {
                console.log('SW registro falló:', error);
            });
    });
}