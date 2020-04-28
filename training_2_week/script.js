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

    handler: function() {
      
       this.item.forEach(function(elem) {
        //    console.log(_this);
            this.kill(elem);
        // console.log(elem);
       }, this)
        // console.log(this);
    },
    kill: function(enemy) {
        console.log('Победили '+ enemy.name);
    }
};

enemies.handler();