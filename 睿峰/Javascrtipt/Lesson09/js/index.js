

(function () {
   //1.定时器
   interval();
   timeout();
   //3.缓存
    var oName = getEl(".nameIpt"),
        oMajor = getEl(".majorIpt"),
        oOrigin = getEl(".originIpt"),
        oShowBth = getEl(".show"),
        oClearBth= getEl(".clear"),
        oAddBth = getEl(".add"),
        oUl     = getEl("#data-list");
    
    //添加数据
    oAddBth.onclick = function () {
        add(oName.value,oMajor.value,oOrigin.value);
    }

    //查看数据
    oShowBth.onclick = function () {
        show(oUl);
    }
    oClearBth.onclick = function () {
        clear(oUl);
    }


})();