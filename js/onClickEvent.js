// const btns = document.querySelectorAll('button.footer__site-map-item-title');


// btns.forEach((el) => {
//   el.addEventListener('click', () => {
//     let icon = el.querySelector('.footer__site-map-item-icon');
//     let clickTarget = el.nextElementSibling;
//     clickTarget.classList.toggle('active');
//     icon.classList.toggle('active');
//     clickTarget.classList.contains('active') ? naviOpen(clickTarget) : naviClose(clickTarget);
//   })
// })

// const naviOpen = (el) => {
//   el.style.height = 'auto';
//   let h = el.offsetHeight;
//   el.style.height = h + 'px';
//   el.animate([
//     {height: 0},
//     {height: h + 'px'}
//   ], {
//     duration: 300
//   });
//   el.style.height = 'auto';
// }

// const naviClose = (el) => {
//   let h = el.offsetHeight;
//   el.style.height = h + 'px';
//   el.animate([
//     {height: h + 'px'},
//     {height: 0}
//   ], {
//     duration: 300
//   });
//   el.style.height = 0;
// }



class AccodionToggle {
  constructor() {
    this.ttl = document.querySelector('.footer__site-map-btn');
    this.Btns = document.querySelectorAll('button.footer__site-map-item-title');
    this.eventType = this._detectEvent();
    this._addEvent();
  }

  _detectEvent(){
    const isTouchCapable = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch) || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
    return isTouchCapable ? "touchstart" : "click";
  }

  _naviOpen(el) {
    el.style.height = 'auto';
    let h = el.offsetHeight;
    el.style.height = h + 'px';
    el.animate([
      {height: 0},
      {height: h + 'px'}
    ], {
      duration: 300
    });
    el.style.height = 'auto'
  }

  _naviClose(el) {
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

  _target(el) {
    let icon = el.querySelector('.footer__site-map-item-icon');
    let clickTarget = el.nextElementSibling;
    return [clickTarget,icon];
  }

  _classToggle(el) {
    el.classList.toggle('active');
  }

  _contentToggle(el) {
    el.classList.contains('active') ? this._naviOpen(el) : this._naviClose(el);
  }
  
  _addEvent() {
    this.Btns.forEach((el) => el.addEventListener(this.eventType, () =>{
      let target = this._target(el);
      let [clickTarget, icon] = target;
      this._classToggle(clickTarget);
      this._classToggle(icon);
      this._contentToggle(clickTarget);
    }))

    this.ttl.addEventListener(this.eventType, () => {
      const siteMapContainer = this.ttl.nextElementSibling;
      this._classToggle(siteMapContainer);
      this._contentToggle(siteMapContainer)
    })
  }
}

const clickEvent = new AccodionToggle();


