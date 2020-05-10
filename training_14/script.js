// let arr = [1, 2, 3, 4, 5];

// console.log(arr.__proto__);
// console.log(Array.prototype);

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

    // console.log(newCar.doors);
    
    // console.log(newCar.hasOwnProperty('model'));
    // console.log(newCar.hasOwnProperty('doors'));
    // // есть ли у объекта свойство здесь и сейчас. Метод не видит наследуемые св-ва.

    // console.log(newCar.__proto__.hasOwnProperty('model'));
    // console.log(newCar.__proto__.hasOwnProperty('doors'));
    // // наследуемые свойства у прототипа.

    // console.log(car.isPrototypeOf(newCar));
    // Явлется ли объект car прототипом newCar

    ////////////////////////////////////////////////////////////////////////////////////

// конструкторы

function Car() {
    this.model = 'Mazda'
}

let car1 = new Car();


