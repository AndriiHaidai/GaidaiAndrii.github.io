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
'use strict';


  var html;
  var articles;
  var quizContent;

  html = $('#quiz').html();
  
  articles = [
    {
      questionText: 'Вопрос №1',
      correctAnswers: '1',
      option1: 'Вариант ответа №1.1',
      option2: 'Вариант ответа №1.2',
      option3: '',
      option4: ''
    },
    {
      questionText: 'Вопрос №2',
      correctAnswers: '2',
      option1: 'Вариант ответа №2.1',
      option2: 'Вариант ответа №2.2',
      option3: 'Вариант ответа №2.3',
      option4: 'Вариант ответа №2.4'
    },
    {
      questionText: 'Вопрос №3',
      correctAnswers: '2,3',
      option1: 'Вариант ответа №3.1',
      option2: 'Вариант ответа №3.2',
      option3: 'Вариант ответа №3.3',
      option4: ''
    }
  ];

  quizContent = tmpl(html, {
    data: articles
  });

  $('.quiz__form').append(quizContent);
});