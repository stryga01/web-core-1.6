let feedbackBtnsOpen = document.querySelectorAll('.feedback-btn');
let callbackBtnsOpen = document.querySelectorAll('.callback-btn');
let closePopup = document.querySelectorAll('.popup__close')
let feedbackPopup = document.querySelector('.feedback');
let callbackPopup = document.querySelector('.callback');
let blur = document.querySelector('.blur');
let popups = document.querySelectorAll('.popup');

feedbackBtnsOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    feedbackPopup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';
    blur.classList.add('blur__popup');
  })
})

callbackBtnsOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    callbackPopup.classList.add('popup_open');
    document.body.style.overflow = 'hidden';
    blur.classList.add('blur__popup');
  })
})








closePopup.forEach((btn) => {
  btn.addEventListener('click', () => {
    popups.forEach((popup) => {
      popup.classList.remove('popup_open');
    })
    document.body.style.overflow = 'auto';
    blur.classList.remove('blur__popup')
  })
})









blur.addEventListener('click', () => {
  popups.forEach((popup) => {
    popup.classList.remove('popup_open');
  })
  document.body.style.overflow = 'auto';
  blur.classList.remove('blur__popup')
})
















