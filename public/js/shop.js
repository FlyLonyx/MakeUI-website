let currentSlide = 0;

function showSlide(slideIndex) {
    const offers = document.getElementById('offers');
    const totalSlides = offers.children.length;

    // Calcul de l'indice correct en cas de dépassement
    currentSlide = (slideIndex + totalSlides) % totalSlides;

    // Mise à jour de la position
    offers.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}