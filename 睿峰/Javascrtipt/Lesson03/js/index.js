(function() {
    console.log(2 === 2.0);
    console.log(0.5 + 0.2 === 0.7);

    //toFixed：保留小数位数
    var π = Math.PI.toFixed(2);
    console.log(π);


    //pow(m.n);求m的n次方
    console.log(Math.pow(2, 3));


    var a = "3.14",
        b = "12e-2";
    var result = parseInt(parseFloat(a) + parseFloat(b));
    console.log(result);



    console.log(parseInt(0b1010));
    console.log(parseInt("0b1010"));
    console.log(parseInt("1010", 2));


    //将10进制的8转换为16进制
    console.log((8).toString(16));
    //将91716转换为2进制
    console.log((91716).toString(2));
    console.log(parseInt(0b10110011001000100));


    //自变量创建方法
    var a = 10;
    console.log(typeof a);
    //对象构造方法
    var b = new Number(10);
    console.log(typeof b);

    //为指定对象拓展新的方法
    Number.prototype.valian = function() {
        console.log("vongoly")
    }
    var a = -1;
    a.valian();
})();