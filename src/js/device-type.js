
let deviceTypeContainer = document.querySelector('.device-type');
let deviceTypeBtn = document.querySelector('.device-type + .section__btn');

deviceTypeBtn.addEventListener('click', () => {
  deviceTypeContainer.classList.toggle('section__container_open');
  deviceTypeBtn.classList.toggle('section__btn_open');

  if(deviceTypeBtn.classList.contains('section__btn_open')){
    deviceTypeBtn.innerText = 'Скрыть'
  }
  else {
    deviceTypeBtn.innerText = 'Показать все'
  }
})
