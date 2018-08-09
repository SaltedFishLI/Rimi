require('Normalize-LESS');

require('LHY-CSS');
require('LHY-JS');
require('Common-LESS');
require('Register-LESS');




$(function() {
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls     = [
        'static/html/classify/sofa.html',
        'static/html/classify/tableAndChair.html',
        'static/html/classify/bed.html',
        'static/html/classify/storage.html',
        'static/html/classify/more.html'
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.mENU-lEVEL').on('click', function () {
        // 获取点击菜单项的下标
        let index = $(this).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
});
$(function(){
    // 记录登陆/注册
    let isLogin   = true;
    location.hash = "login";
    //注册bmob服务
    Bmob.initialize("8a4ab5c256fb8fa4413b3e7cfb1add15", "8f73d517fe1b82f2e58638be5d27af90");
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
        document.title = "BMOB - REGISTER";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".title").text("LOGIN");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "BMOB - LOGIN";
    });

    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                console.log("请完善信息！");
            }else {
                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: () => {

                        new LHYAlertView({
                            type:"alert",
                            message:"登陆成功",
                            sureCallBack:() => {
                                sessionStorage.loginState = true;
                                let a = $(".username").val();
                                sessionStorage.setItem('loginState',a);
                                location.href = "../../../index.html"
                            }
                        })
                    },
                    error: () => {

                        new LHYAlertView({
                            type:"alert",
                            message:"用户名不存在或密码不对",

                        })
                    }
                });

            }
        }else {
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;
                }
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
                console.log(el)
            });
            if(isEmpty) {
                console.log("请完善信息！");
            }else if(!isThough) {
                console.log("信息不合法！");
            }else {
                console.log("请注册！");
                let user = new Bmob.User();
                user.set("username",$(".username").val());
                user.set("password",$(".password").val());
                user.set("email",$(".email").val());
                user.set("phone",$(".tel").val());
                //执行注册
                user.signUp(null,{
                    success : (user) => {
                        new LHYAlertView({
                            type:"alert",
                            message:"注册成功",
                            sureCallBack:() => {
                                sessionStorage.loginState = true;
                                let a = $(".username").val();
                                sessionStorage.setItem('loginState',a);
                                location.href = "../../../index.html"
                            }
                        })
                    },
                    error: (user,error) => {
                        // alert(`Error:${error.code} ${error.message}`);
                        let alertMsg = "";
                        switch (error.code){
                            case 202 :{
                                alertMsg = "用户已存在";
                            }break;
                            case 203 :{
                                alertMsg = "邮箱已被注册";
                            }break;
                            case 209 :{
                                alertMsg = "手机已被注册";
                            }break;
                        }
                        new LHYAlertView({
                            type : "default",
                            autoClose:1000,
                            title:"温馨提醒",
                            message:alertMsg
                        })
                    }
                })
            }

        }
    });
    

});



class Validate {
    constructor() {}
    static test(type, str) {
        let res = null;
        switch (type) {
            case "username": {
                // 1. 用户名正则，4到16位（字母，数字，下划线，减号）
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "password": {
                // 2. 用户名正则，4到16位（字母，数字，下划线，减号）
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "email": {
                // 3. 邮箱
                res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
            } break;
            case "tel": {
                // 4. 手机 
                res = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str);
            } break;
        }
        return res;
    }
}













