var body = document.body;

var dbQuiz = {
  dbQuestion1: {
    questionText: 'Вопрос №100',
    option1: 'Вариант ответа №101',
    option2: 'Вариант ответа №102',
    option3: '',
    option4: ''
  },
  dbQuestion2: {
    questionText: 'Вопрос №2',
    option1: 'Вариант ответа №1',
    option2: 'Вариант ответа №2',
    option3: 'Вариант ответа №3',
    option4: 'Вариант ответа №4'
  },
  dbQuestion3: {
    questionText: 'Вопрос №3',
    option1: 'Вариант ответа №1',
    option2: 'Вариант ответа №2',
    option3: 'Вариант ответа №3',
    option4: ''
  }
};

dbQuiz.addAsForm = function(parentObject, formClass, formAction, headerClass, headerText, questionClass, optionClass, submitButtonText) {
  var docFragment = document.createDocumentFragment();
  var form = document.createElement('form');
  form.className = formClass;
  form.setAttribute('action', formAction);

  var header = document.createElement('header');
  header.className = headerClass;
  header.innerHTML = headerText;

  var questionsList = document.createElement('ol');

  docFragment.appendChild(form);
  form.appendChild(header);
  form.appendChild(questionsList);

  for (var q in this) {
    if (q === 'addAsForm') {
      continue;
    }
    var question = document.createElement('li');
    question.classList.add(questionClass);
    question.innerHTML = this[q].questionText;
    questionsList.appendChild(question);
    var ul = document.createElement('ul');
    question.appendChild(ul);
    
    var option, label, input;
    for (var answ in this[q]) {
      if (answ === 'questionText' || this[q][answ] === '') {
        continue;
      } else {
        option = document.createElement('li');
        option.className = optionClass;
        ul.appendChild(option);

        label = document.createElement('label');
        option.appendChild(label);

        input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', answ);
        label.appendChild(input);
        label.innerHTML += this[q][answ];
      }
    }
  }

  var submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', submitButtonText);
  form.appendChild(submit);

  parentObject.appendChild(docFragment);
};

dbQuiz.addAsForm(body, 'test-form', '#'       , 'test-header', 'Тест по программированию', 'question'   , 'option', 'Проверить мои результаты');

