
//  Завдання 1
//  Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення.
//  Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек із цим значенням 
//  або виводить помилку в консоль якщо це не стрічка або колбек не є функцією

function isString(callback, value) {
  if (typeof callback === "function" && typeof value === "string") {
    callback(value);
  } else {
    throw new Error("String is not a string or callback is not a function")
  }
}

function callbackFunc(str) {
  console.log(`Input string: ${str}`)
}

isString(callbackFunc, 'It is a string')
isString(callbackFunc, 53)