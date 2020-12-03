import 'bootstrap';

document.querySelector('.mobile-header > i').addEventListener('click', ({target}) => {
  target.style.visibility = "hidden";
  target.nextElementSibling.nextElementSibling.classList.add('open');
  document.getElementsByTagName('html')[0].style.overflow = "hidden";
})

document.querySelector('.mobile-menu__cross').addEventListener('click', ({target}) => {
  document.querySelector('.mobile-menu').classList.remove('open');
  document.querySelector('.mobile-header > i').style.visibility = "visible";
  document.getElementsByTagName('html')[0].style.overflow = "unset";
})
