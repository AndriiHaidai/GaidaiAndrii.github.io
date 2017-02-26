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
  localStorage.arrQuiz = localStorage.arrQuiz.replace(/(,"option\d+":"")/g , '');

  arrQuiz = window.localStorage.getItem('arrQuiz');
  arrQuiz = JSON.parse(arrQuiz);
  
  var quizContainer = document.getElementsByClassName('quiz-container')[0];

  quizContainer.innerHTML = generateQuizDocumentFragment(arrQuiz);
  
  // 3.
  // На странице должна быть возможность пройти тест. При клике
  // на кнопку "Проверить мои результаты" нужно выполнить проверку
  // правильных ответов и вывести сообщение об успешном или  не успешном
  // прохождении теста. После вывода сообщения, обнулить отметки
  // чтоб тест можно было пройти опять.
  var btnSubmit = document.getElementById('quiz__submit');
  btnSubmit.addEventListener("click", evalQuiz);

  function evalQuiz(){
    
    var correctAnswers = JSON.parse(localStorage.arrQuiz).map( el => el.correctAnswers );

    var form = getForm(this);
    var userResponses = Array.from(form.getElementsByClassName('question')).map( el => Array.from(el.getElementsByTagName('input'))).
      map( x => x.map( (bx, ind) => bx.checked ? (ind+1)+'' : '' ).join(',').replace(/,{2}/g, ',') ).map( s => s[0] === ',' ? s.substring(1) : s).map( st => st[st.length-1] === ',' ? st.substring(0,st.length-1) : st);

    var matches = userResponses.map( (x, ind) => correctAnswers[ind] === x ).reduce( (x,y) => x && y );
    /*console.log(userResponses);
    console.log(correctAnswers);
    console.log('matches: ', matches);
    debugger;*/


    if (matches) {
      alert('Правильно! Все ответы совпали.');
    } else {
      alert('Неправильно! Не все ответы совпали. Попытайтесь еще.');
    }
    
    var clearAllCheckboxes = function() {
      Array.from(document.getElementsByTagName('input')).map( x => x.checked = false );
    }();
    // debugger;


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
                        <label><input type="checkbox" name="${key}">${obj[key]}</label>
                      </li>
                    `
                  ).join('')
                }
              </ul>
            </li>
          `).join('')
        }
      </ol>
      <input type="submit" value="Проверить мои результаты" class="quiz__submit" id="quiz__submit">
    </form>`);
  }
  

}());
