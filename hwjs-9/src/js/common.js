$(function () {
  'use strict';
  var carousel = $('.jcarousel').jcarousel({
    // Core configuration goes here
  });

  $('.jcarousel-prev').jcarouselControl({
      target: '-=1',
      carousel: carousel
    });

    $('.jcarousel-next').jcarouselControl({
      target: '+=1',
      carousel: carousel
  });

  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });

});