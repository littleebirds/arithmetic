/**
 * 工厂模式、 寄生构造函数模式
 */
function creatP(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var p1 = creatP('xiaoming', 18);
var p2 = creatP('xiaohong', 19);
p1.sayName(); //'xiaoming'
p2.sayName(); //'xiaohong'

//寄生构造函数模式，与工厂模式区别，用了New 操作符
function creatP1(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
var p11 = new creatP1('xiaoming', 18);
var p22 = new creatP1('xiaohong', 19);
p11.sayName(); //'xiaoming'
p22.sayName(); //'xiaohong'

//p1,p11,p2,p22的类型都为Object，无法判断为creatP或者creatP1