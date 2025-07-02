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

    // --- Lógica do Slider Manual ---
    const slides = document.querySelectorAll('.manual-slider .swiper-slide');
    const paginationContainer = document.querySelector('.slider-pagination');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove 'active' de todos os slides e pontos
        slides.forEach(slide => slide.classList.remove('active'));
        Array.from(paginationContainer.children).forEach(dot => dot.classList.remove('active'));

        // Adiciona 'active' ao slide e ponto correto
        slides[index].classList.add('active');
        paginationContainer.children[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlider() {
        // Exibe o primeiro slide ao carregar
        showSlide(currentSlide);
        // Inicia a troca automática
        slideInterval = setInterval(nextSlide, 7000); // Mesmo delay de 7 segundos
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Cria os pontos de paginação dinamicamente
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            stopSlider(); // Para a troca automática ao clicar
            currentSlide = index;
            showSlide(currentSlide);
            startSlider(); // Reinicia após o clique
        });
        paginationContainer.appendChild(dot);
    });

    // Inicia o slider
    if (slides.length > 0) {
        startSlider();

        // Pausa o slider ao passar o mouse sobre ele
        const manualSlider = document.querySelector('.manual-slider');
        if (manualSlider) {
            manualSlider.addEventListener('mouseenter', stopSlider);
            manualSlider.addEventListener('mouseleave', startSlider);
        }
    } else {
        console.warn('Nenhum slide encontrado para o slider manual. Verifique a estrutura HTML.');
    }
}); // Fim do DOMContentLoaded