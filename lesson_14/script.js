'use strict';

function DomElement (selector, height, width, bg, fontSize){
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
};

DomElement.prototype.createElem  = function() {
      
      if () {
            const newElem1 = document.createElement('.div');
      } else if () {
            const newElem2 = document.createElement('#p')
      }

};

function DomElement2(selector, height, width, bg, fontSize) {
 
      DomElement.apply(this, arguments);
};
    
DomElement2.prototype = Object.create(DomElement.prototype);
     
DomElement2.prototype.constructor =  DomElement2;

const domElement = new DomElement();    
const domElement3 = new DomElement2();
domElement3.createElem();


