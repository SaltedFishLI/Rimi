require('Normalize-LESS');
require('Common-LESS');
require('Sofasdetails-LESS');
require('Index-LESS');



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
    $.ajax({
        url: "../../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 2. 加载数据
            detailsHtml(response);
            plusminus();
            lun();
        }
    });
   
    
   
})
var detailsHtml = (response) => {
    let datas = response["combination"];
    let htmlStr = ``;
    datas.forEach((datas) => {
        htmlStr = `
        <div class="contents">
        <div class="box left-box">
            <div class="small-box">
            <img src="${datas.img1}" alt="图片加载失败" class="selected show" >
            </div>
            <div class="thumbnail">
                            <img src="${datas.img2}" alt="图片加载失败" class="" >
                        
                            <img src="${datas.img3}" alt="图片加载失败" >
                        
                            <img src="${datas.img4}" alt="图片加载失败" class="" >
                        
                            <img src="${datas.img1}" alt="图片加载失败" class="selected" >
                        
                            <img src="${datas.img5}" alt="图片加载失败" class="" >
                        </div>
        </div>
        <div class="goodsBuy">
               
            <!-- 商品名称及筛选 -->
            <div class="goodsName">
                <h1>${datas.name}</h1>
                <p>
                    <span style="border-left: none; padding-left: 0px;">${datas.goodsname}</span>
                    <span>${datas.new}</span>
                </p>
            </div>
            
            <!-- 商品价格 -->
            <div class="goodsPrice">
                <!-- 原始价格 -->
                <div class="origPrice">
                    <span class="rmbSign">￥</span>
                    <span class="rmbNum">${datas.original_prices}</span>
                    <span class="rmbYuan">元</span>
                    <!-- 价格删除线 -->
                    <span class="deleOldPrice"></span>
                </div>
                <!-- 新价格 -->
                <div class="newPrice">
                    <span class="rmbSign">￥</span>
                    <span class="rmbNum">${datas.present_price}</span>
                    <span class="rmbYuan">元</span>
                    <!-- 价格删除线 -->
                    <span class="deleOldPrice"></span>
                </div>
            </div>
            
            <!-- 购买动态信息 -->
            <div class="goodsDynamic">
                <div class="origBuyPrice">
                    <label>原始购买价格：</label>
                    <span class="rmbNum">2558</span>
                    元
                </div>
                <div class="score">
                    <label>积分：</label>
                    <span>6.8</span>
                    <a href="#">了解积分规则</a>
                </div>
                <div class="inventory">
                    <label>库存数量：</label>
                    <span>${datas.repertory}</span>
                </div>
            </div>
            
            <!-- 商品购买操作 -->
            <div class="goodsBuyCtrl">
                <!-- 数量设置 -->
                <div class="countSet">
                    <input id="num" type="text" class="num" value="0">
                    <div class="countSetArea">
                        <p class="plus">+</p>
                        <p class="minus disabled">-</p>
                    </div>
                </div>
                <button type="button" class="immedBuy">立即购买</button>
                <button type="button" class="shoppingCar">加入购物车</button>
            </div>
            
            <!-- 在线客服 -->
            <div class="onlineServer">
                <button type="button"></button>
            </div>
            
            <!-- 户里服务 -->
            <div class="huliServer">
                <p>
                    <label>户里服务：</label>
                    <span>${datas.server}</span> </p>
            </div>
            </div>
            </div>
            <div class="goodsStyle">
            <h1 class="classifyHeader">商品规格</h1>
            <div class="goodsSize">
                <label>尺寸：</label>
                <span>1260*760*560mm</span>
            </div>
            <div class="goodsTexture">
                <label>材质：</label>
                <span>实木/布艺</span>
            </div>
            <div class="goodsColor">
                <label>颜色：</label>
                <span>亚麻色</span>
            </div>
        </div>
        <div class="goodsDetails">
            <h1 class="classifyHeader">商品详情</h1>
            <div class="detailsContent"></div>
        </div>
        <div class="goodsDeliver">
            <h1 class="classifyHeader">送货</h1>
            <div class="deliverAddr">成都市绕城内满699元可享受免费送货政策，未满金额或者绕城外地区收取99元运费。</div>
        </div>
        <div class="goodsRecom">
            <h1 class="classifyHeader">推荐商品</h1>
            <div class="recomList">
            <div class="box goods">
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
    </div><div class="box goods">
    <a href="#">
        <div class="goodsImg">
            <img src="../../images/example_0.jpg">
        </div>
        <div class="goodsBaseInfo">
            <span class="goodsName">商品名称</span>
            <span class="goodsPrice">
                <span class="oldPrice">
                    <span>${datas.original_pricesTwo}</span>
                </span>
            </span>
        </div>
    </a>
</div>
                <div class="box goods">
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
</div>
</div>`;
    });
    $("main").html(htmlStr);
}
function plusminus(){
 let price=0;
  $(".minus").click(function(){
  price=$("#num").val();
   if($("#num").val()==0){
      return
    }
     else{
            price--;
     }
        $("#num").val(price);
      })
       $(".plus").click(function(){
            price=$("#num").val();
         price++;
       $("#num").val(price);
      })
   }
   function lun(){
    $(document).on("click",".thumbnail img",function(e){
        let $target = $(e.target);
                $target.addClass("selected").siblings().removeClass("selected");
                $(".small-box img").attr({
                    "src": $target.attr("src")
                }) 
    })
}
