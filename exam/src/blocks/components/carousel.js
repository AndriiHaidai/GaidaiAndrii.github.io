/* jshint node: true */
'use strict()';


var carousel1 = document.getElementsByClassName('carousel-container');
carousel(carousel1, { picturesVisible: 1,
  pictureWidthPixels: 250,
  gutterPixels: 15
});


function carousel(el, options) {

  var defaults = {
    picturesVisible: 4,
    pictureWidthPixels: 100,
    gutterPixels: 15
  };
  var settings = extend(defaults, options);

  var $container = el[0];
  var $btnLeft = $container.getElementsByClassName('carousel-controls-prev')[0];
  var $btnRight = $container.getElementsByClassName('carousel-controls-next')[0];
  var btnLeftOuterWidth = $btnLeft.offsetWidth;
  var btnRightOuterWidth = $btnRight.offsetWidth;
  var bttnsAllOuterWidth = btnLeftOuterWidth + btnRightOuterWidth;
  
  var hiderWidth = (settings.pictureWidthPixels * settings.picturesVisible) + (settings.gutterPixels * (settings.picturesVisible - 1));
  var containerWidth = hiderWidth + bttnsAllOuterWidth;
  $container.style.width = containerWidth + 'px';
  
  var $carouselHider = $container.getElementsByClassName('carousel-hider')[0];
  $carouselHider.style.width = hiderWidth + 'px';
  
  var $carouselList = $carouselHider.getElementsByClassName('carousel-list')[0];

  var $carouselElements = $carouselList.getElementsByClassName('carousel-element');
  [].forEach.call($carouselElements, function(item) {
    item.style.marginRight = settings.gutterPixels + 'px';
  });
  var $carouselImages = $carouselList.getElementsByClassName('carousel-element-img');
  [].forEach.call($carouselImages, function(item){
    item.style.width = settings.pictureWidthPixels + 'px';
  });
  

  var hiderHeight = $carouselHider.offsetHeight;
  var btnHeight = $btnLeft.offsetHeight;
  $btnLeft.style.marginTop = 0 * (hiderHeight - btnHeight) / 2 + 'px';
  $btnRight.style.marginTop = $btnLeft.style.marginTop;

  // var $btnLeft = $carouselHider.getElementsByClassName('carousel-controls-prev')[0];
  // var $btnRight = $carouselHider.getElementsByClassName('carousel-controls-next')[0];


  var pixelsShift = settings.pictureWidthPixels + settings.gutterPixels;
  var currentLeftValue = 0;
  var noElementsTotal = $carouselElements.length; // !!!
  var noElementsShown = settings.picturesVisible;
  var noElementsHidden = noElementsTotal - noElementsShown;
  
  var minimalShift = - ( pixelsShift * noElementsHidden );
  var maximalShift = 0;

  
  // $container.show();
  // $container.css('visibility', 'visible');
  $container.style.visibility = 'visible';

    console.log('hiderHeight: ', hiderHeight);
    // debugger;
  
  function animateShift(item, from, to, duration) {
    var start = Date.now(); // сохранить время начала
    var fps = 50;

    var timer = setInterval(function() {
      // вычислить сколько времени прошло с начала анимации
      var timePassed = Date.now() - start;

      if (timePassed >= duration) {
        clearInterval(timer); // конец через duration милисекунд
        return;
      }

      // рисует состояние анимации, соответствующее времени timePassed
      draw(timePassed);

    }, (duration / fps));

    // в то время как timePassed идёт от 0 до duration
    // left принимает значения от 0 до 400px
    function draw(timePassed) {
      item.style.left = (timePassed / duration) * (to - from) + from + 'px';
    }

  }


  // $btnLeft.on('click', function() {
  $btnLeft.addEventListener('click', function() {
    var prevLeftValue = currentLeftValue;
    if ( currentLeftValue < maximalShift ) {
      currentLeftValue += pixelsShift;
    } else {
      currentLeftValue = minimalShift;
    }
    // $carouselList.animate({left: currentLeftValue + 'px'}, 250);
    animateShift($carouselList, prevLeftValue, currentLeftValue, 250);
  });

  // $btnRight.on('click', function() {
  $btnRight.addEventListener('click', function() {
    var prevLeftValue = currentLeftValue;
    if ( currentLeftValue > minimalShift ) {
      currentLeftValue -= pixelsShift;
    } else {
      currentLeftValue = maximalShift;
    }
    // $carouselList.animate({left: currentLeftValue + 'px'}, 250);
    animateShift($carouselList, prevLeftValue, currentLeftValue, 250);
  });

  // return this;
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
