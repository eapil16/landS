'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    });

	var swiper1 = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper1,
        },
    });

	var swiper3 = new Swiper(".mySwiper3", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper4 = new Swiper(".mySwiper4", {
        loop: false,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper3,
        },
    });
});
