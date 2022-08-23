let popup = document.querySelectorAll('.popup');
let feedback = document.querySelector('.feedback')
console.log(popup);
let popupClose = document.querySelector('.popup__close');
let feedbackBtns = document.querySelectorAll('.feedback-btn');
let blur = document.querySelector('.blur');
let callbackBtns = document.querySelectorAll('.callback-btn')


// popupBtns.forEach((btn) =>{
//   btn.addEventListener('click', () =>{
//     popup.classList.add('popup_open')
//     document.body.style.overflow = 'hidden';
//     blur.classList.add('blur__popup')
//     blur.addEventListener('click', () =>{
//       popup.classList.remove('popup_open')
//       document.body.style.overflow = 'auto';
//       blur.classList.remove('blur__popup')
//     })
//   })
// })
//
// popupClose.addEventListener('click', () => {
//   popup.classList.remove('popup_open')
//   document.body.style.overflow = 'auto';
//   blur.classList.remove('blur__popup')
// })

//
// callbackBtns.forEach((btn) =>{
//   btn.addEventListener('click', () =>{
//     popup.classList.add('popup_open')
//     document.body.style.overflow = 'hidden';
//     blur.classList.add('blur__popup')
//     blur.addEventListener('click', () =>{
//       popup.classList.remove('popup_open')
//       document.body.style.overflow = 'auto';
//       blur.classList.remove('blur__popup')
//     })
//   })
// })
//
// popupClose.addEventListener('click', () => {
//   popup.classList.remove('popup_open')
//   document.body.style.overflow = 'auto';
//   blur.classList.remove('blur__popup')
// })

// blur.addEventListener('click', ()=>{
//
// })

function addListener(openBtns, closeBtn, popup){
  openBtns.forEach((button)=>{
    button.addEventListener('click', () => {

      if(popup.classList.contains('popup_open')){
        closePopup(popup)
      }
      else {
        openPopup(popup);
      }

    })
  })
}

function openPopup(popup){
  popup.classList.add('popup_open');
  document.body.style.overflow = 'hidden';
  blur.classList.add('blur__popup');
}

function closePopup(popup){
  popup.classList.remove('popup_open')
  document.body.style.overflow = 'auto';
  blur.classList.remove('blur__popup')
}

addListener(feedbackBtns,feedback);
addListener(popupClose,feedback)















