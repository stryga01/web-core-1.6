let aboutUsBtn = document.querySelector('.about-us__btn');
let aboutUsContainer = document.querySelector('.about-us__wrapper');



aboutUsBtn.addEventListener('click', (e)=>{
  aboutUsBtn.classList.toggle('section__btn_open')
  aboutUsContainer.classList.toggle('about-us__wrapper_open')
  if(aboutUsBtn.classList.contains('section__btn_open')){
    e.target.innerText = 'Скрыть'
  }
  else {
    e.target.innerText = 'Читать далее'
  }
})
