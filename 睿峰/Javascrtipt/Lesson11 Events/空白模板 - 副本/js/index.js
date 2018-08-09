(function(){
    //1.获取元素
    var oInput = getEl("#idCard"),
        oSureBth = getEl("#sureBth");
    //2.添加事件
    oSureBth.onclick =function (e) {
        e = e||event;
        console.log(e.target == this);
        //// this -> 事件对象
        console.log(this);
        handleSureBtnClick(oInput);
    };
    oSureBth.addEventListener("mouseenter",function () {
        this.style.color="orange";
    },false)
    oSureBth.addEventListener("mouseout",function () {
        this.style.color="#000";
    },false)
    var oContainer = document.querySelector(".container"),
        oBox = document.querySelector(".box"),
        oSquare =document.querySelector(".square")
    // oContainer.addEventListener("click",function () {
    //     alert(1);
    // },false)
    // oBox.addEventListener("click",function () {
    //     alert(2);
    // },false)
    // oSquare.addEventListener("click",function (event) {
    //     alert(3);
    //     //阻止事件冒泡
    //     event.stopPropagation()
    // },false)

    oContainer.addEventListener("click", function(e) {
        // this -> oContainer
        e = e || event;
        switch(e.target.className) {
            case "square": {
                e.target.style.borderRadius = "20px";
            } break;
            case "box": {
                e.target.style.borderRadius = "50%";
            }break;
        }
    }, false);
    

})()



