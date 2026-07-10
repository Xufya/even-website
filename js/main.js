// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botão de contactar
document.querySelector('.btn-contactar').addEventListener('click', function() {
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});

// Toggle de idioma (PT / EN)
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'pt';

langToggle.addEventListener('click', function() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-pt]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
});