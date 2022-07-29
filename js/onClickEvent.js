const btns = document.querySelectorAll('button.footer__site-map-item-title');


btns.forEach((el) => {
  el.addEventListener('click', () => {
    let icon = el.querySelector('.footer__site-map-item-icon');
    let clickTarget = el.nextElementSibling;
    clickTarget.classList.toggle('active');
    icon.classList.toggle('active');
    clickTarget.classList.contains('active') ? naviOpen(clickTarget) : naviClose(clickTarget);
  })
})

const naviOpen = (el) => {
  el.style.height = 'auto';
  let h = el.offsetHeight;
  el.style.height = h + 'px';
  el.animate([
    {height: 0},
    {height: h + 'px'}
  ], {
    duration: 300
  });
  el.style.height = 'auto';
}

const naviClose = (el) => {
  let h = el.offsetHeight;
  el.style.height = h + 'px';
  el.animate([
    {height: h + 'px'},
    {height: 0}
  ], {
    duration: 300
  });
  el.style.height = 0;
}



