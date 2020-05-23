// Проблемы ES5:
// 1. Всплытие переменных


// console.log(n); // undefined переменная уже имеется, но значение ей не присвоено, должно быть n is nod defined

// var n =5; // Когда объявляем переменную через var она всплывает в саммый вверх

// console.log(n);

///////////////////////////////////////////////////////////////
// 2. Переменную можно переопределить до ее объявления

// console.log(n); // undefined 

// n = 10;

// console.log(n); // 10

// var n = 5;

// console.log(n); // 5

//////////////////////////////////////////////////////////////////////
// 3. переменную можно объявить много раз

// console.log(n); // undefined 

// n = 10;

// console.log(n); // 10

// var n = 5;

// console.log(n); // 5

// function test() {
//       console.log('hi');
// }

// var n = 15;

// console.log(n); // 15

// 4. var объявляется во всей области видимости

// console.log(n) //undefined
// if (true) {
//       var n = 5;
// }

// console.log(n); // видим переменную в консоли, хотя она у нас внутри фигурных скобок

///////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i < 5; i++) {  // var i = 0; будет выводить пять пятерок, потому что переменная хранится в одной и той же ячейке
//       setTimeout(function() {  // let i = 0; в каждой ячейки памяти новая i, каждый раз будет запускаться новая i
//             console.log(i);
//       }, 1000);
// }

// Область видимости let блок кода. В каждой итерации цикла создается своя переменная, в своем блоке кода.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Oбъявление строк, способ. Шаблонные строки.

// const str = "Двойные кавычки";

// const str2 = 'Одинарные кавычки';

// // const newStr = `Обратные кавычки`;

// const newStr =  `<h1>Hello</h2>
//                         <div>World</div>`;

// console.log(newStr);


// const name = 'Alex',
// age = 30;

// const str3 =  "<div>" + name + "</div> \n" +
//                         "<div>" + age +1+ "</div>";
// console.log(str3);

// const str4 =  `<h1>Hello</h2>
//                   <div>${name}</div> // интерполяция  // <div>Alex</div>
//                   <div>${age + 1 }</div>`; // <div>31</div>

// console.log(str4);

////////////////////////////////////////////////////////////////////////////////////////

// Параметры по умолчанию. 

// const createHome = function(wall = 4, doors = 1, window = 2) {  // Есть возможность задавать значения
// для параметров по умолчанию в момент определения функции.
//                                                                                       
//       console.log(`Дом имеет:
//       стены: ${wall},
//       двери: ${doors},
//       окна: ${window}`);
// };

// createHome();
// createHome(10, 15, 20);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Объявление функции. Стрелочные функции

// const sum = (a, b) => {
//       return a+b;
// };

// sum(2, 3);
// console.log('sum(2, 3): ', sum(2, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////

// Если функция возвращает значение без дополнительных вычислений,
//  то необязательно использовать тело функции и return

//  const sum = (a, b) => a+b;

// console.log('sum(2, 3): ', sum(2, 3));  // 5

///////////////////////////////////////////////////////////////

// const sum = a => a + 3;

// console.log(sum(2));  // 5

///////////////////////////////////////////////////////////////////

// Если функция возвращает объект:

 const sum = (a, b) =>({
      a: a,
      b: b,
      sum: a+b
 });

console.log( sum(2, 4));  // 5

////////////////////////////////////////////////////////////////
// const img = document.querySelector('img');
// img.addEventListener('click', (e) => {
//       console.log(e.target);
// });

///////////////////////////////////////////////////////////////////
// Если у нас будет несколько картинок:

// const img = document.querySelectorAll('img');

// img.forEach((e) => {
//       console.log(e); // получили все элементы(картинки)
// });

////////////////////////////////////////////////////////////////////

// У стрелочных функций нет контекста вызова. Нет ключевого слова this 
// this будет использована в той функции, в которой эта this была объявлена

// getExpenses: function () {
//       expensesItem.forEach((item) => {
//             let itemExpenses = item.querySelector('.expenses-title').value;
//             let cashExpenses = item.querySelector('.expenses-amount').value;
//             if (itemExpenses !== '' && cashExpenses !== '') {
//                   this.expenses[itemExpenses] = cashExpenses;
//             }
//       });
// };

//////////////////////////////////////////////////////////////////////////////////////////////

const Human = function(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
};

const human1 = new Human('john', 'wick', 30);

console.log(human1);