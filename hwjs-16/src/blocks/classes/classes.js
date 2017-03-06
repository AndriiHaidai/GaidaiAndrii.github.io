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

var andrii = new Worker('Cogniance', '1000', 'Andrii', '36', '', '172', '65');
var oksana = new Worker('Lifecell', '1500', 'Oksana', '', 'female', '163', '55');

console.log(andrii);
console.log(oksana);


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

var pavlo = new Student('ВНТУ', '50', 'Pavlo', '20', 'male');
var olesya = new Student('NAU', '75', 'Olesya', '31', 'female');

console.log(pavlo);
console.log(olesya);