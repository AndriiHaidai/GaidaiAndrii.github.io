/*7.
  Создать класс Human, у которого будут свойства обычного человека: имя, возраст, пол, рост, вес. 
  Используя прототипное наследование создать дочерние классы 
    Worker (дописать в них поля места работы, зарплатой, методом "работать") и
    Student (дописать поля места учебы, стипендией, методом "смотреть сериалы")

8.
  Создать несколько экземпляров классов Worker и Student, вывести их в консоль. 
  Убедиться что они имеют поля родительского класса Human*/


function Human() {
  this.humanName = 'User';
  this.humanAge = '22';
  this.humanSex = 'male';
  this.humanHeight = '180';
  this.humanWeight = '55';
}
// End of Gulp js chunk #1.

function Worker(company, salary, name, age, sex, height, weight) {
  this.company = company || 'Google';
  this.salary = salary || '2000';
  this.name = name || this.humanName;
  this.age = age || this.humanAge;
  this.sex = sex|| this.humanSex;
  this.height = height || this.humanHeight;
  this.weight = weight || this.humanWeight;
  this.work = function () {
    alert('I am working hard!');
  };
}

Worker.prototype = new Human();
// End of Gulp js chunk #2 or chunk #3 (order is not important among 2 and 3 and can be randoized).

function Student(university, scholarship, name, age, sex, height, weight) {
  this.university = university || 'KPI';
  this.scholarship = scholarship || '800';
  this.name = name || this.humanName;
  this.age = age || this.humanAge;
  this.sex = sex|| this.humanSex;
  this.height = height || this.humanHeight;
  this.weight = weight || this.humanWeight;
}

Student.prototype = new Human();
// End of Gulp js chunk #2 or chunk #3 (order is not important among 2 and 3 and can be randoized).


//-*-*-*-*-*-*-//
// Start of Gulp js unordered 'all other' chunks.
var andrii = new Worker('Cogniance', '1000', 'Andrii', '36', '', '172', '65');
var oksana = new Worker('Lifecell', '1500', 'Oksana', '', 'female', '163', '55');

console.log(andrii);
console.log(oksana);

var pavlo = new Student('ВНТУ', '50', 'Pavlo', '20', 'male');
var olga = new Student('NAU', '75', 'Olga', '31', 'female');

console.log(pavlo);
console.log(olga);


var btn = document.getElementById('search__button');
btn.addEventListener('click', showResults);

var input = document.getElementById('search__text');
input.onkeydown = waitForEnterKey;

function waitForEnterKey(e){
  if (e.target.id == 'search__text' && (e.type == 'keydown' || e.type == 'keypress') && e.keyCode == 13) {
    e.preventDefault();
    showResults();
  }
}


function showResults() {

  var searchText = document.getElementById('search__text').value;
  var userRequest = new XMLHttpRequest();

  userRequest.onreadystatechange = function() {
    
    if (userRequest.readyState == 4 && userRequest.status == 200) {
      var data = JSON.parse(userRequest.responseText);
      var html = '<div class="search__result-block">';
        for ( i = 0 ; i < data.results.length; i++ ) {
          html += 
            '<img ' +
              'style="width: ' + data.results[i].media[0].gif.dims[0] + '; ' + 
                     'height: ' + data.results[i].media[0].gif.dims[1] + ';" ' +
              'src="' + data.results[i].media[0].gif.url + '"' +
            '>';
        }
      html += '</div>';
    
      document.getElementById('search__result').innerHTML = html;
    }
  };

  userRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + searchText + '&key=LIVDSRZULELA');
  userRequest.send();
}
