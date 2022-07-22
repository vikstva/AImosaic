const content = document.getElementById('content')
const loader = document.getElementsByClassName('loader')
document.addEventListener("DOMContentLoaded", function() {

  
  setTimeout(() => {
  content.style.display = 'block'
  loader[0].style.display = 'none'
  }, 1500)
});

$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },100);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>700) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});

const slideDelay = 6000;

      const dynamicSlider = document.getElementById("slider");

      var curSlide = 0;
      window.setInterval(()=>{
        curSlide++;
        if (curSlide === dynamicSlider.childElementCount) {
          curSlide = 0;
        }

        dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
      }, slideDelay);
