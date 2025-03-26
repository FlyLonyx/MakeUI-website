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

document.addEventListener("DOMContentLoaded", () => {
    const navDots = document.querySelectorAll(".nav-dot");

    navDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            // Supprimer la classe "active" de tous les points
            navDots.forEach((item) => item.classList.remove("active"));

            // Ajouter la classe "active" au point cliqué
            dot.classList.add("active");

            // Simuler ici les changements de produit (si nécessaire)
            console.log(`Le produit ${index + 1} est maintenant actif.`);
        });
    });
});
