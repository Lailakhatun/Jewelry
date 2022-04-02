$(function () {
  'use strict'
  // swiper slider
  const swiper = new Swiper('.swiper', {

    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // animated headline
  $('.swiper_content').animatedHeadline();

  // slick slider
  $('.slick_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    autoplay: true,
    speed:500,
    nextArrow: '<i class="fas fa-angle-right next-ar"></i>',
    prevArrow: '<i class="fas fa-angle-left prev-ar"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
  
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

   
  });



  // java script code

function closeMenu() {
  document.getElementById('navbar').style.height = "0%"
}

function openMenu() {
  document.getElementById('navbar').style.height = "100%"
}



 