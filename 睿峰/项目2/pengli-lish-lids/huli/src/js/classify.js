require('Normalize-LESS');
require('Common-LESS');
require('Classify-LESS');
require('Index-LESS');
$(function() {


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
    $.ajax({
        url: "../../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 2. 加载数据
            loadingHtml(response);
            $(".Sofas").on("click", () => {
                location.href = `../goodInfo/sofasDetails.html`;
            });
            $(".goods").on("click", () => {
                location.href = `../goodInfo/goodsDetails.html`;
            });
        }
    });
});
var loadingHtml = (response) => {
    let datas = response["product"];
    let htmlStr = ``;
    datas.forEach((datas) => {
        htmlStr = `
        <div class="box goods">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.original_prices}</span>
                        <span class="deleOldPrice"></span>
                    </span>
                    <span class="newPrice">
                        <span>${datas.present_price}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
<div class="box Sofas">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.original_pricesTwo}</span>
                        <span class="deleOldPrice"></span>
                    </span>
                    <span class="newPrice">
                        <span>${datas.present_priceTwo}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
<div class="box">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.present_priceThree}</span>
                    </span>
                </span>
            </div>
        </a>
</div><div class="box">
<a href="#">
    <div class="goodsImg">
        <img src="../../images/example_0.jpg">
    </div>
    <div class="goodsBaseInfo">
        <span class="goodsName">商品名称</span>
        <span class="goodsPrice">
            <span class="oldPrice">
                <span>${datas.present_priceThree}</span>
            </span>
        </span>
    </div>
</a>
</div><div class="box">
<a href="#">
    <div class="goodsImg">
        <img src="../../images/example_0.jpg">
    </div>
    <div class="goodsBaseInfo">
        <span class="goodsName">商品名称</span>
        <span class="goodsPrice">
            <span class="oldPrice">
                <span>${datas.present_priceThree}</span>
            </span>
        </span>
    </div>
</a>
</div><div class="box">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.present_priceThree}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
<div class="box">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.present_priceThree}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
<div class="box">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.present_priceThree}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
<div class="box">
        <a href="#">
            <div class="goodsImg">
                <img src="../../images/example_0.jpg">
            </div>
            <div class="goodsBaseInfo">
                <span class="goodsName">商品名称</span>
                <span class="goodsPrice">
                    <span class="oldPrice">
                        <span>${datas.present_priceThree}</span>
                    </span>
                </span>
            </div>
        </a>
</div>
        `;
    });
    $(".bigBox").html(htmlStr);
}
