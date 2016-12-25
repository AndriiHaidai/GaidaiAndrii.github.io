console.log('Task: Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число в указанную степень. Указать число и степень пользователь должен через команду prompt. Результат выполнения функции вывести в консоль. Работать с целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать.\n\n' );

var x, y;

function pow(x, y) {
  var res = 1;
  var i;
  
  if ((y !== 0) && ((y % y) !== 0)) {
    // debugger;
    return 'Дробная степень не обрабатывается!';
  }

  if (y > 0) {
    for (i = 1; i <= y; i++) {
      res *= x;
    }
  } else if (y < 0) {
    y = -y;
    for (i = 1; i <= y; i++) {
      res *= x;
    }
    res = 1 / res;
  }

  return res;
}

function checkRes(x, y) {
  console.log('x=', x, 'y=', y, ']> ', (Math.pow(x, y) === pow(x, y)), 'pow(x, y) = ', pow(x, y), ' --**-- Math.pow(x, y) = ', Math.pow(x, y));
}

checkRes(0, 0);

checkRes(1, 0);
checkRes(0, 1);
checkRes(0, -1);
checkRes(-1, 0);

checkRes(3, 0);
checkRes(0, 3);
checkRes(0, -3);
checkRes(-3, 0);

checkRes(4, 3);
checkRes(3, 4);
checkRes(-4, -3);
checkRes(-3, -4);

checkRes(-4, 3);
checkRes(3, -4);
checkRes(-4, -3);
checkRes(-3, -4);

checkRes(3.2, -4);
checkRes(3.2, 4);

console.log ('------------------------------------------------------');

x = prompt('Enter base: ', 1);
y = prompt('Enter power: ', 1);

checkRes(x, y);