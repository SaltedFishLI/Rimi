$(function () {
    //箭头函数 =>
    let sayHello = name => {
        console.log(`hello, ${name}!`);
    };
    sayHello("Admin");
    let sum = (a, b) => {
        console.log(a + b);
    };
    sum(10, 5);

    let per = new Person();
});