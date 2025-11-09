const swing = document.querySelector('.swing');

swing.addEventListener('click', () => {
  swing.style.animationDuration = '1.5s';
  setTimeout(() => {
    swing.style.animationDuration = '3s';
  }, 4000);
});

