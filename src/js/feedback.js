let wrapperMain = document.querySelector('.wrapper-main');
let feedbackBtnsOpen = document.querySelectorAll('.feedback-btn');
let feedbackPopup = document.querySelector('.feedback');
let blur;
let feedback = document.querySelector('.feedback');
let feedbackClose = document.querySelector('.feedback__close')



function addBlur(){
  blur = document.createElement('div');
  blur.className = 'blur blur__popup';
  wrapperMain.insertAdjacentElement('beforeend', blur )
}



feedbackBtnsOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    feedbackPopup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';
    addBlur();

    blur.addEventListener('click', () => {
      feedback.classList.remove('popup_open');
      document.body.style.overflow = 'auto';
      blur.remove()
    })

    feedbackClose.addEventListener('click', () => {
      feedback.classList.remove('popup_open');
      document.body.style.overflow = 'auto';
      blur.remove()
    })
  })
})

















