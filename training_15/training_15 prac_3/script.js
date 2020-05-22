'use strict';
// Функция конструктор называем классом.
// В ES 6:

// class Car {
//       constructor() {
//             this.brand = 'mazda';
            // свойства 
//       }
// }

// const car1 = new Car();

// console.log(car1);

/////////////////////////////////////////////////////////////////////////////////////////

// class Car {
//       constructor(brand, model) {
//             this.brand = brand;
//             this.model = model;
//       }
// }

// const car1 = new Car('mazda', 3);

// console.log(car1);

///////////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//       }

//       washReady() {
//             this.washed = true;
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

// }

// const car1 = new CarWash('mazda', 3);

// car1.washReady();

///////////////////////////////////////////////////////////////////////////////////////////////////////

class CarWash {
      constructor(brand, model) {
            this.brand = brand;
            this.model = model;
            this.washed = false;
      }
      
      washReady() {
            this.washed = true;
            this.report();
      // методы
      }

      report() {
            console.log(this.brand, this.model, this.washed);
      }

}

const car1 = new CarWash('mazda', 3);

car1.washReady();
