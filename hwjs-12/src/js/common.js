$(function() {
  'use strict()';

  var $leftArr = $('.carousel-arrow-left');
  var $rightArr = $('.carousel-arrow-right');
  var $elements = $('.carousel-list');

  var $pixelsShift = 
        parseInt($('.carousel-element img').css('max-width')) +
        parseInt($('.carousel-element').css('margin-right'));
  var $currentLeftvalue = 0;
  var $elementsTotal = $elements.find('li').length;
  var $elementsShown = 
        ( parseInt($('.carousel-hider').css('width')) +
          parseInt($('.carousel-element').css('margin-right')) 
        ) / $pixelsShift;
  var $elementsHidden = $elementsTotal - $elementsShown;
  var $minimalShift = - ( $pixelsShift * $elementsHidden );
  var $maximalShift = 0;

  $leftArr.on('click', function() {
    if ( $currentLeftvalue < $maximalShift ) {
      $currentLeftvalue += $pixelsShift;
    } else {
      $currentLeftvalue = $minimalShift;
    }
    $elements.animate({left: $currentLeftvalue + 'px'}, 300);
  });

  $rightArr.on('click', function() {
    if ( $currentLeftvalue > $minimalShift ) {
      $currentLeftvalue -= $pixelsShift;
    } else {
      $currentLeftvalue = $maximalShift;
    }
    $elements.animate({left: $currentLeftvalue + 'px'}, 300);
  });

});