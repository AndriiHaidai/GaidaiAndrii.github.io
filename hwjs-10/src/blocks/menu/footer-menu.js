$(function() {
  'use strict';

  $('.dropdown').hover(
    function(){
      $(this).children('.sub-menu').stop().slideDown(200);
    },
    function(){
      $(this).children('.sub-menu').stop().slideUp(200);
    }
  );
  
});
