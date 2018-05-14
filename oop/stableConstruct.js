/**
 * 稳妥构造函数模式
 */

function creatP(name, age) {
    var o = new Object();

    //私有变量、函数

    o.sayName = function () {
        console.log(name);
    };

    return o;
}
var p1 = creatP('xiaoming', 18);
p1.sayName();

console.log(typeof p1); //Objcet
console.log(p1.constructor == creatP); //false
console.log(p1 instanceof creatP); //false
console.log(Object.prototype.toString.call(p1).slice(8, -1)); //Objcet