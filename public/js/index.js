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

document.getElementById("hero-button").addEventListener("click", function() {
    const buttonText = this.querySelector(".button-text");
    const loader = this.querySelector(".loader");
  
    this.classList.add("clicked");
    buttonText.style.display = "none";
    loader.style.display = "block";

    setTimeout(() => {
      setTimeout(() => {
        buttonText.innerText = "DECOUVRIR";
        buttonText.style.display = "block";
        loader.style.display = "none";
        this.classList.remove("clicked");
      }, 1000);
    }, 300);
  });
  

