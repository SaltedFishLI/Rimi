require('Normalize-LESS');
require('Common-LESS');
require('Index-LESS');
require('Swiper-JS');
require('Swiper-LESS');





    


(function () {
    if(sessionStorage.getItem('loginState')){
        $(".biu").html(`账号:<a>${sessionStorage.getItem('loginState')}</a>`)
    }
    $(".biu").on("click", () => {
        window.location.href="static/html/userInfo/personInfo.html"
        
    })

    var trList=['leftUp','moveRight','moveDown','centerBig','rightDownBig'];
    var swiper = new Swiper('.swiper-container',{
		speed:500,
		autoplay:4400,
		autoplayDisableOnInteraction:false,
		effect:'fade',
		pagination : '.swiper-pagination',
		paginationClickable :true,
		onSlideChangeStart: function(swiper){
			var nextSlide=swiper.slides.eq(swiper.activeIndex);
			nextSlide.addClass(trList[Math.floor(Math.random()*5)]);
           },
	    onSlideChangeEnd: function(swiper){
		    var prevSlide=swiper.slides[swiper.previousIndex];
		    prevSlide.className="swiper-slide";
	       },
        });	
        


          // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls     = [
        'static/html/classify/sofa.html',
        'static/html/classify/tableAndChair.html',
        'static/html/classify/bed.html',
        'static/html/classify/storage.html',
        'static/html/classify/more.html'
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.mENU-lEVEL').on('click', function () {
        // 获取点击菜单项的下标
        let index = $(this).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
  })()





    



      
