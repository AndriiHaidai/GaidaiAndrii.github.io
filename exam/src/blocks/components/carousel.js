/* jshint node: true */
'use strict()';


var $carousels = document.querySelectorAll('.carousel__container');

for (var i = 0; i <= $carousels.length - 1; i++) {
  carousel($carousels[i], { 
    picturesVisible: 1,
    pictureWidthPixels: 300,
    gutterPixels: 20,
    durationAnimation: 250,
    initialIndex: i
  });
}

// [].forEach.call($carousels, function(item){
//   carousel(item, { 
//     picturesVisible: 1,
//     pictureWidthPixels: 300,
//     gutterPixels: 20,
//     durationAnimation: 250
//   });
// });



function carousel(el, options) {

  var defaults = {
    picturesVisible: 4,
    pictureWidthPixels: 100,
    gutterPixels: 15,
    durationAnimation: 1000,
    initialIndex: 0
  };
  var settings = extend(defaults, options);

  // Присвоение Объектов
  var page = document.querySelector('.page');
  var pageWrapper = document.querySelector('.page__sizer');
  var container = el;
  var carouselHider = container.querySelector('.carousel__hider');
  var carouselList = carouselHider.querySelector('.carousel__list');
  var $carouselElements = carouselList.querySelectorAll('.carousel__element');
  var $carouselImages = carouselList.querySelectorAll('.carousel__element-img');

  var btnLeft = container.querySelector('.carousel__controls-prev');
  var btnRight = container.querySelector('.carousel__controls-next');
  // END Присвоение Объектов.

  // Объявление Ширины
  var pageWidth = page.clientWidth;
  var hiderWidth;
  
  var list = {
    bgImageWidth: 358,
    shiftStep: 0,
    leftmostPosition: -1000,
    rightmostPosition: 0,
    currentPosition: 0,
    prevPosition: 0,
    currentItem: settings.initialIndex
  };
  
  // var showElementsStartingFrom; // Если мы в режиме "карусель", то с какого элемента начинаются отображаемые элемены. Нумерация с 1.
  // END Объявление Ширины
  

  var noElementsTotal = $carouselElements.length;
  var noElementsShown = settings.picturesVisible;
  var noElementsHidden = noElementsTotal - noElementsShown;
  // showElementsStartingFrom = 1; // Нумерация порядковых номеров элементов, начиная с 1.
  

  var initialWidth = window.innerWidth;
  applyWidth();
  // window.addEventListener('resize', applyWidth);
  window.addEventListener('resize', function(event){
    if (initialWidth != window.innerWidth) {
      applyWidth();
      initialWidth = window.innerWidth;
    }
    return event;
  });
  
  
  container.style.visibility = 'visible';


  var finishedShiftAnimation = true;

  btnLeft.addEventListener('click', function() {
    if ( !finishedShiftAnimation ) {return false;}
    list.prevPosition = list.currentPosition;
    if ( list.currentPosition < list.rightmostPosition ) {
      list.currentPosition += list.shiftStep;
      list.currentItem--;
    } else {
      list.currentPosition = list.leftmostPosition;
      list.currentItem = noElementsTotal - 1;
    }
    animateShift(carouselList, list.prevPosition, list.currentPosition, settings.durationAnimation);
  });

  btnRight.addEventListener('click', function() {
    if ( !finishedShiftAnimation ) {return false;}
    list.prevPosition = list.currentPosition;
    if ( list.currentPosition > list.leftmostPosition ) {
      list.currentPosition -= list.shiftStep;
      list.currentItem++;
    } else {
      list.currentPosition = list.rightmostPosition;
      list.currentItem = 0;
    }
    animateShift(carouselList, list.prevPosition, list.currentPosition, settings.durationAnimation);
  });


  function checkWidthChange(target){

  }

  function applyWidth(){
    
    var pageMarginLeft = parseInt(getComputedStyle(pageWrapper).marginLeft);
    var pageMarginRight = parseInt(getComputedStyle(pageWrapper).marginRight);
    var pageMargins = pageMarginLeft + pageMarginRight;
    var pageWrapperWidth = pageWrapper.offsetWidth;
    // var pageWrapperWidth = pageWrapper.scrollWidth;

    list.bgImageWidth = page.offsetWidth >= 768 ? 620 : 358;
    // list.bgImageWidth = page.scrollWidth >= 768 ? 620 : 358;

    hiderWidth = Math.min(
      list.bgImageWidth, 
      (page.offsetWidth >= 768 ? 
        pageWrapperWidth / 3 :
        page.offsetWidth - pageMargins)
      // (page.scrollWidth >= 768 ? 
      //   pageWrapperWidth / 3 :
      //   page.scrollWidth - pageMargins)
    ); 
    
    settings.pictureWidthPixels = Math.min(
      list.bgImageWidth,
      hiderWidth
    );
    
    carouselHider.style.width = hiderWidth + 'px';
  
    [].forEach.call($carouselElements, function(item) {
      item.style.marginRight = settings.gutterPixels + 'px';
      item.style.width = settings.pictureWidthPixels + 'px';
    });
  
    // Смещаем кинопленку со слайдами.
    list.shiftStep = settings.pictureWidthPixels + settings.gutterPixels;
    list.leftmostPosition = - ( list.shiftStep * noElementsHidden );
    list.currentPosition = list.rightmostPosition - list.shiftStep * list.currentItem;
    carouselList.style.left = list.currentPosition + 'px';
  }

  function animateShift(item, from, to, duration) {
    var start = Date.now();
    finishedShiftAnimation = false;
    var fps = 50;

    var timer = setInterval(function() {
      var timePassed = Date.now() - start;

      if ( timePassed >= duration ) {
        clearInterval(timer);
        draw(duration);
        finishedShiftAnimation = true;
        return;
      }

      draw(timePassed); // рисует состояние анимации, соответствующее времени timePassed

    }, (duration / fps));

    function draw(timePassed) {
      item.style.left = (timePassed / duration) * (to - from) + from + 'px';
    }

  }

  return el;
}

/**
 * Extend object a with the properties of object b.
 * If there's a conflict, object b takes precedence.
 *
 * @param {Object} a - The first object to merge
 * @param {Object} b - The second object to merge (takes precedence)
 * @api private
 */
function extend(a, b) {

  for (var i in b) {
    a[i] = b[i];
  }

  return a;
}
