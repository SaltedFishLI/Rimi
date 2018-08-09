(function () {

    // 获取需要操作的DOM元素
    var firstIpt = document.querySelector("#firstIpt");
    var lastIpt  = document.querySelector("#lastIpt");
    var select   = document.querySelector("#mySel");
    var result   = document.querySelector("#result");


    // 事件监听
    firstIpt.oninput = function () {  
        // 调用验证函数判断数据是否合法
        if(validate()) { // 合法
            caculator();
        }
    }
    lastIpt.oninput = function () {
       // 调用验证函数判断数据是否合法
       if(validate()) { // 合法
            caculator();
       }
    }
    select.onchange = function () {
        // 调用验证函数判断数据是否合法
        if(validate()) { // 合法
            caculator(); 
        }
    }


    // 计算函数
    function caculator() {
        // 获取操作运算符
        var flag = select.options[select.selectedIndex].textContent;
        // 获取两个文本输入框的值
        var firstValue = parseFloat(firstIpt.value);
        var lastValue  = parseFloat(lastIpt.value);
        var resText    = "";
        // 判断操作运算符进行运算
        switch(flag) {
            case "+": {
                resText = firstValue + lastValue;
            }break;
            case "-": {
                resText = firstValue - lastValue;
            }break;
            case "*": {
                resText = firstValue * lastValue;
            }break;
            case "/": {
                resText = firstValue / lastValue;
            }break;
        }
        // 将显示结果显示在页面上
        result.textContent = resText;
    }
    // 验证数据是否合法的函数
    function validate() {  
        // 获取两个文本输入框的值
        var firstValue = firstIpt.value;
        var lastValue  = lastIpt.value;
        // 验证两个文本输入框的值是否合法
        // 1. 必须为数字   2. 不能为空
        if(!firstValue || !lastValue || isNaN(firstValue) || isNaN(lastValue)) {
            return false;
        }else {
            return true;
        }
    }
})();