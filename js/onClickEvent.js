const btns = document.querySelectorAll('.footer__site-map-item-title');


btns.forEach((el, num) => {
  if(el.classList.contains('link') == false){
    el.addEventListener('click', () => {
      let targetNavi =  el.nextElementSibling;
      targetNavi.classList.toggle('active');
      
      if(targetNavi.classList.contains('active') == true) {
        naviOpen(targetNavi);
      } else {
        targetNavi.classList.remove('active')
        naviClose(targetNavi);
      }
      let activeNum = num;
    })
    
  }
}) 
const ul = document.querySelector('.footer__site-map-ul');
const icon = document.querySelector('.footer__site-map-title-icon');

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

// const lines = document.querySelectorAll('.footer__site-map-btn-sp');
// const text = document.querySelector('.footer__site-map-btn-text');
// const siteMap = document.querySelector('.footer__site-map');

// btn.addEventListener('click', () => {
//   btn.classList.toggle('active');

//   if(btn.classList.contains('active') == true) {
//    text.innerText = "閉じる"
//   }　else {
//     text.innerText = "開く"
//   }
//   // lines.forEach(el => {
//   //   el.classList.toggle('active')
//   // });
//   siteMap.classList.toggle('active')
// })

