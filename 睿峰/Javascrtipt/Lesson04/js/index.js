var log = console.log;
(function() {
    var s1 = "Hello, 'Tom'!",
        s2 = "Hello, \"tom\"",
        s3 = "今天是个" + "好日子";



    //字符串与数组
    var fruits = ["香蕉", "西瓜", "苹果", "菠萝"]
    console.log(fruits)
    console.log(fruits.join("、"))


    var nameStr = "张志威,赵恒锐,唐荣萍"
    console.log(nameStr.split(","))



    var result = "\\u" + "李塞寒".charCodeAt(2).toString(16);
    console.log(result)


    function toUnicodeString(str) {
        var result = "";
        // "李鸿耀"
        for (var i = 0; i < str.length; i++) {
            result += "\\u" + str.charCodeAt(i).toString(16)
        };

        return result;
    }
    var s = toUnicodeString("欢迎来到睿峰培训")
    console.log(s)


    //结论 ： 判断一个对象为包装对象还是内置对象的方法
    //1.对指定对象使用Object()方法后，如果恒等与自身，那么他是一个内置对象，否则为包装对象
    //2.直接typeof查看指定对象的类型，如果为object，则为内置对象，否则为包装对象
    var objStr = new String("Hello, world!");
    console.log(typeof objStr); //objec->内置对象
    console.log(objStr)
    console.log(objStr.valueOf())



    //长度
    var s = "Hi!"
    log(s.length)

    //查询字符
    log(s.charAt(1)) //"i"
    log(s.charAt(-1)) //""
    log(s.charAt(1000)) //""


    s = "今天天气非常不错";
    log(s.indexOf("天气")) //2
    log(s.indexOf("雷电")) //-1
    log(s.indexOf("天", 2)) //2
    log(s.lastIndexOf("天")) //2
    log(s.match("天气"))
    log(s.match("雷电")) //null
    log(s.search("天气")) //2
    log(s.search("雷电")) //-1

    //查询头部
    //^以...开头
    log(/^今天/.test(s)) //true
        //$以...结尾
    log(/前端$/.test(s)) //false


    //字符串拼接 +
    var s1 = "Hello,"
    var s2 = "world!"
    log(s1 + s2)

    //去除空格
    var s = "       js从平头变成秃子"
    log(s.trim())


    //大小写转换
    var s = "I love china!"
    log(s.toLocaleUpperCase())
    log(s.toLocaleLowerCase())


    //字符串替换
    var s = "干包谷林头搬干包谷"
    log(s.replace("包谷", "玉米"))
        //g 正则表达式全局匹配模式
    log(s.replace(/包谷/g, "玉米"))




    //字符串截取 slice(start,end)
    var str = "Hello,girl!"
    log(str.slice(6, 10))
    log(str.slice(6))
    log(str.slice(-5, -1))
    log(str.slice(3, 1))


    //截取身份证出生年月日
    //控制台输出xxxx年xx月xx日
    var idCard = "510123xxxxyyzz0000"
    var year = idCard.slice(6, 10),
        month = idCard.slice(10, 12),
        day = idCard.slice(12, 14)
    log("出生日期" + year + "年" + month + "月" + day + "日")
})()