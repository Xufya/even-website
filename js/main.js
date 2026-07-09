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