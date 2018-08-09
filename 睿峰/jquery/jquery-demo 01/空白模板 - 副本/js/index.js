$(function(){
    //jQuery转换DOM
   let $text = $("#text");
   console.log($text[0]);
   //DOM转换jQuery
   let oText = document.getElementById("text");
   console.log($(oText));

//    //防止冲突
//    let jq = $.noConflict();
//    jq(oText).text("Hello,jQuery");

   $text.text("Hello,jQuery");
   console.log($text.text());


   $(".wrap").html(`
        <h1>jQuery</h1>
        <p>jQuery是轻量级的JavaScript库。</p>
   `);   

    $(".sure").on("click",()=>{
        console.log($(".username").val());
    });
    
    $(".clear").on("click",()=>{
        console.log($(".username").val(""));
    });

    $(".wrap").attr({
        "id":"text-box",
        "title":"我也布吉岛写什么"
    });

    $(".wrap").removeAttr("id");
    console.log($(".wrap").attr("title"));

    let $checkbox = $("[type='checkbox']");
    $("button:contains('选中')").data("msg","今天");
    $("button:contains('选中')").on("click",(e)=>{
        $checkbox.prop('indeterminate',false);
        $checkbox.prop('checked',true);
        alert($(e.target).data('msg'));
    })
    $("button:contains('未选中')").on("click",()=>{
        
        $checkbox.prop('checked',false);
        $checkbox.prop('indeterminate',false);
    })
    $("button:contains('半选中')").on("click",()=>{
        $checkbox.prop('indeterminate',true);
    })

    //添加class
    $(".wrap").addClass("text box");
    //移除class
    $(".wrap").removeClass("text");

    $(".menu-list li").css({
        "color":"blue",
        "fontsize":"28px"
    });
});