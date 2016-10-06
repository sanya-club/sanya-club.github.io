$(function () {
  $('.search').on('click', function () {
    $('.main-menu-bg .navbar-form').slideToggle();
  });
  
  $(".collapse").on("show.bs.collapse", function () {
    $(this).prev().find('#up').removeClass().addClass("fa fa-angle-up");
  });
  
  $(".collapse").on("hide.bs.collapse", function () {
    $(this).prev().find('#up').removeClass().addClass("fa fa-angle-down");
  });
  
  $('.carousel').carousel({
    interval: 2000
  });
  
  new WOW({
    offset: 200      
  }).init();
  
});

 
