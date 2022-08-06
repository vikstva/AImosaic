const content = document.getElementById('bodyContent')
const loader = document.getElementsByClassName('loader')

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    content.style.display = 'block'
    loader[0].style.display = 'none'

    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, 1500)
})


$(function () {
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
  })
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
})
