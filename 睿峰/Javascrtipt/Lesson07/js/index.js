(function () {
  //创建对象
    var teacher = {
        neme:"耀哥",
        age:28,
        teach:"web前端"
    }

//构造函数
    function Car() {}
    Car.prototype= {
        brand:"Benz",
        color:"white",
        getSpeed:function () {
            return "18km/h"
        }
    }
var car1 = new Car();
var car2 = new Car();



    var dog={
        //属性
        name:"小黄",
        color:"黄色",
        //对象方法
        running:function () {
            console.log(this.name+"正在奔跑！");
        }
    }
    //访问属性/方法
    console.log(dog.name);
    console.log(dog["name"]);
    dog.running();
    //修改
    dog.name = "小黑";
    console.log(dog);
    //添加
    dog.age = 28;
    console.log(dog);
    //删除属性
    delete dog.age;
    console.log(dog);

//对象的继承
    function RimiObject() {
        this.compar="成都睿峰科技优选公司"
        console.log(this.name)
    }

    function RIMIWorler(name,position) {
        //通过apply继承
        RimiObject

    }



})()