(function(){
    var oContent = document.querySelector(".content");

    networking({
        url:"./data.json",
        success: function(response) {
            console.log(response.nihao)
            // var htmlStr = "";
            // htmlStr += "<p>公司名称：" + response.cName   + "</p>";
            // htmlStr += "<p>公司地址：" + response.address + "</p>";
            // htmlStr += "<p>公司电话：" + response.infos.tel     + "</p>";
            // htmlStr += "<p>培训方向：" + response.infos.majors.join("、") + "</p>";
            // oContent.innerHTML = htmlStr;
            oContent.innerHTML = `
            <p>公司名称:${response.cName}</p>
            <p>公司地址:${response.address}</p>
            <p>公司电话:${response.infos.tel}</p>
            <p>培训方向:${response.infos.majors.join("、")}</p>
            `
        }
    })

})();


