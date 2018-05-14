 /**
  * 原型式继承
  */

 var o = {
     name: 'xiaoming',
     age: 18,
     colors: ['red', 'green'],
     sayName: function () {
         console.log(this.name)
     }
 }

 function object(o) {
     function F() {};
     F.prototype = o;
     return new F();
 }
 var p1 = object(o);
 p1.colors.push('yellow');
 console.log(p1.colors); //['red','green','yellow']
 console.log(p1.age);
 p1.sayName();
 var p2 = object(o);
 p2.name = 'xiaohong';
 p2.age = 20;
 console.log(p2.colors); //['red','green','yellow']
 console.log(p2.age);
 p2.sayName();
 console.log(p1.name);
 console.log(p1.age);

 //缺点依然是原型的缺点，引用类型属性共享