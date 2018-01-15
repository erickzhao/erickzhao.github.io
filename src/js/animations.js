const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('animated', 'fadeInUp');
    }
  });
};

const createObserver = (elements) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  if (IntersectionObserver) {
    const observer = new IntersectionObserver(handleIntersect, options);
    elements.forEach((el) => {
      el.classList.add('hidden');
      observer.observe(el);
    });
  }
};

window.addEventListener('load', () => {
  const timelineElements = document.querySelectorAll('.timeline--block');
  if (IntersectionObserver) {
    createObserver(timelineElements);
  }
}, false);

