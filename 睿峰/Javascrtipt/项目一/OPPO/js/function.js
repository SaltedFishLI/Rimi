//获取DOM
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}
//正则验证
function verificationCode(el,al) {
    //设置默认验证码
    el.textContent = getVerifocationCode(4);
    ////点击验证/切换
    el.onclick = function () {
        el.textContent = getVerifocationCode(4);
    }
    //判断验证码是否输入正确
    al.onblur = function () {
        //根据验证码生成正则表达式
        //忽略大小写
        var reg = new RegExp(el.textContent, "i");
        if (!reg.test(this.value)) {
            new LHYAlertView({
                type: "alert",
                message: "验证码错误！"
            });
            el.textContent = getVerifocationCode(4);
        }
    }
    function getVerifocationCode(length) {
        //定义随机源
        var str = "";
        str += "qwertyuiopasdfghjklzxcvbnm";
        str += "1234567890";
        str += "QWERTYUIOPASDFGHJKLZXCVBNM";
        //获取随机下标
        var index = Math.floor(Math.random()*str.length);
        //根据长度获取字符
        var resStr ="";
        for (var i=0;i<length;i++){
            //获取随机
            var index = Math.floor(Math.random()*str.length);
            resStr += str.slice(index,index+i);
        }
        return resStr;
    }
}
//登陆注册
function verify(){$(function(){
    // 记录登陆/注册
    let isLogin   = true;
    location.hash = "login";
    //注册BMOB的服务
    Bmob.initialize("615e6453e4a221118561e21f441b5413", "8da3357ba05e15bf88a91ac50a6dc30f");


    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".title").text("REGISTER");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "『OPPO帐号』-注册";
    });


    // 判断注册输入内容是否合法
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) { // 登陆
            if(!$(".username").val() || !$(".password").val()) {
                new LHYAlertView({
                    type: "alert",
                    message: "请完善信息！"
                });
            }else {
                if(oRem.checked) {
                    saveUserInfo();
                }else {
                    localStorage.removeItem("Info");
                }
                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "登陆成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "../indexcopy.html";
                            }
                        });
                    },
                    error: (user,error) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "用户名或者密码不正确"
                        });
                    }
                });
            }
        }else { // 注册
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;  // 跳出each遍历
                }
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                new LHYAlertView({
                    type: "alert",
                    message: "请完善信息！！"
                });
            }else if(!isThough) {
                new LHYAlertView({
                    type: "alert",
                    message: "信息不合法！！！"
                })
            }else {
                // 注册用户
                // 创建用户
                let user = new Bmob.User();
                // 设置用户属性
                user.set("username", $(".username").val());
                user.set("password", $(".password").val());
                user.set("email", $(".email").val());
                user.set("phone", $(".tel").val());
                // 执行注册
                user.signUp(null, {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "注册成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "../indexcopy.html";
                            }
                        });
                    },
                    error: (user, error) => {
                        // alert(`Error: ${error.code} ${error.message}`);
                        let alertMsg = "";
                        switch(error.code) {
                            case 202: {
                                alertMsg = "用户名已存在！";
                            } break;
                            case 203: {
                                alertMsg = "邮箱已被注册！";
                            } break;
                        }
                        new LHYAlertView({
                            type: "default",
                            autoClose: 1000,
                            title: "温馨提示",
                            message: alertMsg
                        });
                    }
                });
            }
        }
    });
});}
function getStyle(el, attr) {
    if(el.currentStyle) {
        return el.currentStyle[attr];
    }else {
        return getComputedStyle(el, null)[attr];
    }
}
//主页轮播图  轮播+文字动画
function slideshow() {
    // 获取DOM元素
    var oPrev      = getEl(".prev"),
        oNext      = getEl(".next"),
        oImgBox    = getEl(".img-box"),
        oContainer = getEl(".container"),
        oIdots     = getEl(".idot", true);
    // 定义变量
    var curIndex = 0,
        maxIndex = 4,
        isAnimating = false,
        timer = null;
    // 添加点击事件
    oPrev.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == 0) {
            curIndex = maxIndex
        }else {
            --curIndex;
        }
        tab(+oContainer.offsetWidth);
        changeIdot();
        xleft();
    };

    oNext.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == maxIndex) {
            curIndex = 0;
        }else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth)
        changeIdot();
        xleft();
    }
    for(var i = 0, len = oIdots.length; i < len; i++) {
        // 动态设置小圆点下标
        // data-index = ...
        oIdots[i].dataset.index = i;
        oIdots[i].onclick = function() {
            var tarIndex = this.dataset.index;
            if(tarIndex == curIndex || isAnimating) {
                return;
            }
            var offset = -oContainer.offsetWidth * (tarIndex - curIndex);
            // 更新当前下标位置
            curIndex = tarIndex;
            tab(offset);
            changeIdot();
            xleft();
        }
    }

    play();

    oContainer.onmouseenter = stop;
    oContainer.onmouseleave = play;

    function xleft() {
        var imgs = getEl(".bg div", true);
        for (var i = 0, len = imgs.length; i < len; i++) {
            // classList.contains() 判断是否包含某个class
            if (imgs[i].classList.contains("xleft")) {
                imgs[i].classList.remove("xleft");
                break;
            }
        }
        imgs[curIndex].classList.add("xleft");
    }
    // 封装
    function tab(offset) {
        // 更新动画状态
        isAnimating = true;
        // 帧动画
        var interval = 12,
            duration = 500,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);

        var curLeft  = parseInt(getStyle(oImgBox, "left")),
            tarLeft  = curLeft + offset;
        var t = setInterval(function() {
            // 更新当前值
            curLeft  = parseInt(getStyle(oImgBox, "left"));
            // 下一页：offset < 0 && curLeft > tarLeft
            // 上一页：offset > 0 && curLeft < tarLeft

            if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                oImgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                t = null;
                isAnimating = false;
                // 更新位置
                oImgBox.style.left = tarLeft + "px";
                // 处理边界值
                var imgW = oContainer.offsetWidth;
                if(parseInt(oImgBox.style.left) < -5 * imgW) {
                    oImgBox.style.left = -imgW + "px";
                }else if(parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -5 * imgW + "px";
                }
            }
        }, interval);
    }
    function changeIdot() {
        for(var i = 0, len = oIdots.length; i < len; i++) {
            if(oIdots[i].classList.contains("show")) {
                oIdots[i].classList.remove("show");
                break;
            }
        }
        oIdots[curIndex].classList.add("show");
    }

    function play() {
        timer = setInterval(function(){
            oNext.onclick();
        }, 3000);
    }
    function stop() {
        clearInterval(timer);
        timer = null;
    }
};
//点击按钮更换图片
function changelevel(imgs,idots,tbox) {
    var curIndex = 0;
    function tab() {
        for(var i = 0, len = imgs.length; i < len; i++) {
            // classList.contains() 判断是否包含某个class
            if(imgs[i].classList.contains("show")){
                imgs[i].classList.add("show");
                imgs[i].classList.remove("show");
                idots[i].classList.remove("show");
                tbox[i].classList.remove("show");
                break;
            }
        }
        // classList.add() 添加class
        idots[curIndex].classList.add("show");
        imgs[curIndex].classList.add("show");
        tbox[curIndex].classList.add("show");
    }
    for (var i = 0,len = idots.length;i<len;i++){
        //为小圆点设置下标
        idots[i].dataset.index = i;
        idots[i].onclick = function () {
            var index = this.dataset.index;
            if (index == curIndex){
                return;
            }
            //更新当前下标
            curIndex = index;
            tab()
        }
    }
}
//判断是否拥有类名show
function Asubmenu(abc) {
        // classList.contains() 判断是否包含某个class
        if(!abc.classList.contains("show")){
            abc.classList.add("show");
        }else {
            abc.classList.remove("show");
        }
}
//2图轮播
function slideShow() {
    // 获取DOM元素
    var oPrev      = getEl(".prev"),
        oNext      = getEl(".next"),
        oImgBox    = getEl(".img-box"),
        oContainer = getEl(".container"),
        oIdots     = getEl(".idot", true);
    // 定义变量
    var curIndex = 0,
        maxIndex = 1,
        isAnimating = false,
        timer = null;
    // 添加点击事件
    oPrev.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == 0) {
            curIndex = maxIndex
        }else {
            --curIndex;
        }
        tab(+oContainer.offsetWidth);
        changeIdot();
    };
    oNext.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == maxIndex) {
            curIndex = 0
        }else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth)
        changeIdot();
    }
    for(var i = 0, len = oIdots.length; i < len; i++) {
        // 动态设置小圆点下标
        // data-index = ...
        oIdots[i].dataset.index = i;
        oIdots[i].onclick = function() {
            var tarIndex = this.dataset.index;
            if(tarIndex == curIndex || isAnimating) {
                return;
            }
            var offset = -oContainer.offsetWidth * (tarIndex - curIndex);
            // 更新当前下标位置
            curIndex = tarIndex;
            tab(offset);
            changeIdot();
        }
    }

    play();

    oContainer.onmouseenter = stop;
    oContainer.onmouseleave = play;

    // 封装
    function tab(offset) {
        // 更新动画状态
        isAnimating = true;
        // 帧动画
        var interval = 12,
            duration = 500,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);

        var curLeft  = parseInt(getStyle(oImgBox, "left")),
            tarLeft  = curLeft + offset;
        var t = setInterval(function() {
            // 更新当前值
            curLeft  = parseInt(getStyle(oImgBox, "left"));
            // 下一页：offset < 0 && curLeft > tarLeft
            // 上一页：offset > 0 && curLeft < tarLeft

            if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                oImgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                t = null;
                isAnimating = false;
                // 更新位置
                oImgBox.style.left = tarLeft + "px";
                // 处理边界值
                var imgW = oContainer.offsetWidth;
                if(parseInt(oImgBox.style.left) < -2 * imgW) {
                    oImgBox.style.left = -imgW + "px";
                }else if(parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -5 * imgW + "px";
                }
            }
        }, interval);
    }
    function changeIdot() {
        for(var i = 0, len = oIdots.length; i < len; i++) {
            if(oIdots[i].classList.contains("show")) {
                oIdots[i].classList.remove("show")
                break;
            }
        }
        oIdots[curIndex].classList.add("show");
    }

    function play() {
        console.log("播放！");
        timer = setInterval(function(){
            oNext.onclick();
        }, 3000);
    }
    function stop() {
        console.log("停止！");
        clearInterval(timer);
        timer = null;
    }
};
//ajax引用内容
function accretion(details){
    networking({
        url:"../JSON/data.json",
        success: function(response) {
            var data = response.affixion;
            for(var i = 0,len = data.length;i < len;i++){
                details[i].innerHTML = `
                <h2>${data[i].titl}</h2>  
                  <p>${data[i].people}</p>                    
                `
            }
        }
    })

}
function networking(options) {
    if (!options.url){
        throw "networking:缺乏url参数。"
    }
    //默认设置
    options.method = options.method || "GET";
    options.parameter = options.parameter || {};
    //创建请求对象
    var xhr = new XMLHttpRequest();
    //配置请求对象
    xhr.open(options.method,options.url,true);
    xhr.timeout = 10;
    xhr.responseType = "json";
    //发送请求
    xhr.send(options.parameter);
    //事件监听
    xhr.onload = function () {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            options.success && options.success(xhr.response);
        }
    }
}
//点击左右按钮更换图片5图
function onclickshow() {
    // 获取DOM元素
    var oPrev      = getEl(".principal .pre"),
        oNext      = getEl(".principal .nex"),
        oImgBox    = getEl(".principal .img-box"),
        oContainer = getEl(".contain"),
        imgs  = getEl(".div-box div",true);
    // 定义变量
    var curIndex = 0,
        maxIndex = 4,
        isAnimating = false;
    // 添加点击事件
    oPrev.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == 0) {
            curIndex = maxIndex;
        }else {
            --curIndex;
        }
        tab(+oContainer.offsetWidth);
        trade()
    };
    oNext.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == maxIndex) {
            curIndex = 0;
        }else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth);
        trade();
    }

    // 封装
    function tab(offset) {
        // 更新动画状态
        isAnimating = true;
        // 帧动画
        var interval = 15,
            duration = 500,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);

        var curLeft  = parseInt(getStyle(oImgBox, "left")),
            tarLeft  = curLeft + offset;
        var t = setInterval(function() {
            // 更新当前值
            curLeft  = parseInt(getStyle(oImgBox, "left"));
            // 下一页：offset < 0 && curLeft > tarLeft
            // 上一页：offset > 0 && curLeft < tarLeft

            if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                oImgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                t = null;
                isAnimating = false;
                // 更新位置
                oImgBox.style.left = tarLeft + "px";
                // 处理边界值
                var imgW = oContainer.offsetWidth;
                if(parseInt(oImgBox.style.left) < -5 * imgW) {
                    oImgBox.style.left = -imgW + "px";
                }else if(parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -5 * imgW -1+ "px";
                }
            }
        }, interval);
    }
    // 1. 获取DOM元素


    function trade() {
        for(var i = 0, len = imgs.length; i < len; i++) {
            // classList.contains() 判断是否包含某个class
            if(imgs[i].classList.contains("show")){
                imgs[i].classList.remove("show");
                break;
            }
        }
        // classList.add() 添加class
        imgs[curIndex].classList.add("show");
    }
}
//点击左右按钮更换图片2图
function onclickShow() {
    // 获取DOM元素
    var oPrev = getEl(".pr"),
        oNext = getEl(".ne"),
        oImgBox = getEl(".conta .img-box"),
        oContainer = getEl(".conta");
    // 定义变量
    var curIndex = 0,
        maxIndex = 1,
        isAnimating = false;
    // 添加点击事件
    oPrev.onclick = function () {
        if (isAnimating) {
            return;
        }
        if (curIndex == 0) {
            curIndex = maxIndex
        } else {
            --curIndex;
        }
        tab(+oContainer.offsetWidth);
    };
    oNext.onclick = function () {
        if (isAnimating) {
            return;
        }
        if (curIndex == maxIndex) {
            curIndex = 0
        } else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth);

    }

    // 封装
    function tab(offset) {
        // 更新动画状态
        isAnimating = true;
        // 帧动画
        var interval = 15,
            duration = 500,
            frames = duration / interval,
            speed = Math.ceil(offset / frames);

        var curLeft = parseInt(getStyle(oImgBox, "left")),
            tarLeft = curLeft + offset;
        var t = setInterval(function () {
            // 更新当前值
            curLeft = parseInt(getStyle(oImgBox, "left"));
            // 下一页：offset < 0 && curLeft > tarLeft
            // 上一页：offset > 0 && curLeft < tarLeft

            if ((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                oImgBox.style.left = curLeft + speed + "px";
            } else {
                // 清除定时器
                clearInterval(t);
                t = null;
                isAnimating = false;
                // 更新位置
                oImgBox.style.left = tarLeft + "px";
                // 处理边界值
                var imgW = oContainer.offsetWidth;
                if (parseInt(oImgBox.style.left) < -2 * imgW) {
                    oImgBox.style.left = -imgW + "px";
                } else if (parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -2 * imgW - 1 + "px";
                }
            }
        }, interval);
    }
}
//记住账号密码
var oUserName = getEl(".username"),
    oPassword = getEl(".password"),
    oRem = getEl(".remember");
function saveUserInfo() {
    let obj =  {
        username:oUserName.value,
        password:oPassword.value,
    };
    var strObj = JSON.stringify(obj);
    localStorage.setItem("Info", strObj);
}
function readRem() {
    if(localStorage.Info) {
        var user = JSON.parse(localStorage.Info);
        oUserName.value = user.username;
        oPassword.value = user.password;
        oRem.checked = true;
    }
}
