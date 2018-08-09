

function getEl(Sel) {
    return document.querySelector(Sel);
}

function handleBtnClick(ipt, res) {
    getBirth(ipt, function(birth){
        res.textContent = birth;
    }, function(error){
        alert(error);
    });
}


function getBirth(ipt, callback, error) {
    var value  = ipt.value,
        errMsg = "";

    switch(true) {
        case !value: {
            errMsg = "请输入您的身份证号！";   
        }break;
        case isNaN(value): {
            errMsg = "身份证必须为数字！";
        } break;
        case value.length != 18: {
            errMsg = "请输入18位身份证号！";
        }break;
    }

    if(errMsg) {
        error && error(errMsg);
    }else {
        var birth = "出生年月：";
        birth += value.slice( 6, 10) + "年";
        birth += value.slice(10, 12) + "月";
        birth += value.slice(12, 14) + "日";
        callback && callback(birth);
    }
}


function extend(Child, Parent) {
　　var F = function(){};
　　F.prototype = Parent.prototype;
　　Child.prototype = new F();
　　Child.prototype.constructor = Child;
}

//定时器
function interval() {
    var count= 5;
    var t = setInterval(function () {
        console.log(count--);
        if (count == 0){
            console.log("boom...");
            //清楚缓存
            clearInterval(t);
            t=null;
        }
    },1000)
}

//延时函数
function timeout() {
    console.log("3s 后打印'Hello,word!'")
    setTimeout(function () {
    console.log("Hello,word!")
    clearTimeout(timeout);
    },3000);

}


//添加数据
function add(name,major,origin) {
    if (!name || !major || !origin) {
        alert("请完善信息！");
        return;//终止函数
    }
    //定义存储数据的数组
    var rootArr;
    //判断本地是否已经存在数组集合
    //如果存在，则根据本地数据集合初始化数组
    //否则直接创建一个空的数组
    if (!localStorage.getItem("SMS")) {
        rootArr = [];
    }else {
        //解析JSOM数据
        rootArr = JSON.parse(localStorage.getItem("SMS"));
    }
    //将数据存储带rootArr中
    rootArr.push({
        name:name,
        major:major,
        origin:origin
    });
    //更新本地数据
    var jsonObj = JSON.stringify(rootArr);
    localStorage.setItem("SMS",jsonObj);
    console.log("数据添加成功！")

}

//查看数据
function show(ul) {
    if(!localStorage.SMS) {
        alert("没有数据，请添加数据！");
        return;
    }
    var rootArr = JSON.parse(localStorage.SMS);
    if(rootArr.count == 0) {
        alert("没有数据，请添加数据！");
    }else {
        // 将数据显示在页面上
        var htmlStr = "";
        rootArr.forEach(function(student){
            htmlStr += `<li>
                            <p>姓名：${student.name}</p>
                            <p>专业：${student.major}</p>
                            <p>籍贯：${student.origin}</p>
                        </li>`;
        });
        ul.innerHTML = htmlStr;
    }
}

function clear(ul) {
    // 清空本地数据
    localStorage.removeItem("SMS");
    // 清空页面数据
    ul.innerHTML = "";
}








