$(function () {

    //抓取数据
    //密钥showapi_sign：ba109bc04393424fbaded2cef28af1a1
    //showapi_appid ：66404
    $.ajax({
        //请求的地址
        url:"http://route.showapi.com/341-1",
        //请求方法
        type: "GET",
        //指定数据类型
        dataType:"json",
        //请求参数
        data:{
            "showapi_appid" :"66404",
            "showapi_sign":"ba109bc04393424fbaded2cef28af1a1"
        },
        success: function(response) {
            var contentlist = response["showapi_res_body"]["contentlist"];
            var htmlStr = "";
            contentlist.forEach(function (data) {
                // noinspection JSAnnotator
                htmlStr += `
            <li>
                <p class="title">${data.title}</p>
                <p class="date">${data.ct}</p>
                <p class="text">${data.text}</p>
            </li>
            `;
            })
            //更新页面
            $(".content-list").html(htmlStr);
        }

    })

});