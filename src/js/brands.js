
let brandsContainer = document.querySelector('.brands');
let brandsBtn = document.querySelector('.brands + .section__btn');

brandsBtn.addEventListener('click', () => {
  brandsContainer.classList.toggle('brands_open');
  brandsBtn.classList.toggle('section__btn_open');

  if(brandsBtn.classList.contains('section__btn_open')){
    brandsBtn.innerText = 'Скрыть'
  }
  else {
    brandsBtn.innerText = 'Показать все'
  }
})
