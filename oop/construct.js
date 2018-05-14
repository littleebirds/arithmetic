/**
 * 构造函数模式
 */


//构造函数模式
function creatP(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}
var p1 = new creatP('xiaoming', 18);
var p2 = new creatP('xiaohong', 19);
p1.sayName();
p2.sayName();
console.log(p1.constructor == creatP); //true
console.log(p1 instanceof creatP); //true

//缺点，每次创建新的实例都会创建一条方法，
//改进：
function creatP1(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}
var p11 = new creatP1('xiaoming', 18);
var p22 = new creatP1('xiaohong', 19);
p11.sayName();
p22.sayName();
console.log(p11.constructor == creatP1); //true
console.log(p11 instanceof creatP1); //true

//引来的问题，自定义的方法在类型的外部，使得这个自定义类型没有封装性，