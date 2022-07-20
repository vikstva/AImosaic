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

