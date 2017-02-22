(function($, undefined) {
  'use strict()';

  $.fn.carousel = function(options) {
    
    var defaults = {
      picturesVisible: 4,
      pictureWidthPixels: 250,
      gutterPixels: 25
    };
    var settings = $.extend(defaults, options);

    var $container = this;
    var $buttonLeft = $container.children('.carousel-arrow-left');
    var $buttonRight = $container.children('.carousel-arrow-right');
    var $buttonLeftOuter = $buttonLeft.outerWidth(true);
    var $buttonRightOuter = $buttonRight.outerWidth(true);

    var $buttonsWidthOuter = $buttonLeftOuter + $buttonRightOuter;
    var $hiderWidth = (settings.pictureWidthPixels * settings.picturesVisible) + (settings.gutterPixels * (settings.picturesVisible - 1));
    var $containerWidth = $hiderWidth + $buttonsWidthOuter;
    $container.width($containerWidth + 'px');
    var $carouselHider = $container.children('.carousel-hider');
    $carouselHider.width($hiderWidth + 'px');
    var $carouselElements = $carouselHider.find('.carousel-element');
    $carouselElements.css('margin-right', settings.gutterPixels + 'px');
    var $carouselImages = $carouselHider.find('img');
    $carouselImages.width(settings.pictureWidthPixels + 'px');
    var $carouselList = $carouselHider.children('.carousel-list');

    var $hiderHeight = $carouselHider.outerHeight();
    var $buttonHeight = $buttonLeft.outerHeight();
    var $labelHeight = $carouselImages.next().outerHeight();
    $buttonLeft.css('margin-top', ($hiderHeight - $buttonHeight) / 2 + 'px');
    $buttonRight.css('margin-top', ($hiderHeight - $buttonHeight) / 2 + 'px');

    var $leftArrow = $('.carousel-arrow-left');
    var $rightArrow = $('.carousel-arrow-right');

    var $pixelsShift = settings.pictureWidthPixels + settings.gutterPixels;
    var $currentLeftvalue = 0;
    var $elementsTotal = $carouselElements.length;
    var $elementsShown = settings.picturesVisible;

    var $elementsHidden = $elementsTotal - $elementsShown;
    var $minimalShift = - ( $pixelsShift * $elementsHidden );
    var $maximalShift = 0;
    $container.show();
    $container.css('visibility', 'visible');

    $leftArrow.on('click', function() {
      if ( $currentLeftvalue < $maximalShift ) {
        $currentLeftvalue += $pixelsShift;
      } else {
        $currentLeftvalue = $minimalShift;
      }
      $carouselList.animate({left: $currentLeftvalue + 'px'}, 250);
    });

    $rightArrow.on('click', function() {
      if ( $currentLeftvalue > $minimalShift ) {
        $currentLeftvalue -= $pixelsShift;
      } else {
        $currentLeftvalue = $maximalShift;
      }
      $carouselList.animate({left: $currentLeftvalue + 'px'}, 250);
    });

    return this;
  };

})(jQuery);
