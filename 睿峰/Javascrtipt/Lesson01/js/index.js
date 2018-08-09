//全局变量，可以在任意位置访问
//全局作用域
var car = "Benz";


//自调用函数/保护私有变量
(function() {
    console.log(car);
    //1.注释
    //单行注释  //可以嵌套
    /*这是一个多行注释
    不可嵌套 */


    // 2.变量
    var name; //分配内存空间
    name = "空白"; //变量赋值
    var age = 20;

    console.log(name);

    //错误示例：变量必须先声明再使用
    // console.log(number); //not defined

    var color;
    console.log(color); //undefined(没有值)

    console.log(lang); //undefined
    var lang = "Javascrtipt";
    console.log(lang); //Javascript

    //同时定义多个变量
    var x = 10,
        y = 20;


    //修改变量值
    lang = "java";
    console.log(lang); //java

    var lang;
    console.log(lang); //java

    //变量可重复（一般不建议这么做）
    var lang = "swift";
    console.log(lang);

    //类型推断
    //typeof:查看变量的数据类型
    console.log(typeof lang); //string
    console.log(typeof x); // number

    //驼峰命名
    //除了第一个单词，后面的单词的首字母大写
    var personAge = 28;



    //数据类型转换
    //1.转换为数值
    console.log("4" - 3); //1
    console.log("4" + 3); //"43"

    //NaN(not a number)


    var result = Number("4") + 3;
    console.log(result); //7

    //Number是整体转换
    //只要存在非数字字符，则结果为NaN
    //parseInt 从左往右逐一转换
    //一旦遇到了非数字字符，终止转换
    //并返回已转换的结果


    //运算符和表达式
    //1.基本运算符
    //+ - * /
    //++ 自增运算符，自身加一
    //-- 自减运算符，自身减一
    var x = 10;
    x++;
    console.log(x); //11

    ++x;
    console.log(x); //12
    //无论++在前还是++在后，自身加一

    var x = 10,
        y;
    y = ++x + 10;
    console.log("x = " + x + ", y = " + y);

    var x = 10;
    y = x++ + 10;
    console.log("x = " + x + ", y = " + y);
    //结论
    //++在前。先自身加一再参与运算
    //++在后，先参与运算。再自身加一

    var x = 10;
    y = x-- - --x; //x=8 y=2


    //复合运算符
    //+= -= *= /= %=
    //x += y -> x = x + y
    //x -= y -> x = x - y
    x = 10;
    x += ++x;
    console.log(x); //21

    //关系运算符
    console.log(5 > 3);
    console.log(5 == '5');
    console.log(5 === "5");

    //逻辑运算符
    // && 与 同时为真才为真
    // || 或 同时为假才为假
    // ！ 非 取反
    //三元（三目）运算符
    //x ? y : z;
    //语法解读
    //首先判断x的值
    //如果x为真，则执行语句y
    //如果x为假，则执行语句z



})();

//lang 是在函数内部定义的变量
//所以lang是一个局部变量
//因此无法在函数外部进行访问
//局部变量起作用的区域只限于函数内部，
//因此称为局部作用域或者函数作用域
// console.log(lang); //lang is not defined