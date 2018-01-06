const parallax = document.querySelectorAll('.parallax-layer');
const hero = document.getElementById('hero');


hero.addEventListener('mousemove', (e) => {
  const factor = 15;
  const posX = (e.pageX);
  const posY = (e.pageY);

  parallax.forEach((p, i) => {
    p.style.backgroundPosition = `calc(50% - ${(posX / ((i + 1) * factor))}px) calc(50% - ${(posY / ((i + 1) * factor))}px)`; // eslint-disable-line no-param-reassign
  });
});
