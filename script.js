'use strict';

//callback

const foo = function (data, callback) {
    if (typeof(data) === 'number') {
        callback(data, 'type number')
    }   else {
        callback(data, 'type not number')
    }
};

const bar = function(dt, str) {
    console.log(str, dt);
};

foo(123, bar);
