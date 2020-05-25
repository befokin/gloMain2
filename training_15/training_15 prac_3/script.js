'use strict';
// Функция конструктор называли классом.
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

// car1.washReady(); // mazda 3 true

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Статические методы и свойства, 
// т.е. методы и свойства будут принадлежать самому классу, а не объекту

// class CarWash {
//       constructor(brand, model) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//       }
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3);

// car1.washReady(); // mazda 3 true

// console.log(CarWash.counter); // 1

////////////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//       }
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3);
// const car2 = new CarWash('BMW', 'x5');
// const car3 = new CarWash('Volvo', 's60');

// car1.washReady(); // mazda 3 true
// car2.washReady(); // BMW x5 true
// car3.washReady(); // Volvo s60 true

// console.log(CarWash.counter); // 3

/////////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel()) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3);
// const car2 = new CarWash('BMW', 'x5');
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');

// console.log(car1.counter); // нельзя указывать // undefined

// car1.noCarBaseModel() // нельзя так указывать


// car1.washReady(); // mazda 3 true
// car2.washReady(); // BMW x5 true
// car3.washReady(); // Volvo s60 true
// car4.washReady();  // ZAZ none true

// console.log(CarWash.counter); // 3

/////////////////////////////////////////////////////////////////////////////////////////////////////

// В классах можно добавлять getteri и setteri

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//             this._services =services  // _ черточка для того чтобы не имели доступа из вне (инкапсуляция)
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

//       get services() {
//             return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
// const car2 = new CarWash('BMW', 'x5');
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');


// console.log(car1.services); // Есть доп услуги
// console.log(car2.services); // Нет доп услуги

///////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//             this._services =services
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

//       get services() {
//             console.log(this._services);
//             return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
//       }

//       set services(addServices) {
//             return this._services.push(addServices);
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
// const car2 = new CarWash('BMW', 'x5');
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');

// car1.services = 'Протирка стекол';

// console.log(car1.services); // Есть доп услуги
// console.log(car2.services); // Нет доп услуги

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//             this._services =services
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

//       get services() {
//             console.log(this._services); 
//             return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
//       }

//       set services(addServices) {
//             return this._services.push(addServices);
//       }
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
// const car2 = new CarWash('BMW', 'x5');
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');

// car2.services = 'Протирка стекол';

// console.log(car1.services); // Есть доп услуги  //  car1 black tyres, wax
// console.log(car2.services); // Есть доп услуги //  car2 протирка стекол


/////////////////////////////////////////////////////////////////////////////////////////

// Наследование

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//             this._services =services
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

//       get services() {
//             console.log(this._services); 
//             return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
//       }

//       set services(addServices) {
//             return this._services.push(addServices);
//       }
// }

// class PassCar extends CarWash {
// // добавили новый класс. Он унаследовал все методы класса CarWash
// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
// const car2 = new PassCar('BMW', 'x5'); // и ничего не поменялось
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');

// car2.services = 'Протирка стекол';

// console.log(car1.services); // Есть доп услуги  //  car1 black tyres, wax
// console.log(car2.services); // Есть доп услуги //  car2 протирка стекол

// car1.washReady(); // mazda 3 true
// car2.washReady(); // BMW X5 true

// console.log(car1); 
// console.log(car2); 

//////////////////////////////////////////////////////////////////////////////////////////////

// class CarWash {
//       constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
//             this.brand = brand;
//             this.model = model;
//             this.washed = false;
//             this._services =services
//       }

//       static noCarBaseModel() {
//             // указываем метод
//             return 'none';
//       }
//       // статический метод
      
//       washReady() {
//             this.washed = true;
//             CarWash.counter++;
//             // количество помытых автомобилей будет увеличиваться
//             this.report();
//       // методы
//       }

//       report() {
//             console.log(this.brand, this.model, this.washed);
//       }

//       get services() {
//             console.log(this._services); 
//             return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
//       }

//       set services(addServices) {
//             return this._services.push(addServices);
//       }
// }

// class PassCar extends CarWash {
// // добавили новый класс. Он унаследовал все методы класса CarWash
//       constructor(brand, model, services, pass = 5) {
//             super(brand, model, services);
//             this.pass = pass;
//             // добавим свое свое свойство
//             // для создания конструктора у наследуемого класса используется ключевое слово super
//       }


// }

// CarWash.counter = 0;

// const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
// const car2 = new PassCar('BMW', 'x5'); // и ничего не поменялось
// const car3 = new CarWash('Volvo', 's60');
// const car4 = new CarWash('ZAZ');

// car2.services = 'Протирка стекол';

// car1.washReady(); // mazda 3 true
// car2.washReady(); // BMW X5 true

// console.log(car1); // 
// console.log(car2); // 

//////////////////////////////////////////////////////////////////////////////////

// Можем изменять методы и создавать новые:

class CarWash {
      constructor(brand, model = CarWash.noCarBaseModel(), services = []) {
            this.brand = brand;
            this.model = model;
            this.washed = false;
            this._services =services
      }

      static noCarBaseModel() {
            // указываем метод
            return 'none';
      }
      // статический метод
      
      washReady() {
            this.washed = true;
            CarWash.counter++;
            // количество помытых автомобилей будет увеличиваться
            this.report();
      // методы
      }

      report() {
            console.log(this.brand, this.model, this.washed);
      }

      get services() {
            console.log(this._services); 
            return this._services.length > 0 ? 'Есть доп услуги' : 'Нет доп услуг';
      }

      set services(addServices) {
            return this._services.push(addServices);
      }
}

class PassCar extends CarWash {
// добавили новый класс. Он унаследовал все методы класса CarWash
      constructor(brand, model, services, pass = 5) {
            super(brand, model, services);
            this.pass = pass;
            // добавим свое свое свойство
            // для создания конструктора у наследуемого класса используется ключевое слово super
      }

      washReady() {
            super.washReady();
      // все команды добавились из метода washReady
            this.reportOffice();
      }

      reportOffice() {
            console.log('На мойке для легковых машин была помыта машина');
      }
}

CarWash.counter = 0;

const car1 = new CarWash('mazda', 3, ['black tyres', 'wax']);
const car2 = new PassCar('BMW', 'x5'); // и ничего не поменялось
const car3 = new CarWash('Volvo', 's60');
const car4 = new CarWash('ZAZ');

car2.services = 'Протирка стекол';

car1.washReady(); // mazda 3 true
car2.washReady(); // BMW X5 true

console.log(car1); // 
console.log(car2); // На мойке для легковых машин была помыта машина



