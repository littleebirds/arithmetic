/**
 * 通过原型链继承
 */
function AA() {
    this.name = 'xiaoming';
}
AA.prototype.sayName = function () {
    console.log(this.name)
};

function aa() {
    this.name = 'xiaoxiaoming';
}
aa.prototype = new AA();
var p1 = new aa();
p1.sayName(); //xiaoxiaoming

console.log(typeof p1); //object
console.log(p1.constructor == aa); //false
console.log(p1.constructor == AA); //true
console.log(p1 instanceof aa); //true
console.log(p1 instanceof AA); //true
console.log(Object.prototype.toString.call(p1).slice(8, -1)); //object


//缺点属性共享