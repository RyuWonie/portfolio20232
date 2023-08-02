let OnOff = true;

$('.navBtn').click(function(){
    OnOff = !OnOff;

    if(OnOff == false){
        $(this).toggleClass('active');
        $('header').animate({'bottom':0},1000);
        $('nav').fadeIn();
    }else{
        $(this).removeClass('active');
        $('header').animate({'bottom':'-10vw'},1000);
        $('nav').fadeOut();
    }
});

$('nav li').click(function(){
    let i = $(this).index();
    let offTop = $('section').eq(i).offset().top;

    $('html,body').animate({
        'scrollTop':offTop
    });
});

$(window).scroll(function(){
    let scr = $(window).scrollTop();
    let work = $('.s2').offset().top;
    let gall = $('.s3').offset().top;
    let me = $('.s4').offset().top;

    if(scr >= 0 && scr < work){
        $('nav li').eq(0).addClass('under')
            .siblings().removeClass('under');
    }else if(scr >= work && scr < gall){
        $('nav li').eq(1).addClass('under')
            .siblings().removeClass('under');
    }else if(scr >= gall && scr < me){
        $('nav li').eq(2).addClass('under')
            .siblings().removeClass('under');
    }else if(scr >= me){
        $('nav li').eq(3).addClass('under')
            .siblings().removeClass('under');
    }
});