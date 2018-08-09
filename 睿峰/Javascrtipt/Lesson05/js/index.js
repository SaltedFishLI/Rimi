var log = console.log;
(function() {
    //1.创建数组
    var names = ["大娃", "二娃", "三娃", "四娃"];
    //2.下标法
    log(names);
    log(names[1]);
    //3.修改数组元素
    names[3] = "火娃";
    log(names);
    //添加数组元素
    names.push("水娃");
    log(names);
    names.unshift("穿山甲");
    log(names);
    //4.删除数组元素 
    names.pop();
    names.shift();
    log(names);
    //splice(loc, count, items...)
    names.splice(1, 1);
    log(names);
    names.splice(1, 2, "蛇精", "蝎子精");
    log(names);
    names.splice(1, 0, "Kar98K");
    log(names);

    //split slice splice!!!加以区分
    //5.数组元素的截取
    var arr = names.slice(1, names.length - 1);
    log(arr);

    //6.数组的遍历
    for (var i = 0; i < names.length; i++) {
        log(names[i]);
    }

    //练习
    //定义5个学生的成绩，求总成绩/平均成绩/最高分/最低分
    var scores = [100, 5, 80, 60, 77];
    var sum = 0;
    for (var i = 0; i < names.length; i++) {
        sum += scores[i]
    }
    log(sum);
    log(sum / 5);
    max = scores[0];
    min = scores[0];
    for (var i = 0; i < names.length; i++) {
        sum += scores[i];

        max = scores[i] > max ? scores[i] : max;

        min = scores[i] < min ? scores[i] : min;
    }
    log(max);
    log(min);


    //7.数组排序 sort
    var nums = [1, 7, 12, 5, 9];
    log(nums.sort());
    var result = nums.sort(function(n1, n2) {
        //n1-n2 升序
        //n2-n1 降序
        return n2 - n1;
    });
    log(result)


    var students = [
        { name: "张三", grade: 67 },
        { name: "李四", grade: 80 },
        { name: "老王", grade: 59 }
    ];
    var res = students.sort(function(stu1, stu2) {
        return stu2.grade - stu1.grade;
    });
    console.log(res[0]);

    //8.数组倒序
    var nums = [1, 2, 3, 4];
    log(nums.reverse());

    //9.数组过滤
    var names = ["李大", "赵大锤", "李二", "封三"]
        //筛选所以李姓
        //item -> 遍历的每一个数组元素
        //index -> 对应遍历数组的元素下标
        //arr -> 遍历的原始数组
        //注意：函数参数的名字可以任意修改
        //
    var result = names.filter(function(item, index, arr) {
        return /^李/.test(item);
    });
    log(result)

    //10.forEach 遍历
    var nums = [1, 2, 3];
    nums.forEach(function(item, index, arr) {
        log(item)
    })

    //11.map 操作数组元素本身
    var result = nums.map(function(item) {
        return item * 2
    })
    log(result);























})()