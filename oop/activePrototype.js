/**
 * 动态原型模式
 */

function creatP(name, age) {
    this.name = name;
    this.age = age;

    if (typeof this.sayName != 'function') { //当方法不存在是创建这个方法
        creatP.prototype.sayName = function () {
            console.log(this.name)
        }
    }
    if (typeof this.sayAge != 'function') { //当方法不存在是创建这个方法
        creatP.prototype.sayAge = function () {
            console.log(this.age)
        }
    }
}
var p1 = new creatP('xiaoming', 18);
p1.sayName(); //'xiaoming'
p1.sayAge(); //18