
(function(){
  'use strict';

  var arrQuiz = [
    {
      questionText: 'Вопрос №1',
      correctAnswers: '1',
      option1: 'Вариант ответа №1.1. (правильный)',
      option2: 'Вариант ответа №1.2.',
      option3: '',
      option4: ''
    },
    {
      questionText: 'Вопрос №2',
      correctAnswers: '3',
      option1: 'Вариант ответа №2.1.',
      option2: 'Вариант ответа №2.2. (правильный)',
      option3: 'Вариант ответа №2.3.',
      option4: 'Вариант ответа №2.4.'
    },
    {
      questionText: 'Вопрос №3',
      correctAnswers: '1,3',
      option1: 'Вариант ответа №3.1. (правильный)',
      option2: 'Вариант ответа №3.2.',
      option3: 'Вариант ответа №3.3. (правильный)',
      option4: ''
    }
  ];

  localStorage.setItem('arrQuiz', JSON.stringify(arrQuiz));

  arrQuiz = window.localStorage.getItem('arrQuiz');
  arrQuiz = JSON.parse(arrQuiz);
  
  var quizContainer = document.getElementsByClassName('quiz-container')[0];

  var generateQuizDocumentFragment = obj => 
    `<form class="quiz__form" action="#">
      <header class="quiz__header">Тест по программированию</header>
      <ol>
        ${obj.map(obj => 
          `
            <li class="question">${obj.questionText}
              <ul>
                ${ 
                  Object.keys(obj).join(', ').match(/(option\d+)/g).map( key => 
                  (obj[key] === '') ? '' : 
                    `
                      <li class="quiz__option">
                        <label><input type="checkbox" name="option1">${obj[key]}</label>
                      </li>
                    `
                  ).join('')
                }
              </ul>
            </li>
          `).join('')
        }
      </ol>
      <input type="submit" value="Проверить мои результаты" class="quiz__submit">
    </form>`
  ;

  quizContainer.innerHTML = generateQuizDocumentFragment(arrQuiz);

}());
