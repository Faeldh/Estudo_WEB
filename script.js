let index = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide img');
const carousel = document.querySelector('.carousel');

function atualizarFundo() {
    const currentSrc = slideImages[index].src;
    carousel.style.setProperty('--carousel-bg', `url('${currentSrc}')`);
}

function mudarSlide(direcao) {
    const total = slideImages.length;

    index += direcao;

    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
    atualizarFundo();
}

let slideInterval = null;

function iniciarCarousel() {
    slideInterval = setInterval(() => mudarSlide(1), 5000);
}

function pararCarousel() {
    clearInterval(slideInterval);
}

window.addEventListener('load', () => {
    slides.style.transform = 'translateX(0)';
    atualizarFundo();
    iniciarCarousel();
});

carousel.addEventListener('mouseenter', pararCarousel);
carousel.addEventListener('mouseleave', iniciarCarousel);
