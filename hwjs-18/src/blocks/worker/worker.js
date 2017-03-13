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
