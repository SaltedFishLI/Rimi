require('Normalize-LESS');
require('Common-LESS');
require('Index-LESS');
require('LHY-JS');
require('LHY-CSS');
require('Shopping-JS');
require('Shopping-LESS');
$(function () {
    if(sessionStorage.getItem('loginState')){
        $(".biu").html(`账号:<a>${sessionStorage.getItem('loginState')}</a>`)
    }
    $(".biu").on("click", () => {
        window.location.href="../userInfo/personInfo.html"
        
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
})

let Price = 0;
let len = $("tbody tr").length;
plusminus();
moneyPrice();
shopping_del();
shoppingNum();
shoppingcart_num();
//hasCheck();
count_setBtn(".trea_count", function() {
});
/* 自定义复选框功能 */
checkbox_custom(".i_trea", ".allCkd", "tbody", ".sc-content");
//input失去焦点时，更新商品数量以及价格
function shoppingcart_num(){
    let $cart_num = $("[num='']");
    $cart_num.on("blur",function(){
    plusminus();
    moneyPrice();
    shoppingNum();
})
}
//计算总价
function plusminus(){
    Price = 0;
    let $number_price = $(".summary-right-number");
    for(var i=0;i<len;i++){
      if($(".shop-cheacked")){
          Price += parseInt($("[num='']")[i].value)* parseInt($(".prices")[i].innerHTML);
      }
  }
  $number_price.text(Price);
}
//数量加载
function count_setBtn(ident,callback) {
    // 获取按钮组的个数
    var btnGroup_len = $(ident).length;
    for (var i = 0; i < btnGroup_len; i++) {
        var identEle = ident + ":eq(" + i + ")",
            // 获取单价
            price = $(identEle).prev().text().replace(/[^\d]/ig,""); 
        // 减小1
        $(document).on("click", identEle + " > button:first", function () {
            var countVal = parseInt($(this).siblings("input[type='text']").val());
            // 当数值小于等于2时减1并禁用
            if (countVal <= 2) {
                var newCountVal = (countVal - 1);
                $(this).siblings("input[type='text']").val(newCountVal);
                $(this).removeClass("active").attr("disabled", true);
                console.log(price);
            }
            // 大于2则减少1
            else if (countVal > 2) {
                var newCountVal = (countVal - 1);
                $(this).siblings("input[type='text']").val(newCountVal);
            }
            plusminus();
            moneyPrice();
            shoppingNum();
        });
        // 增加1
        $(document).on("click", identEle + " > button:last", function () {
            var countVal = parseInt($(this).siblings("input[type='text']").val()),
                newCountVal = (countVal + 1);
            $(this).siblings("input[type='text']").val(newCountVal);
            // 如果“-”处于禁用状态，则启用
            if (!($(this).siblings("button:first").hasClass("active"))) {
                $(this).siblings("button:first").addClass("active").attr("disabled", false);
            }
            plusminus();
            moneyPrice();
            shoppingNum();
        });
    }
    callback();
}
/* 单件商品的总价 */
function moneyPrice(){
    var tbody = $(".shopping_order table tbody"),
        tr_len = tbody.children("tr").length;
    for(var i = 0; i < tr_len; i++) {
        // 获取商品单价
        var onePrice = tbody.children("tr").eq(i).children("td").eq(2).text().replace(/[^\d]/ig,""),
            // 获取该商品数量
            count = tbody.children("tr").eq(i).children("td").eq(3).children("input[type='text']").val();
        tbody.children("tr").eq(i).children("td").eq(4).text("￥" + (onePrice * count));
    }
}
//商品删除
function shopping_del(){
    $(document).on("click",".shopping-del",function(){
        let $this = $(this);
        let shoppingDel_tr =  $this.parent();
        new LHYAlertView({
            type:"confirm",
            title:"删除商品",
            cancelTitle: "取消",
            sureTitle: "确定",
            message:"您是否要删除该购物车信息？删除后不再显示该订单。",
            sureCallBack:() => {
               // 点击确定取消
               shoppingDel_tr.remove();
            }
        })
    })
}
let shoppingNumber = 0;
//商品数量
function shoppingNum(){
    shoppingNumber = 0;
    for(var i=0;i<len;i++){
        if($(".shop-cheacked")){
            shoppingNumber += parseInt($(".num")[i].value) ;
        }
    }
    $(".summary-left-number").text(shoppingNumber);
}
function checkbox_custom(ckb_child, ckb_all, ckb_range, ckb_all_range) {
    /* 子复选框点击功能 */
    $(document).on("click", ckb_child, function() {
        var ckd_none = $(this).hasClass("ckb_custom");
        // 当未选中时使之选中
        if(ckd_none) {
            $(this).removeClass("ckb_custom").addClass("ckb-checked_custom");
            $(this).siblings("input[type='checkbox']").prop("checked", true);
            // 获得子复选框的个数和未选中个数
            var cld_count = $(ckb_range).find(ckb_child).length,
                cld_none_count = $(ckb_range).find(".ckb_custom").length;
            // 如果全部选中
            if(cld_none_count == 0) {
                // 全选框设为选中状态
                $(ckb_all).removeClass("ckb_custom ckb-part_custom").addClass("ckb-checked_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 如果只是选中部分
            else {
                // 全选框设为部分选中状态
                $(ckb_all).removeClass("ckb_custom ckb-checked_custom").addClass("ckb-part_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
        }
        // 否则取消选中效果
        else {
            $(this).removeClass("ckb-checked_custom").addClass("ckb_custom");
            $(this).siblings("input[type='checkbox']").prop("checked", false);

            // 获得子复选框的个数和未选中个数
            var cld_count = $(ckb_range).find(ckb_child).length,
                cld_none_count = $(ckb_range).find(".ckb_custom").length;

            // 如果只是选中部分
            if(cld_count != cld_none_count && cld_none_count != 0) {
                // 全选框设为部分选中状态
                $(ckb_all).removeClass("ckb_custom ckb-checked_custom").addClass("ckb-part_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 如果全未选中
            else {
                // 全选框设为初始状态
                $(ckb_all).removeClass("ckb-part_custom ckb-checked_custom").addClass("ckb_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", false);
            }
        }
    });
    /* 全选复选框点击功能 */
    $(document).on("click", ckb_all, function() {
        var ckb = $(ckb_all_range).find(ckb_child),
            ckb_len = ckb.length,
            ckb_none = $(ckb_all_range).find(ckb_child + ".ckb_custom"),
            ckb_none_len = ckb_none.length,
            allCkd = !(ckb_none_len == 0);
        // 如果未全选中
        if(allCkd) {
            // 将子复选框全部选中
            for(var i = 0; i < ckb_len; i++) {
                ckb.eq(i).removeClass("ckb_custom").addClass("ckb-checked_custom");
                ckb.eq(i).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 将全选框选中
            $(ckb_all).removeClass("ckb_custom ckb-part_custom").addClass("ckb-checked_custom");
            $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
        }
        // 如果已全选中
        else {
            // 取消所有选中状态
            for(var i = 0; i < ckb_len; i++) {
                ckb.eq(i).removeClass("ckb-checked_custom").addClass("ckb_custom");
                ckb.eq(i).siblings("input[type='checkbox']").prop("checked", false);
            }
            // 取消全选状态
            $(ckb_all).removeClass("ckb-part_custom ckb-checked_custom").addClass("ckb_custom");
            $(ckb_all).siblings("input[type='checkbox']").prop("checked", false);
        }
    });
}
