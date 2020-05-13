// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// у него есть ссылка на прототип

// console.log(arr.__proto__);

// console.log(Array.prototype);
// функция конструктор. Зарезервированная функция на основе которой создаются массивы. Она имеет при себе объект прототип.
// Функция конструктор Array с помощью объекта prototype описывает наш массив. Наделяет его методами.Array

// console.log(arr.__proto__ === Array.prototype); //true потому что прототип у них один


// let car = {
//     doors: 4,
//     turbocharging: false,
//     ride: function() {
//         console.log('Машина едет ');
//     }
// };
// prototype
//////////////////////////////////////////////////////////////////
// let newCar = Object.create(car);

    // console.log('newCar: ', newCar);

    // создали новый объект newCar на основе нашего объекта car 
    /////////////////////////////////////////////////////////////////////////////////

  //   let car = {
  //     doors: 4,
  //     turbocharging: false,
  //     ride: function() {
  //         console.log('Машина едет ');
  //     }
  // };
  
    
    // let newCar = Object.create(car);

    // newCar.model = 'mazda 3';
    // добавили в объект новое свойство

    // console.log(newCar.doors); //4
    // свойство, которое наследуется из объекта car door. Получили его от прототипа.
    // Объект, который является прототипом не знает сколько у него потомков (сколько на основе него создано объектов).
    
    // console.log(newCar.hasOwnProperty('model')); // true означает есть ли такое свойство у нашего объекта
    // console.log(newCar.hasOwnProperty('doors')); // false
    // // есть ли у объекта свойство здесь и сейчас. Метод не видит наследуемые св-ва.

    // console.log(newCar.__proto__.hasOwnProperty('model')); //false
    // console.log(newCar.__proto__.hasOwnProperty('doors'));  //true
    // Проверяем свойства у нашего прототипа. Таким образом проверили наследуемые свойства у прототипа.

  
    // console.log(car.isPrototypeOf(newCar)); // true
    // Явлется ли объект car прототипом newCar

    ////////////////////////////////////////////////////////////////////////////////////

// конструкторы

// function Car() { // функция конструктор
//     this.model = 'Mazda' // this это ссылка на новосозданный объект. Мы обращаемся к его ключу model
// // и если этого ключа нет в новом объекте, то мы его создаем и присваевыаем значение mazda
// }


// let car1 = new Car();
// // Любая функция может быть использована как конструктор, т.е. вызвана с помощью оператора new
// // Чтобы выделить функции конструкторы их называют с большой буквы.
// // Четвертое правило this. Если объект создан через оператор new, то this будет указывать на этот объект.
// console.log(car1);
// console.dir(Car); // вызовем функцию, как объект. Раскроем и видим, что функция имеет прототип,
// // и его можно заполнить своими методами. 

// let carTest = {
//   model: 'Mazda'
// };

// console.log(carTest);
// // раскроем их прототипы: у объекта new Car1, созанный с помощью конструктора имеется дополнительный прототип,
// // прослойка. Для тогочтобы добавлять туда свои методы.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Car() { 
//   this.model = 'Mazda' 
// }

// Car.prototype.ride = function () {
//   // обращаемся к нашей функции Car, к ее prototype и добавим новый метод ride 
//   console.log('Ехать'); // В prototype появилась функция ride.
//   //  У объекта поражденной этой функцией  Car1, также в прототипе этой функции появился ride 
// };

// let car1 = new Car();

// car1.ride(); // Ехать

// console.log(car1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Car(model, color) { 
//   this.model = model;
//   this.color = color; 
// }

// let car1 = new Car('Mazda', 'Red'); // model: 'Mazda', color: 'Red'
// let car2 = new Car('VAZ', 'black');

// console.log(car1.ride === car2.ride); // true эти функции равны, потому что это одна и таже функция


// console.log(car1);
// console.log(car2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Классы в JS. ООП

// function Car(brand, model) {
//   // функция конструктор Car. Это является классом. Потомучто его не существует как объект.
//   this.model = brand;
//   this.color = model;
// }

// let car1 = new Car ('mazda', '3'); //определили экземпляр класса. Это объект.
// let car2 = new Car ('BMW', 'X3'); //определили экземпляр класса. Это объект.

// console.log(car1); // объекты созданы с помощью конструктора на основе класса Car
// console.log(car2); // объекты созданы с помощью конструктора на основе класса Car

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Car(brand, model, options) {
//   // функция конструктор Car. Это является классом. Потомучто его не существует как объект.
//   this.brand = brand;
//   this.model = model;
//   options = options || {};
//   this.color = options.color;
//   this.transmition = options.transmission;
// }

// Car.prototype.ride = function () {
// // Можем декларировать поведение наших автомобилей.
// // Обращаемся к функции Car, ее прототипу, и добавляем метод ride
//   console.log(this.brand + ' ' + this.model + '  поехала!');
// };

// let car1 = new Car ('mazda', '3', {color: 'blue'}); 
// let car2 = new Car ('BMW', 'X3', {ABS: 'true'}); 

// console.log(car1); 
// console.log(car2); 

// car1.ride(); // мазда 3 поехала. Все объекты созданные на основе класса будут уникальные (описание свойств: бранд и модель)
// // а поведение, которое прописано в прототипе для них общее
// Наш класс декларирует методы, которые будут у всех экземпляров этого класса
// car2.ride(); // бмв х3 поехала 

// console.log(Car.prototype.isPrototypeOf(car1)); // true
// // Является ли прототип Car прототипом car1

// console.log(car2 instanceof Car); // true
// // Является ли объект сar2 прототипом функции Car

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Car(countryBuild, options) {
  // функция конструктор Car. Это является классом. Потомучто его не существует как объект.
  this.countryBuild = countryBuild;
   options = options || {};
  this.color = options.color;
  this.transmition = options.transmission;
}

Car.prototype.ride = function () {
  console.log(this.brand + '  ' + this.model + ' поехала!');
};

function Audi(countryBuild, options, model, type) {
  // Наследование это отношение между классами при котором класс использует структуру
  //  или поведение другого класса. Это одиночное наследование.
  //  Или других классов. Это множественное наследование.
 this.brand = 'Audi';
//  привяжем бранд Ауди к любому автомобилю, который будет создан на основе класса Audi
  Car.apply(this, arguments);
  // привязываем функцию Car к Audi - это наследование

  this.model = model;
  this.type = type; 
}

Audi.prototype = Object.create(Car.prototype);
// к прототипу Audi присваиваем объект прототипа Car(создаем)

Audi.prototype.constructor = Audi;
// Конструктором car_q7 является функция Car. Исправляем на конструктор функции Audi

let car_q7 = new Audi('germany', {color: 'red'}, 'Q7', 'S');
// Создадим новый объект на основе класса Audi

console.log(car_q7);

console.log(car_q7 instanceof Audi); // true
console.log(car_q7 instanceof Car);  // false потомучто прототип функции Car не был привязан
// к прототипу функции Audi
// От каких классов наследуется наш автомобиль ?

car_q7.ride(); // Audi Q7 поехала! 

console.log(new Object()); // пустой объект создан на основе конструктора Object
// Все объекты в js наследуют свойства от Object prototype 
console.log(car_q7 instanceof Object); // true
// является ли наш объект наследуемым от object ?
// Поэтому у нашего объекта есть методы tostring, valueof и т.п.



