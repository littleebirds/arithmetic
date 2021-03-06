    /**
     * 组合继承  利用原型链和构造函数组合
     * call,apply -> 继承属性
     * 原型 -> 继承方法
     */

    function AA(name) {
        this.name = name;
        this.colors = ['red', 'yellow', 'green'];
    }
    AA.prototype.sayName = function () {
        console.log(this.name);
    };

    function aa(name, age) {
        AA.call(this, name); //     继承属性，
        this.age = age;
    }

    aa.prototype = new AA();
    var p1 = new aa('xiaoming', 18); //使得this指向aa
    p1.colors.pop();
    console.log(p1.colors);
    console.log(p1.age);
    p1.sayName();

    var p2 = new aa('xiaohong', 19);
    p2.colors.push('black');
    console.log(p2.colors);
    console.log(p2.age);
    p2.sayName();