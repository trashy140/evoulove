const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});


function setRealVh() {
    // Calcul de la vraie hauteur du viewport
    let vh = window.innerHeight * 0.01;
    // Appliquer cette valeur en tant que hauteur personnalisée
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Appeler la fonction à chaque changement de taille
window.addEventListener('resize', setRealVh);
window.addEventListener('orientationchange', setRealVh);

// Appel initial
setRealVh();
