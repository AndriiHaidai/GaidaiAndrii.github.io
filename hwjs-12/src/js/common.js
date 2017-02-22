$(function() {
  
  $('.carousel-container').carousel({
    picturesVisible: 3,
    pictureWidthPixels: 150,
    gutterPixels: 35
  });

});

(function ($) {
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
})(jQuery);
