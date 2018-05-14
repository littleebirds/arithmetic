    /**
     * 组合构造函数和原型模式
     */

    function creatP(name, age) {
        this.name = name;
        this.age = age;
        this.color = ['red', 'yellow'];
    }
    creatP.prototype = {
        constructor: creatP,
        sayName: function () {
            console.log(this.name);
        }
    };
    var p1 = new creatP('xiaoming', 18);
    var p2 = new creatP('xiaohong', 19);
    p1.sayName();
    p1.color.pop(); //'red'
    console.log(p1.color); //'red','yellow'     避免了属性共享
    console.log(p2.color);
    console.log(typeof p1); //object
    console.log(p1.constructor == creatP); //true
    console.log(p1 instanceof creatP); //true
    console.log(Object.prototype.toString.call(p1).slice(8, -1)); //object