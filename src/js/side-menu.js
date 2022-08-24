let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side-menu');
let burgerClose = sideMenu.querySelector('.burger_close');
let blur;
let wrapperMain = document.querySelector('.wrapper-main');


function addBlur(className){
  blur = document.createElement('div');
  blur.className = 'blur blur__side-menu';
  wrapperMain.insertAdjacentElement('beforeend', blur )
}


burger.addEventListener('click', () =>{
  sideMenu.classList.add('side-menu_open')
  document.body.style.overflow = 'hidden';
  addBlur();

  blur.addEventListener('click', () => {
    sideMenu.classList.remove('side-menu_open')
    document.body.style.overflow = 'auto';
    blur.remove();
  })

  burgerClose.addEventListener('click', () => {
    sideMenu.classList.remove('side-menu_open')
    document.body.style.overflow = 'auto';
    blur.remove();
  })
})


