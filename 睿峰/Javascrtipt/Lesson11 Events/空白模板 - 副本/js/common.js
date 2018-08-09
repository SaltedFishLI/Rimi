// 获取DOM元素
function getEL(sel){
    return document.querySelector(sel);
}
function getElB(id) {
    if (!id){
        throw "getElB:缺乏必要的id参数";
    }
    return document.getElementById(id.slice(1));
}
