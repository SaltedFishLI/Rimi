require("UserInfo-JS");
require("UserInfo-LESS");
require('Normalize-LESS');
require('Common-LESS');
require('Index-LESS');
require('LHY-JS');
require('LHY-CSS');




$(function() {
    if(sessionStorage.getItem('loginState')){
        $(".biu").html(`账号:<a>${sessionStorage.getItem('loginState')}</a>`)
    }
    $(".biu").on("click", () => {
        window.location.href="personInfo.html"
        
    })
    $(".personBtn").on("click",() =>{
        new LHYAlertView({
            type:"alert",
            message:"提交成功 ",
        })
    })
    $(".order-btn").on("click", () => {
        window.location.href="personInfo.html"
        
    })
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
$(function() {
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls     = [
        'static/html/userInfo/personInfo.html',
        'static/html/userInfo/order.html',
        'static/html/userInfo/mySell.html',
        'static/html/userInfo/account.html',
        'static/html/userInfo/systemMessage.html'
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.tabBar-item').on('click', function () {
        // 获取点击菜单项的下标
        let index = $(this).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
});
$(function(){
   lookupSysMesg(); 
})
let lookupSysMesg = function(){
    /* 点击查看消息 */
    $(document).on("click", ".userInfo-system .user-system-boxs .systemcontent", function() {
        let $this = $(this);
        var isAllOpen = $this.hasClass("openState");
        var $selector = $this.next(".systemselect");
        // 如果为全打开状态则还原
        if(isAllOpen) {
            $selector.show(180);
            $this.animate({
                "width": "968px"
            },180);
            // 改变文本显示框的样式属性
            $this.children(".systemtxt").css({
                "width": "654px",
                "height": "20px",
                "white-space": "nowrap",
                "text-indent": 0
            });
            // 改变日期显示框的样式属性
            $this.children(".systemdatetime").css({
                "padding-top": "34px",
                "clear": "none",
                "float": "none"
            });
            // 移除打开状态标志
            $this.removeClass("openState");
            // 将文本设为已读状态
            $this.css("color", "#888");
        }
        // 否者设为全打开状态
        else {
            // 隐藏标记选择
            $selector.hide(180);
            // 宽度100%显示
            $this.animate({
                "width": "100%"
            },180);
            // 改变文本显示框的样式属性
            $this.children(".systemtxt").css({
                "width": "800px",
                "height": "auto",
                "white-space": "normal",
                "text-indent": "2em"
            });
            // 改变日期显示框的样式属性
            $this.children(".systemdatetime").css({ 
                "padding-top": 0,
                "clear": "both",
                "float": "right"
            });
            // 添加打开状态标志
            $this.addClass("openState");
        }

    });
    /* 标记消息选择状态 */
    $(document).on("click", ".userInfo-system .user-system-boxs .systemselector", function() {
        var $this = $(this);
        // 检查是否被选中
        var isChecked = $this.hasClass("checked");
        // 如果已经被选中
        if(isChecked) {
            // 撤销选中状态
            $this.removeClass("checked");
            $this.parent().parent().parent().removeClass("flagged");
        }
        // 还没有没选中
        else {
            // 添加选中状态
            $this.addClass("checked");
            $this.parent().parent().parent().addClass("flagged");
        }
    });
    //删除标记信息
    $(document).on("click", ".systemBtn", function() {
        // 检查是否选中消息
        var flaggedMesg =  $(".systemBtn").parent().find(".flagged"),
            flaggedMesg_len = flaggedMesg.length;
        //判断是否选中消息
        if(flaggedMesg_len == 0) {
            new LHYAlertView({
                type:"alert",
                message:"您还没有标记要删除的消息，请至少标记一条消息再执行该操作",
            })
        }else{
            new LHYAlertView({
                type:"confirm",
                title:"删除订单",
                cancelTitle: "取消",
                sureTitle: "确定",
                message:"您是否要删除选中的消息？删除后不再显示该消息。",
                sureCallBack:() => {
                   // 点击确定删除标记的消息
                    for(var i = 0; i < flaggedMesg_len; i++) {
                    flaggedMesg.eq(i).remove(); 
                    }
                }
            })
        }
    });
    //取消订单
    $(document).on('click',".order-cancel",function(){
        new LHYAlertView({
            type:"confirm",
            title:"取消订单",
            cancelTitle: "取消",
            sureTitle: "确定",
            message:"您是否要取消该订单？成功取消之后货款将在3-7个工作日内返还至你的支付账号。",
            sureCallBack:() => {
               // 点击确定取消
                $(this).text("已取消")
            }
        })
    })
    //删除订单
    $(document).on('click',".order-delete",function(){
        let $this = $(this);
        let order_tr =  $this.parent().parent().parent();
        new LHYAlertView({
            type:"confirm",
            title:"删除订单",
            cancelTitle: "取消",
            sureTitle: "确定",
            message:"您是否要删除该订单信息？删除后不再显示该订单。",
            sureCallBack:() => {
               // 点击确定取消
                order_tr.remove();
            }
        })
    })
    //性别选择
    $(document).on("click", ".personInfoselector", function() {
        var $this = $(this);
        // 检查是否被选中
        var isChecked = $this.hasClass("checked");
        // 如果已经被选中
        if(isChecked) {
            // 撤销选中状态
            $this.removeClass("checked");
        }
        // 还没有没选中
        else {
            // 添加选中状态
            $this.addClass("checked");
        }
    });
}

