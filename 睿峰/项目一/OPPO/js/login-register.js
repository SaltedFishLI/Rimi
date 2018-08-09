(function(){
    readRem()
    //获取存储验证码元素
    var validateCode = getEl(".validate-code");
    var vficat = getEl(".vficat");
    //验证码
    verificationCode(validateCode,vficat)
    verify()
})()


