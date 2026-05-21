let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector('.slides');
    const total = document.querySelectorAll('.slide').length;

    index += direcao;

    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}