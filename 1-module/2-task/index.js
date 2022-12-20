/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let validName
  if (name == null) {
    validName = false // если имя пустое, то false
  } else if (name.indexOf(` `) != -1) {
    validName = false // если имя содержит пробел, то false
  } else if (name.length < 4) {
    validName = false // если длина имени менее 4 символов, то false
  } else validName = true;
  return validName;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
