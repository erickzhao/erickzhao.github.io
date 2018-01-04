const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');

// vanilla JS scroll adapted from https://gist.github.com/joshcanhelp/a3a669df80898d4097a1e2c01dea52c1
function scrollTo(scroll, scrollDuration) {
  let scrollTarget = scroll;
  let duration = scrollDuration;

  if (typeof scrollTarget === 'string') {
    const scrollToObj = document.querySelector(scrollTarget);

    if (scrollToObj && typeof scrollToObj.getBoundingClientRect === 'function') {
      scrollTarget = window.pageYOffset + scrollToObj.getBoundingClientRect().top;
    } else {
      throw new Error(`error: No element found with the selector "${scrollTarget}"`);
    }
  } else if (typeof scrollTo !== 'number') {
    scrollTarget = 0;
  }

  const anchorHeightAdjust = 30;
  if (scrollTarget > anchorHeightAdjust) {
    scrollTarget -= anchorHeightAdjust;
  }

  if (typeof duration !== 'number' || duration < 0) {
    duration = 1000;
  }
  const cosParameter = (window.pageYOffset - scrollTarget) / 2;
  let scrollCount = 0;
  let oldTimestamp = window.performance.now();

  function step(newTimestamp) {
    let tsDiff = newTimestamp - oldTimestamp;

    if (tsDiff > 100) {
      tsDiff = 30;
    }

    scrollCount += Math.PI / (duration / tsDiff);

    if (scrollCount >= Math.PI) {
      return;
    }

    const moveStep = Math.round(scrollTo + cosParameter + (cosParameter * Math.cos(scrollCount)));
    window.scrollTo(0, moveStep);
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (window.location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') &&
      window.location.hostname === e.target.hostname) {
      let target = document.querySelector(e.target.hash);
      target = target.length ? target : document.querySelector(`[name=${e.target.hash.slice(1)}]`);
      if (target.length) {
        e.originalEvent.preventDefault();
        scrollTo(target, 1000);
      }
    }
  });
});
