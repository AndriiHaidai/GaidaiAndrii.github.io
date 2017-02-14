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
$(function () {
  
  var html = $('#test').html();
  var articles = [
    {
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis perspiciatis modi ipsam deserunt, numquam ad error, rem unde omnis ea. Adipisci pariatur ipsam eos similique explicabo voluptatum asperiores nihil perspiciatis. Facilis excepturi, et eum eligendi quas. Vitae tempore eos ipsam odit architecto. Facilis facere placeat, rem nemo iusto dolor fugit.'
    },
    {
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nobis numquam, itaque! Doloribus labore laboriosam in iusto repellendus assumenda culpa, aliquid odit est consectetur dolores possimus officiis at soluta fugiat sint aspernatur error reiciendis quisquam rerum ipsa dolore explicabo aperiam perspiciatis fugit. Ratione ipsum, sequi quos excepturi cum repudiandae, quod iusto facere vel quae, dicta ab eum rerum cumque autem.'
    },
    {
      title: 'Article 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea et corrupti culpa laudantium beatae voluptate, sapiente perferendis enim numquam labore similique quae, aliquid inventore quisquam, blanditiis commodi hic esse! Deserunt placeat ducimus ab, repellat cumque dolore voluptatum. Quisquam, ut illo libero nihil, adipisci ipsa quae, suscipit dolores, a explicabo dignissimos consequatur! Dicta ad obcaecati vero odit reiciendis iste, tenetur quibusdam id minus, aspernatur quam quos, praesentium quo explicabo provident cumque.'
    },
    {
      title: 'Article 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui blanditiis non cum, voluptates illo a cumque praesentium ad rem voluptatum!'
    },

  ];
  var content = tmpl(html, {
    data: articles
  });

  $('body').append(content);

});