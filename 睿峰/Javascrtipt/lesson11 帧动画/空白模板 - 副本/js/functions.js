
function sct(ofs,btn,duration,interval) {
//监听窗口滚动
    window.onscroll = function () {
        //更新页面滚出去的距离
        ofs = document.body.scrollTop || document.documentElement.scrollTop   //滚动的距离||兼容IE
        console.log(ofs)
    }
    btn.onclick = function () {
        var frames = duration / interval,//帧数
            speed = Math.ceil(ofs / frames);//每一帧位移的距离
        var t = setInterval(function () {
            if (ofs > 0){
                document.body.scrollTop = document.documentElement.scrollTop = ofs - speed;
            } else {
                //清除定时器
                clearInterval(t)
                //更新当前位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;

            }
        },interval)
    }
}
