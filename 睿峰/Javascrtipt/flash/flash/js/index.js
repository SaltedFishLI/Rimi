

(function() {
    // 获取DOM元素
    var oPrev      = getEl(".prev"),
        oNext      = getEl(".next"),
        oImgBox    = getEl(".img-box"),
        oContainer = getEl(".container");
    // 定义变量
    var curIndex = 0,
        maxIndex = 5,
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

    };
    oNext.onclick = function() {
        if(isAnimating) {return;}
        if(curIndex == maxIndex) {
            curIndex = 0 
        }else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth)
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
                if(parseInt(oImgBox.style.left) < -6 * imgW) {
                    oImgBox.style.left = -imgW + "px";
                }else if(parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -6 * imgW + "px";
                }
            }
        }, interval);
    }
})();


