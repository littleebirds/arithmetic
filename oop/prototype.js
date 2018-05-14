   /**
    * 原型模式
    */

   function creatP() {

   }
   creatP.prototype.name = 'xiaoming';
   creatP.prototype.age = 18;
   creatP.prototype.sayName = function () {
       console.log(this.name);
   };
   var p1 = new creatP();
   p1.sayName();
   console.log(typeof p1); //object
   console.log(p1.constructor == creatP); //true
   console.log(p1 instanceof creatP); //true
   console.log(Object.prototype.toString.call(p1).slice(8, -1)); //object

   //更简单的写法
   function creatP1() {}
   creatP1.prototype = {
       constructor: creatP1, //相当于重写了原型，constructor变空，所以再次把构造器指向本身
       name: 'xiaoming',
       age: 18,
       sayName: function () {
           console.log(this.name)
       }
   }
   var p11 = new creatP1();
   p11.sayName();
   console.log(typeof p11); //object
   console.log(p11.constructor == creatP1); //true
   console.log(p11 instanceof creatP1); //true
   console.log(Object.prototype.toString.call(p11).slice(8, -1)); //object

   //引发的问题，属性共享