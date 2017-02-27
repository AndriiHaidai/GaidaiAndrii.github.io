
(function(){
  'use strict';

  var arrQuiz = [
    {
      questionText: "Вопрос №1",
      correctAnswers: "1",
      option1: "Вариант ответа №1.1. (правильный)",
      option2: "Вариант ответа №1.2.",
      option3: "",
      option4: ""
    },
    {
      questionText: "Вопрос №2",
      correctAnswers: "2",
      option1: "Вариант ответа №2.1.",
      option2: "Вариант ответа №2.2. (правильный)",
      option3: "Вариант ответа №2.3.",
      option4: "Вариант ответа №2.4."
    },
    {
      questionText: "Вопрос №3",
      correctAnswers: "1,3",
      option1: "Вариант ответа №3.1. (правильный)",
      option2: "Вариант ответа №3.2.",
      option3: "Вариант ответа №3.3. (правильный)",
      option4: ""
    }
  ];

  localStorage.setItem('arrQuiz', JSON.stringify(arrQuiz));
  // Убираем в локальном хранилище пустые варианты ответов, если они есть:
  localStorage.arrQuiz = localStorage.arrQuiz.replace(/(,"option\d+":"")/g , '');

  arrQuiz = JSON.parse(window.localStorage.getItem('arrQuiz'));
  var quizContainer = document.getElementsByClassName('quiz-container')[0];
  quizContainer.innerHTML = generateQuizDocumentFragment(arrQuiz);
  
  var btnSubmit = document.getElementById('quiz__submit');
  btnSubmit.addEventListener("click", evalQuiz);

  var btnQuizResultsOk = document.getElementsByClassName('quiz-modal__click')[0];
  var resultsWindow = document.getElementsByClassName('quiz-modal')[0];
  btnQuizResultsOk.addEventListener("click", function() {
    resultsWindow.setAttribute('style', 'display: none;');
  });

  function evalQuiz(){
    
    var form = getForm(this);

    var correctAnswers = JSON.parse(localStorage.arrQuiz).map( el => el.correctAnswers );
    var userAnswers = Array.from(form.getElementsByClassName('question')).map( el => Array.from(el.getElementsByTagName('input'))).
      map( x => x.map( (bx, ind) => bx.checked ? (ind+1)+'' : '' ).join(',').replace(/,{2}/g, ',') ).map( s => s[0] === ',' ? s.substring(1) : s).map( st => st[st.length-1] === ',' ? st.substring(0,st.length-1) : st);
    
    var matches = userAnswers.map( (x, ind) => correctAnswers[ind] === x ).reduce( (x,y) => x && y );
    var quizResultMsg = document.getElementsByClassName('quiz-message')[0];

    if (matches) {
      quizResultMsg.innerHTML = 'Правильно! Все ответы совпали! :)';
    } else {
      quizResultMsg.innerHTML = 'Неправильно! Не все ответы совпали. :( Попытайтесь еще.';
    }

    // clearAllCheckboxes:
    Array.from(document.getElementsByTagName('input')).map( x => x.checked = false );
    resultsWindow.setAttribute('style', 'display: block;');

    function getForm(el){
      while (el) {
        if(el.tagName.toLowerCase() == 'form'){
          return el;
        }
        el = el.parentNode;
      } 
      return 0;
    }
  }

  function generateQuizDocumentFragment(obj) {
    return(
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
                        <label class="option"><input type="checkbox" name="${key}">${obj[key]}</label>
                      </li>
                    `
                  ).join('')
                }
              </ul>
            </li>
          `).join('')
        }
      </ol>
      <input type="submit" value="Проверить мои результаты" class="btn quiz__submit" id="quiz__submit">
    </form>`);
  }
  
}());
