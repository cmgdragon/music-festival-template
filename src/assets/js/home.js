import './main';

document.querySelector(`.content__contact`).addEventListener('mouseenter', ({target}) => {
  target.firstElementChild.classList.add('rotate-ticket');
})

document.querySelector(`.content__contact`).addEventListener('mouseleave', ({target}) => {
  target.firstElementChild.classList.remove('rotate-ticket');
})

document.querySelector(`.content__bands`).addEventListener('mouseenter', ({target}) => {
  target.querySelectorAll(`.fa-music`).forEach(element  => {
      element.classList.add('notes-dance');
  });
})

document.querySelector(`.content__bands`).addEventListener('mouseleave', ({target}) => {
  target.querySelectorAll(`.fa-music`).forEach(element => {
    element.classList.remove('notes-dance');
  });
})

document.querySelector(`.content__about`).addEventListener('mouseenter', ({target}) => {
  target.firstElementChild.classList.add('flip-about');
})

document.querySelector(`.content__about`).addEventListener('mouseleave', ({target}) => {
  target.firstElementChild.classList.remove('flip-about');
})
