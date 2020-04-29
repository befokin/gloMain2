// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//     kill: function() {
//         this.item.forEach(function(elem) {
//             console.log(elem);
//         })
//         console.log(this);
//     }
// };

// enemies.kill();


// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//     handler: function() {
//         const _this = this;
//         this.item.forEach(function(elem) {
//            console.log(_this);
//         _this.kill(elem);
//         })
//     },

//     kill: function(enemy) {
//         console.log('Победили '+ enemy.name);
//     }
// };
// enemies.handler();

////////////////////////////////////////////////////////////////////////


// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//     handler: function() {
   
//         this.item.forEach(function(elem) {
    
//         this.kill(elem);
//         }, this)
//     },

//     kill: function(enemy) {
//         console.log('Победили '+ enemy.name);
//     }
// };
// enemies.handler();




//////////////////////////////////////////////////////////////////////

// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//    handler:  function() {
//         console.log(this);
//         this.item.forEach(function(elem) {
//             this.kill(elem);
//         },  this)
//     },
    

//     kill: function(enemy) {
//         console.log('Победили '+ enemy.name);
//     }
// };

// const btn = document.getElementById('btn');

// btn.addEventListener('click', enemies.handler.bind(enemies));



///////////////////////////////////////////////////////////////////////

// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//       kill: function(enemy) {
//         console.log('Победили '+ enemy.name);
//     }
// };

//     const btn = document.getElementById('btn');

//     function handler() {
//         console.log(this);
//         this.item.forEach(function(elem) {
//             this.kill(elem);
//         },  this)
//     }


// btn.addEventListener('click', handler.bind(enemies));

//////////////////////////////////////////////////////////////////////////

// "use strict";

// const enemies = {
//     item: [
//         {
//             name: 'Половцев',
//             year: 1200,
//         },
//         {
//             name: 'Печенегов',
//             year: 1200,
//         },
//         {
//             name: 'Заразу короновирусную',
//             year: 1200,
//         }
//     ],

//       kill: function(enemy, str) {
//         console.log(str+ enemy.name);
//     }
// };

//     const btn = document.getElementById('btn');

//     function handler(string) {
//         console.log(this);
//         this.item.forEach(function(elem) {
//             this.kill(elem, string);
//         },  this)
//     }


// btn.addEventListener('click', handler.bind(enemies, 'Уничтожили'));



// ////////////////////////////////////////////////////////////////////////////////

"use strict";

const enemies = {
   
    item: [
      
        {
            name: 'Половцtd',
            year: 1200,
        },
        {
            name: 'Печенегjd',
            year: 1200,
        },
        {
            name: 'Заразe короновирусную',
            year: 1200,
        }
    ],
   

   kill: function(enemy, str) {
        console.log(str+ enemy.name);
    }
};

const btn= document.getElementById('btn');

function handler(string) {
    console.log(this);
    this.item.forEach(function(elem) {
          
       this.kill(elem, string);
       }, this)
   };

// handler.call(enemies);
handler.call(enemies, 'kill   ',  'Привет ' );
// handler.apply(enemies, ['kill ', 'Привет ' ]);

// //////////////////////////////////////////////////////////////////////////////

// "use strict";

// const enemies = {
//     a: 5,
//     b: 10,
//     item: [
      
//         {
//             name: 'Половцtd',
//             year: 1200,
//         },
//         {
//             name: 'Печенегjd',
//             year: 1200,
//         },
//         {
//             name: 'Заразe короновирусную',
//             year: 1200,
//         }
//     ],
   

//    kill: function(enemy, str) {
//         console.log(str+ enemy.name);
//     }
// };

// const btn= document.getElementById('btn');

// const car1 = {
//     brand: 'Mazda',
//     model: '3',
//     doors: 4
// };

// const car2 = {
//     brand: 'Volvo',
//     model: 's40',
//     doors: 5
// };

// function showCar(b, m) {
//         console.log(this[b]+ ' модель: ' + this[m]);
// }

// const arr = ['brand', 'model'];

// // showCar(car1);
// // showCar.apply(car1);
// // showCar.apply(car1, ['brand', 'model']);
// // showCar.call(car1, 'brand', 'model');
// // showCar.apply(car1, arr);
// // showCar.apply(car2, arr);

// const showCar1 = showCar.bind(car1, 'brand', 'model');
// showCar1();