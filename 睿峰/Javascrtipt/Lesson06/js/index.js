(function() {
    //调用函数
    sayhello();
    drinkWith();
    drinkWith("可乐");
    drinkWith("铁观音");
    testing();
    testing("1102", "0001");
    sum();

    var result = sum();
    console.log(result);

    showInfos({
        name: "Admin",
        age: 16,
        score: 95
    });

    sum(1, 2, 3, 4, 5);

    var a = 10;
    changeNum(a);
    console.log(a);

    var b = new Number(10);
    changeNum(b);
    console.log(b);

    var stu = { gender: "男" };
    changeObj(stu);
    console.log(stu);

    sayHi();

    //实例化对象/构造函数
    //注意：构造对象，new 关键字是必须的
    var teacher = new Teacher("张三", 28, "Web前端");
    console.log(teacher);



    //闭包
    var n = fn1()();
    console.log(n);

    //闭包回调
    subtract(10, 5, function(res) {
        console.log(res);
    });
})();