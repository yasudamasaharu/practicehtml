const btn = document.querySelector('button.header-nav__mobile-menu__btn');
const text = document.querySelector('.header-nav__mobile-menu__text');
console.log(text);

const mobileMenuToggle = (el) => {
  el.classList.toggle('active');
}

btn.addEventListener('click', () => mobileMenuToggle(btn));
text.addEventListener('click',() => mobileMenuToggle(btn));
