/*
1.
Напишіть функцію sumSliceArray(arr, first, second)
, яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву,
 які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
 Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або 
 обидва більшого розміруза довжину масиву. 
 Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
 */

function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    return "Input is not an array";
  }

  if (typeof arr[first] !== "number" || typeof arr[second] !== "number") {
    return "Both 'first' and 'second' should be numbers";
  }

  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    return "Indices are out of range";
  }

  return arr[first] + arr[second];
}

let newArr = ["error", 42, 46, 76, 98, 76, 66, 85, 32, 11];

console.log(sumSliceArray(newArr, 0, 5));



/*
2.
Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
 та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років 
 (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі 
 (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). 
 У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
  У всіх інших випадках користувач отримає доступ до перегляду фільму. 
  У блоці catch передбачена можливість виведення назви та опису помилки.
  */

  function checkAge() {
    let name = window.prompt("What is your name?");
    let age = window.prompt("How old are you?");
    let status = window.prompt("What is your status?Are you admin or moder or user");
    
    if (age < 18 || age > 70){
        throw new RangeError("Your age is not valid");
    }
    if (name === "" || age === "" || status === ""){
        throw new Error("The field is empty! Please enter your age");
    }
    if (status !== "admin" || status !== "moder" || status !== "user" ){
        throw new EvalError("Your status is wrong");
    }
    if (isNaN(age)){
        throw new Error("Age is not a number");
    }

    console.log(name,age,status);
    return true;
  }
  
  try{
    checkAge();
  }catch(err){
     console.log(err.name,err.message);
  }
  
  


  /*
  3.
Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота 
прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
 якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
*/

function alcRectangleArea(width, height){
    if (width <= 0 || height <= 0){
        return
    }
    if (isNaN(width) || isNaN(height)){
        return 
    }
    return width*0.5*height;
}

alcRectangleArea(7,5);


/*
4.
Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name 
значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу 
кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));  // May
console.log(showMonthName(14)); // MonthException Incorrect month number
*/


