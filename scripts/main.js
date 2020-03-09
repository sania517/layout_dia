'use strict';

function initMenu() {
  const burger = document.querySelector('.switcher');
  const switcher = document.querySelector('.header__main-nav');

  burger.addEventListener('click', () => {
    burger.classList.toggle('switcher--close');
    switcher.classList.toggle('nav--visible');
  });
}

initMenu();

function sliderStart() {
  const slider = document.querySelector('.slider');
  const cards = Array.from(document.querySelectorAll('.slider__item'));

  let currentIndex = cards.findIndex(item => {
    return item.classList.contains('slider__item--active');
  });

  function handler(e) {
    if (!e.target.classList.contains('slider__button')) {
      return;
    }

    cards[currentIndex].classList.remove('slider__item--active');

    if (e.target.classList.contains('slider__button-prev')) {
      if (currentIndex === 0) {
        currentIndex = cards.length - 1;
      } else {
        currentIndex -= 1;
      }
    } else if (e.target.classList.contains('slider__button-next')) {
      if (currentIndex === cards.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
    }

    cards[currentIndex].classList.add('slider__item--active');
  }

  slider.addEventListener('click', handler);
}

sliderStart();
