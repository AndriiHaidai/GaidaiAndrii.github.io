(function () {
  'use strict';

  var menuWide = document.querySelector('.menu__wide');
  var menuIcon = document.querySelector('.menu__icon');

  menuIcon.addEventListener('click', menuShowHide);
  
  document.addEventListener('keydown', function(e) {
    if (e.code == 'KeyM') {
      menuShowHide();
    }
    if (e.code == 'Escape') {
      menuHide();
    }
  });

  function menuShow(){
    if (!menuWide.classList.contains('show')) {
      menuShowHide();
    }
  }

  function menuHide(){
    if (menuWide.classList.contains('show')) {
      menuShowHide();
    } 
  }

  function menuShowHide() {
    menuWide.classList.toggle('show');
  }

}());