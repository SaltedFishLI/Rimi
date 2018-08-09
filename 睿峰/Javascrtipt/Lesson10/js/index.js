var oMesg = document.querySelector("#mesg"),
    member = oMesg.textContent,
    userName = document.querySelector("#userName");

userName.oninput = function () {
    var userValue = userName.value;
    sayHello(userValue);
}

function sayHello(userValue) {
    if(userValue){
        setTimeout(function () {
            alert("尊敬的" + member + "," + userValue + "你好！");
        }, 3000);

    }
}