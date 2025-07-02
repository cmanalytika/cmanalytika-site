document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Inicialização do Swiper.js ---
    const swiper = new Swiper('.hero-swiper', {
        // Efeito de fade, como na sua implementação original
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        // Loop infinito
        loop: true,
        // Autoplay com o mesmo tempo que você usava
        autoplay: {
            delay: 7000,
            disableOnInteraction: false, // Continua o autoplay mesmo depois de interação manual
        },
        // Paginação (os pontinhos)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Botões de navegação (as setas)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}); // Fim do DOMContentLoaded