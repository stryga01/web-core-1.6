
let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side-menu');
let burgerClose = sideMenu.querySelector('.burger_close');
let blur = document.querySelector('.blur');


burger.addEventListener('click', () =>{
  sideMenu.classList.add('side-menu_open')
  document.body.style.overflow = 'hidden';
  blur.classList.add('blur__side-menu')
  blur.addEventListener('click', () =>{
    sideMenu.classList.remove('side-menu_open')
    document.body.style.overflow = 'auto';
    blur.classList.remove('blur__side-menu')
  })
})

burgerClose.addEventListener('click', () => {
  sideMenu.classList.remove('side-menu_open')
  document.body.style.overflow = 'auto';
  blur.classList.remove('blur__side-menu')
})
