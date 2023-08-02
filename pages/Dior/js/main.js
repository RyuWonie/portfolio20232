AOS.init();

skrollr.init({
	smoothScrolling: true,
	forceHeight: false,
	easing: {
		vibrate: function(p) {
			return Math.sin(p * 10 * Math.PI);
		}
	}
});

$(window).scroll(function(){
    let scr = $(window).scrollTop();

    if(scr >= 150){
        $('header').addClass('on');
    }else{
        $('header').removeClass('on');
    }
});

$('.gnb li').click(function(){
    let i = $(this).index();
    let s1 = $('.s1').offset().top;
    let s3 = $('.s3').offset().top;
    let s4 = $('.s4').offset().top;

    if(i == 0){
        $('html,body').animate({
            'scrollTop':s1
        });
    }else if(i == 1){
        $('html,body').animate({
            'scrollTop':s3
        });
    }else{
        $('html,body').animate({
            'scrollTop':s4
        });
    }
});

$('.slider').slick({
    prevArrow : '.s3 .prv',
    nextArrow : '.s3 .nxt',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000
})

// https://www.gradient-animator.com/ 마우스오버 그라데이션
// 스크롤 돌리기