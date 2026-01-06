// Message de bienvenue au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");
});

// Gestion du menu (exemple clic)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("You clicked on: " + this.textContent);
    });
});

// Changement de couleur du header au scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "#0f172a";
    } else {
        header.style.backgroundColor = "#1e293b";
    }
});

// Bouton dynamique (si tu ajoutes un bouton)
function showMessage() {
    alert("JavaScript is working!");
}
