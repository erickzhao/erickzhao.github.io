const basicLightbox = require('basiclightbox');

const photos = document.querySelectorAll('.thumbnail-container');

photos.forEach((ph) => {
  ph.addEventListener('click', () => {
    const src = ph.getAttribute('data-src');
    const html = `<img src="${src}">`;

    basicLightbox.create(html).show();
  });
});
