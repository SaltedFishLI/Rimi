/*
* @description   获取随机验证码
* @oaram length   String 验证码长度
* @return         String 随机字符
*
*
*
* */
function getVerifocationCode(length) {
    //定义随机源
    var str = "";
    str += "qwertyuiopasdfghjklzxcvbnm";
    str += "1234567890";
    str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    //获取随机下标
    var index = Math.floor(Math.random()*str.length);
    //根据长度获取字符
    var resStr ="";
    for (var i=0;i<length;i++){
        //获取随机
        var index = Math.floor(Math.random()*str.length);
        resStr += str.slice(index,index+i);
    }
    return resStr;
}