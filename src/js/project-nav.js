const smoothScroll = require('smoothscroll');

const upBtn = document.getElementById('project--up');
const downBtn = document.getElementById('project-down');
const projects = document.querySelectorAll('.project');

// upBtn.addEventListener('click', (e) => {

// });

// downBtn.addEventListener('click', (e) => {

// });

const getActiveProject = () => {
  for (let i = projects.length - 1; i >= 0; i--) { // eslint-disable-line no-plusplus
    const proj = projects[i];
    const { top } = proj.getBoundingClientRect();
    if (top < 200) {
      return proj;
    }
  }

  return projects[0];
};

const setActiveAnchor = () => {
  const proj = getActiveProject();
  const projAnchors = document.querySelectorAll('a[href^="#project--"]');
  const activeProj = document.querySelector(`a[href='#${proj.id}']`);

  projAnchors.forEach((anchor) => {
    if (anchor === activeProj) {
      anchor.classList.add('active');
    } else {
      anchor.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', setActiveAnchor);

