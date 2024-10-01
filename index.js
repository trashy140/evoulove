const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});
