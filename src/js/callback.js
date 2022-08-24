
let callbackBtnsOpen = document.querySelectorAll('.callback-btn');
let callbackPopup = document.querySelector('.callback');
let wrapperMain = document.querySelector('.wrapper-main');
let callbackClose = document.querySelector('.callback__close')
let callback = document.querySelector('.callback')
let blur;

callbackBtnsOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    callbackPopup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';
    addBlur();

    blur.addEventListener('click', () => {
      callback.classList.remove('popup_open');
      document.body.style.overflow = 'auto';
      blur.remove()
    })

    callbackClose.addEventListener('click', () => {
      callback.classList.remove('popup_open');
      document.body.style.overflow = 'auto';
      blur.remove()
    })
  })
})

function addBlur(){
  blur = document.createElement('div');
  blur.className = 'blur blur__popup';
  wrapperMain.insertAdjacentElement('beforeend', blur);
}
