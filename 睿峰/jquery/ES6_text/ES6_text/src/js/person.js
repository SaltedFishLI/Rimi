//定义person类
class Person{
    //构造器
    //创建对象使用，自动调用
    constructor(){
        console.log("一个person对象正在被创建")
    }

     //方法
     description(){
        console.log(`hello,I'm ${this.name},I'm ${this.age} years old`)
    }

    //静态方法
    static play(str){
        console.log(`玩${str}!`);
    }
}