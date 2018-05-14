   /**
    * 原型式继承和寄生组合继承
    */

   function object() {
       function F() {};
       F.prototype = o;
       return new F();
   }

   function creatA(o) {
       var clone = object(o);
       clone.sayName = function () {
           console.log('Hi')
       }
   }
   var o = {
       name: 'xiaoming',
       age: 18,
       colors: ['red', 'green']
   };
   var ano = creatA(o);
   ano.sayName();