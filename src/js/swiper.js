import { Swiper, Pagination } from 'swiper'

Swiper.use([Pagination]);
let brandsSwiper;
let deviceTypeSwiper;
let priceSwiper;

const enableSwiper = function() {
  brandsSwiper = new Swiper('.brands__slider',{
    pagination: {
      el: '.brands__pagination',
      clickable: true
    },
    slidesPerView: 1.3,
    spaceBetween: 30,
  });
  deviceTypeSwiper = new Swiper('.device-type__slider', {
    pagination: {
      el: '.device-type__pagination',
      clickable: true
    },
    slidesPerView: 1.3,
    spaceBetween: 30,
  });
  priceSwiper = new Swiper('.services__slider', {
    pagination: {
      el: '.services__pagination',
      clickable: true
    },
    slidesPerView: 1,
    // spaceBetween: 30,
  });
};


const breakpoint = window.matchMedia( '(min-width:768px)' );




const breakpointChecker = function() {

  if ( breakpoint.matches === true ) {

    if ( brandsSwiper !== undefined ) {
      brandsSwiper.destroy( true, true );
      deviceTypeSwiper.destroy(true, true)
      priceSwiper.destroy(true, true)
    }


  } else if ( breakpoint.matches === false ) {

    return enableSwiper();
  }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
