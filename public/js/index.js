// Sélection des éléments
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

const h1 = document.querySelector('.hero-left h1');
const text = "MakeUI est une boutique important pour vos sites web !";

// Créer un élément pour contenir le texte généré
const heroText = document.createElement('h1');
heroText.className = 'hero-text';

// Ajouter l'élément à la page
h1.parentNode.insertBefore(heroText, h1.nextSibling);
h1.style.display = 'none';

// Fonction Typping effect
function textTyppingEffect(element, text, i = 0) {
    if (i === text.length - 1) {
        // Créer un élément span pour le mot "important" si il existe dans le texte
        if (text.includes('important')) {
            const index = text.indexOf('important');
            element.innerHTML = text.substring(0, index) + `<span class="important">${text.substring(index, index + 9)}</span>` + text.substring(index + 9);
        } else {
            element.textContent = text;
        }
        return
    }
    element.textContent += text[i];
    if (i === text.length - 1) {
        return
    }
    setTimeout(() => textTyppingEffect(element, text, i + 1), 50);
}

// Appliquer les styles de h1 à l'élément texte généré
heroText.style.fontSize = '50px';
heroText.style.fontWeight = '800';
heroText.style.lineHeight = '1.4';
heroText.style.maxWidth = '35vw';
heroText.style.color = 'var(--text-300)';
heroText.style.animation = 'fadeIn 1s ease-out forwards';
heroText.style.animationDelay = '0.5s';

// Ajouter la classe important pour le mot "important"
const style = document.createElement('style');
style.innerHTML = '.hero-text .important { color: var(--primary-300); }';
document.head.appendChild(style);

// Appel de la fonction textTyppingEffect
textTyppingEffect(heroText, text)

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

