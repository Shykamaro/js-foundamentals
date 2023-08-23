/* 1.
Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
початкове значення
кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]*/

let numArray = [];

function createArray(min, max) {
  for (let i = min; i <= max; i++) {
    numArray.push(i);
  }
}
createArray(3, 27);
console.log(numArray);

/*
2.
Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз,
 число а+1 - два рази і т.д.
*/
let count = 0;

function showNumbers(a, b) {
  for (let i = a; i <= b; ++i) {
    count++;
    for (let j = 0; j < count; ++j) {
      console.log(i);
    }
  }
}

showNumbers(3, 8);
/*3.
/*Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
randArray(5);  // [399,310,232,379,40]*/

let randomArray = [];

function randArray(k) {
  for (let i = 0; i < k; i++) {
    randomArray.push(Math.floor(Math.random() * 500 + 1));
  }
}

randArray(5);
console.log(randomArray);

/*
4.Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву 
без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]*/

let newArray2 = [0, 12, 35, 78, 52, 12, 35, 37, 89, 96, 0];

function changeArray(arr) {
  arr.sort((a, b) => a - b);
  let result = arr.filter((x, i) => x !== arr[i + 1]);
  console.log(result);
  return result;
}

changeArray(newArray2);

/*5.
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних 
(не приводити тип стрінг в число навіть якщо там лише число)*/

let numberArray = [];
let stringArray = [];

function sortArray(arr) {
  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] === "number") {
      numberArray.push(arr[i]);
    } else if (typeof arr[i] === "object") {
      for (let j = 0; j < arr[i].length; ++j) {
        if (typeof arr[i][j] === "number") {
          numberArray.push(arr[i][j]);
        } else {
          stringArray.push(arr[i][j]);
        }
      }
    } else {
      stringArray.push(arr[i]);
    }
  }
}

sortArray([
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
]);
console.log(numberArray);
console.log(stringArray);

/*6.Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом
 op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.*/

function calculateNums(a, b, op) {
  if (op === 1) {
    return a - b;
  } else if (op === 2) {
    return a * b;
  } else if (op === 3) {
    return a / b;
  } else {
    return a + b;
  }
}

console.log(calculateNums(19, 29, 9));

/*7.Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
  Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.*/

function findUnique(array) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === array[i + 1]) {
      return false;
    } 
  }
  return true;
}

console.log(findUnique([3, 4, 5, 6, 7, 9]));
