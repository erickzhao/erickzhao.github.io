$(document).ready(function () {
  checkScroll(100);
  $(window).scroll(function () {
    checkScroll(100);
  });
});

function checkScroll(height) {
  var scroll = $(window).scrollTop();
  (scroll >= height) ? removeClear(): addClear();
}

function removeClear() {
  $('.fixed-top').removeClass('navbar-clear');
  $('.fixed-top').addClass('navbar-light');
}

function addClear() {
  $('.fixed-top').addClass('navbar-clear');
  $('.fixed-top').removeClass('navbar-light');
}

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function (event) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.originalEvent.defaultPrevented;
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});