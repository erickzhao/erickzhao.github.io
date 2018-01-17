const parallax = document.querySelectorAll('.parallax-layer');
const hero = document.getElementById('hero');


hero.addEventListener('mousemove', (e) => {
  const factor = 30;
  const posX = (e.pageX);
  const posY = (e.pageY);

  parallax.forEach((p, i) => {
    p.style.backgroundPosition = `calc(50% - ${((-1) ** i) * (posX / ((i + 1) * factor))}px) calc(50% - ${((-1) ** i) * (posY / ((i + 1) * factor))}px)`; // eslint-disable-line no-param-reassign
  });
});
