function addClass(element, className) {
  if (element.className.indexOf(className) === -1) {
    element.className += ` ${className}`;
  }
}

function removeClass(element, className) {
  var reg = new RegExp(className, 'g');
  element.className = element.className.replace(reg, '');
}

const $ = document.querySelector.bind(document);

const showCarousel = function(el) {
  addClass(el, 'rotated');
  addClass($('#overlay'), 'visible-overlay');
  addClass($('#carousel-1'), 'visible-carousel');
};

const hideCarousel = function() {
  removeClass($('#overlay'), 'visible-overlay');
  removeClass($('#carousel-1'), 'visible-carousel');
};

const moveSlide = function (direction) {
  var percent = parseInt($('.slider').style.transform.replace('translateX(','').replace('%)', ''), 10);
  if (direction === 'left') {
    percent += 20;
  } else {
    percent -= 20;
  }

  percent = percent % 100;

  $('.slider').style.transform = `translateX(${percent}%)`;
};

// document.addEventListener("DOMContentLoaded", function(event) {
// });