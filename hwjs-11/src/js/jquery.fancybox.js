// Повесить обработчик событий.
// при клике - создавать html и вставлять в DOM.

(function($) {
  'use strict';

  $.fn.fancybox = function(options) {
    
    var defaults = {
      overlayColor: 'black',
      overlayOpacity: '0.5'
    };

    var settings = $.extend(defaults, options);
    console.log('settings', settings);


    var $link = this;
    var $body = $('body');
    var $modal;
    var $overlay;

    function showModal(e) {
      var $href = $link.attr('href');
      $modal = $('<div class="fancybox-modal"><img src="' + $href + '"></div>');
      $overlay = $('<div class="fancybox-overlay">');
      $overlay.css({
        'background-color': settings.overlayColor,
        'opacity': settings.overlayOpacity
      });

      e.preventDefault();

      $overlay.one('click', hideModal);
      $body.append($overlay);
      $body.append($modal);

      // alert("post-catch");
    }

    function hideModal() {
      $modal.remove();
      $overlay.remove();
    }

    $link.on('click', showModal);

    return this;
  };
  
})(jQuery);