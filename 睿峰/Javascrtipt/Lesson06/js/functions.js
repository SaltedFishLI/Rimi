function sayhello() {
    console.log("Hello,world!");
}

function drinkWith(someThing) {
    console.log("喝" + someThing + "!");
}

function testing(idCard, stuCard) {
    if (!idCard || !stuCard) {
        console.log("证件不全，不能进入考场");
    } else {
        console.log("证件齐全，考试加油哦");
    }
}

function sum(a, b) {
    a = a == undefined ? 0 : a;
    b = b == undefined ? 0 : b;
    return a + b
}

function showInfos(stuObj) {
    //处理默认值
    stuObj.name = stuObj.name || "";
    stuObj.age = stuObj.age || "";
    stuObj.score = stuObj.score || "";


    var str = "";
    str += "姓名:" + stuObj.name + "\n";
    str += "年龄:" + stuObj.age + "\n";
    str += "成绩:" + stuObj.score + "\n";
    console.log(str);
}

function sum() {
    // console.log(arguments);

    //将类似数组转换为真正的数组
    var newArr = Array.prototype.slice.call(arguments);
    var result = 0;
    newArr.forEach(function(num, index, arr) {
        result += num;
    });
    return result;
}

function changeNum(a) {
    a = 3.14;
}

function changeObj(stu) {
    stu.gender = "保密";
}

//变量函数
var sayHi = function() {
    console.log("Hi");
};

//自调用函数
(function() {
    console.log("自调用函数执行......")
})();


//构造对象函数
function Teacher(name, age, teach) {
    this.name = name;
    this.age = age;
    this.teach = teach;
}

// 递归函数
// 5! -> 5 x 4 x 3 x 2 x 1
function recursive(n) {
    if (n == 1 || n == 0) {
        return 1;
    } else {
        return n * recursive(n - 1);
    }
}


function test(n) {
    console.log(n);
    if (n > 0) {
        test(n - 1)
    };
}

//闭包调用
function fn1() {
    var n = 10;

    function fn2() {
        return n;
    }
    return fn2;
}

function subtract(a, b, callBack) {
    callBack && callBack(a - b);
}