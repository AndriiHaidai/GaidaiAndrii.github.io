console.log(
  'Task: Создать программу, которая будет выполнять следующие действия:\n\n',
  'Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен\n',
  'Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя\n',
  'Введенное имя, циклом сравнивать с именами в массиве\n',
  'Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке\n',
  'Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя\n\n' 
);

var arrNames = [];
var userName;
var msg = 'Ошибка! Пользователь с таким именем не найден.';

for (var i = 0; i < 5; i++) {
  arrNames[i] = prompt('Введите любое имя для заполнения массива: ', 'NoName');
  console.log(arrNames.length);
}

userName = prompt('Введите имя пользователя: ', 'NoName');

for (var i = arrNames.length - 1; i >= 0; i--) {
  if (arrNames[i] == userName) {
    msg = userName + ', вы успешно вошли';
    break;
  }
}

alert(msg);
