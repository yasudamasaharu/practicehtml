const btn = document.querySelector('.footer__site-map-btn');
const lines = document.querySelectorAll('.footer__site-map-btn-sp');
const text = document.querySelector('.footer__site-map-btn-text');
const siteMap = document.querySelector('.footer__site-map');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');

  if(btn.classList.contains('active') == true) {
   text.innerText = "閉じる"
  }　else {
    text.innerText = "開く"
  }
  // lines.forEach(el => {
  //   el.classList.toggle('active')
  // });
  siteMap.classList.toggle('active')
})


const test = document.querySelector('.test-btn');
const nav = document.querySelector('.test-nav')
const ul = document.querySelector('.test-ul');
test.addEventListener('click', () => {
  nav.classList.toggle('active')
  if(nav.classList.contains('active') == true) {
    ul.classList.add('active');
  } else {
    ul.classList.remove('active')
  }
})