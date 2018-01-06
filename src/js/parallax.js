const parallax = document.querySelectorAll('.parallax-layer');
const hero = document.getElementById('hero');


hero.addEventListener('mousemove', (e) => {
  const factor = 6;
  const offsetX = document.documentElement.clientWidth / 4;
  const offsetY = document.documentElement.clientHeight / 4;
  const posX = (e.pageX);
  const posY = (e.pageY);

  parallax.forEach((p, i) => {
    p.style.backgroundPosition = `${-offsetX - (posX / ((i + 1) * factor))}px ${-offsetY - (posY / ((i + 1) * factor))}px`; // eslint-disable-line no-param-reassign
  });
});
