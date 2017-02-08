$(function() {
  'use strict';

  $('.jcarousel').jcarousel({
    // Configuration goes here
  });

  $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });

  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });

  $('.jcarousel').jcarousel({
    wrap: 'both'
  });
  
});

$(function() {
  'use strict';

  $('.chbox').checkBo();
  
});

$(function() {
  'use strict';

  $('.basic').fancySelect();
  
});

$(function() {
  'use strict';

  $('.dropdown').hover(
    function(){
      $(this).children('.sub-menu').slideDown(200);
    },
    function(){
      $(this).children('.sub-menu').slideUp(200);
    }
  );
  
});
