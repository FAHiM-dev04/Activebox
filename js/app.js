$(document).ready(function(){
    // Loding start
    $(window).on("load", function(){
      $(".loding_main").delay(1000).fadeOut(1000);
    })
  
  });
  
  // Swiper js
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });