import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss'
import '../scss/style.scss';


import { Swiper, Pagination } from 'swiper'

Swiper.use([Pagination]);

const enableSwiper = function() {
  mySwiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 1.2,
    spaceBetween: 30
  });
};


const breakpoint = window.matchMedia( '(min-width:768px)' );

let mySwiper;


const breakpointChecker = function() {

  if ( breakpoint.matches === true ) {

    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );


  } else if ( breakpoint.matches === false ) {

    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();





let sections = document.querySelectorAll('.section');

sections.forEach((section) => {

  let sectionContainer = section.querySelector('.section__container');
  let section__btn = section.querySelector('.section__btn')

  section__btn.addEventListener('click', () => {

    section__btn.classList.toggle('section__btn_open');
    sectionContainer.classList.toggle('section__container_closed');

    if(section__btn.classList.contains('section__btn_open')){
      section__btn.innerText = 'Скрыть'
    }
    else {
      section__btn.innerText = 'Показать все'
    }
  })
})

let burger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side-menu');
let burgerClose = sideMenu.querySelector('.burger_close');

burger.addEventListener('click', () =>{
  sideMenu.style.left = '0';
})

burgerClose.addEventListener('click', () => {
  sideMenu.style.left = '-350px';
})



