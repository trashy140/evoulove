const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
  envelope.classList.toggle('flap');
});

function setRealVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setRealVh);
window.addEventListener('orientationchange', setRealVh);

setRealVh();
