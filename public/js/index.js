// Sélection des éléments
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Fonction pour toggle le menu
function toggleMenu() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Event listener pour le burger menu
burger.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});