    /**
     * 利用构造函数
     */

    function AA(name) {
        this.colors = ['red', 'yellow', 'green'];
        this.name = name;
    }

    function aa() {
        AA.apply(this, ['xiaoming']); //利用call或者apple进行继承
        //或者 AA.call(this);
    }
    var p1 = new aa();
    p1.colors.push('black');
    console.log(p1.colors); //['red','yellow','green','black']
    var p2 = new aa();
    console.log(p2.colors); //['red','yellow','green']
    console.log(p1.name);


    //缺点，方法都在构造函数内部定义，不能使函数复用