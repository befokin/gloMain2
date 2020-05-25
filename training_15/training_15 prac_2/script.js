'use strict';

// Getteri, Setteri 

// const mazda = {
//       model: 3,
//       year: 2006
// };

// mazda.color = 'blue';
// присвоили новое значение. Работает одинаково

// mazda['color'] = 'blue';
// присвоили новое значение. Работает одинаково

// Метод для управления свойствами - defined property:
// Object.defineProperty(mazda, 'color', { 
//       value: 'blue', // 'red' //  значение  свойства color
//       writable: true, // false // нужен для того чтобы разрешать присваивать или изменять свойства
//       configurable: true, // false // нужен чтобы запрещать удаление свойства
//       enumerable: true // разрешает видеть или не видеть это свойство во время перебора цикла
// //      атрибуты этого свойства
// });

// // mazda.color = 'blue';
// delete mazda.color;

// console.log(mazda); // color: 'blue

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mazda = {
//       model: 3,
//       year: 2006
// };

// Object.defineProperty(mazda, 'color', { 
//       value: 'red', // 'red' //  значение  свойства color
//       writable: false, // false // нужен для того чтобы разрешать присваивать или изменять свойства
//       configurable: false, // false // нужен чтобы запрещать удаление свойства
//       enumerable: true // разрешает видеть или не видеть это свойство во время перебора цикла
// //      атрибуты этого свойства
// });

// for (let key in mazda) {
//       console.log(key, mazda[key]);  // model 3, year 2006, color red
// }

// console.log(mazda);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mazda = {
//       model: 3,
//       year: 2006
// };

// Object.defineProperty(mazda, 'color', { 
//       value: 'red', // 'red' //  значение  свойства color
//       writable: false, // false // нужен для того чтобы разрешать присваивать или изменять свойство 'color'
//       configurable: false, // false // нужен чтобы запрещать удаление свойства c'olor'
//       enumerable: false // разрешает видеть или не видеть это свойство 'color' во время перебора цикла
// //      атрибуты этого свойства
// });

// for (let key in mazda) {
//       console.log(key, mazda[key]);
// }

// console.log(mazda);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mazda = {
//       model: 3,
//       year: 2006
// };

// mazda.color = 'blue';

// Object.defineProperty(mazda, 'year', { 
     
//       enumerable: false // разрешает видеть или не видеть это свойство 'color' во время перебора цикла
// //      атрибуты этого свойства
// });

// for (let key in mazda) {
//       console.log(key, mazda[key]);
// }
// // два свойства перебрали, а year не видим 
// console.log(mazda);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const car = {
//     brand: 'mazda',
//     model: 3,
//       year: 2006
// };

// car.color = 'blue';

// Object.defineProperty(car, 'fullTitle', {  // definedProperty позволяет добавлять getteri и setteri 
//       get: function() {  // getter отдает значение
//             return this.brand + '  ' + this.model;
//       },
//       set: function(val) {
//             this.brand = val;
//       }
// });

// car.fullTitle = 'BMW';

// console.log(car.fullTitle);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const car = {
      brand: 'mazda',
      model: 3,
      year: 2006,
      get fullTitle() {
            return this.brand + '  ' + this.model;
      },
      set fullTitle(value) {
            this.brand = value;
      }
  };
  
  car.color = 'blue';
  
  
//   car.fullTitle = 'BMW';  
  
  console.log(car.fullTitle); // BMW 3 // Mazda 3
