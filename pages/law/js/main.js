$(window).resize(function(){ 
    if (window.innerWidth > 1200) {

        let Onoff = true;

        $('.menuBtn').click(function(){
            Onoff = !Onoff;

            if(Onoff == false){
                $(this).toggleClass('Gnb')
                $('.menu').fadeIn();
            }else{
                $(this).removeClass('Gnb');
                $('.menu').fadeOut();
            }
        });
    

    } else {

        let onOff = true;

        $('.srcBtn').click(function(){
            onOff = !onOff;
        
            if(onOff == false){
                $(this).toggleClass('on');
                $('.search').animate({'left':'0'});
                $('.menu').css({'display':'none'});
            }else{
                $(this).removeClass('on');
                $('.search').animate({'left':'-100vw'});
                $('.menu').css({'display':'block'});
            }
        });
        
        $('.menuBtn').click(function(){
            onOff = !onOff;
        
            if(onOff == false){
                $(this).toggleClass('on');
                $('.menu').animate({'left':'0'});
                $('.search').css({'display':'none'});
            }else{
                $(this).removeClass('on');
                $('.menu').animate({'left':'100vw'});
                $('.search').css({'display':'block'});
            }
        });
        
        $('.tabTit>li').click(function(){
            let i = $(this).index();
        
            $(this).addClass('act').siblings().removeClass('act'); 
            $('.tabMenu>.item').eq(i).show().siblings().hide();
        });
        
        $('.bnCon').slick({
            prevArrow : '.subBn .prv',
            nextArrow : '.subBn .nxt',
            autoplay : true,
        });
        
        $('.gnb>li>a').click(function(){
            $(this).siblings().slideToggle();
        });
        
        $('.infoF').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay : true,
            arrows: false,
            variableWidth: true
        });

    }

}).resize();