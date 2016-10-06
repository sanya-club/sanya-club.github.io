(function ($) {
  'use strict';

  $(document).ready(function () {
    
    function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {
          $menu.removeAttr('style');
        }
      });
    }
    blueasyMenu();

  }); //end ready
  
  $(".ninja-btn").click( function() {
  $(this).toggleClass("active");
});

}(jQuery));