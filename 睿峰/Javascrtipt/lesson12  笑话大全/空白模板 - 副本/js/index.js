//jQuery  文档就绪函数
$(function() {
    var curIndex;
    //定义路由地址
    var links = [
        "./joke/texy-joke.html",
        "./joke/img-joke.html",
        "./joke/gif.html"
    ]


    //为菜单项添加点击事件
    $(".tabBar-item").on("click", function(e) {
        //避免用户重复点击
        var index = $(this).index();
        if (index==curIndex){return;}
        //更新当前显示页面下标
        curIndex = index;
        //jQuery提供的ajax请求的方法
        $.ajax({
            //请求资源地址
            url: links[$(this).index()],
            //请求方法
            type: "GET",
            //请求成功回调
             
                $("#content").html(response)
                //清除控制台
                //console.clear()
            }
        })
    }).first().trigger("click");
});