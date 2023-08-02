AOS.init();
skrollr.init({
    smoothScrolling: true,
    forceHeight: false,
});

let onOff = true;

$('.navBtn').click(function(){
    onOff = !onOff;

    if(onOff == false){
        $(this).toggleClass('active');
        $('nav').animate({
            'right':'0'
        });
    }else{
        $(this).removeClass('active');
        $('nav').animate({
            'right':'-100%'
        });
    }
});

$('.gnb li').click(function(){
    let i = $(this).index();
    let intr = $('.s1').offset().top;
    let char = $('.s2').offset().top;
    let gall = $('.s3').offset().top;
    let toon = $('.s4').offset().top;
    let good = $('.s5').offset().top;
    let even = $('.s6').offset().top;

    if(i == 0){
        $('html,body').animate({'scrollTop':intr});
    }else if(i == 1){
        $('html,body').animate({'scrollTop':char});
    }else if(i == 2){
        $('html,body').animate({'scrollTop':gall});
    }else if(i == 3){
        $('html,body').animate({'scrollTop':toon});
    }else if(i == 4){
        $('html,body').animate({'scrollTop':good});
    }else{
        $('html,body').animate({'scrollTop':even});
    }
});

$('.character1').slick({
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
});

$('.character2').slick({
    arrows: false,
    slidesToshow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
    rtl: true,
    infinite: true,
    initialSlide: 0
});

$('.ch').click(function(){
    let chName = $(this).data('charcter-name');
    
    chName = "#"+chName

    $('.s2 .box .item').children(chName).stop().fadeIn().siblings().hide();

});

$('.thum').click(function(e){
    e.preventDefault();
    $('.thumBox').fadeIn();
});

$('.close, .closeWrap').click(function(){
    $('.thumBox').fadeOut();
});

$('.gallItem').click(function(e){
    e.preventDefault();
});

$('.Cthum').click(function(e){
    e.preventDefault();

    $('.cTit').hide();
    $('.tTit').show();
    $('.toon').fadeIn();

    let viewTit = $(this).data('view-title');
    viewTit = "#"+viewTit
    $('.EpTit').children(viewTit).show().siblings().hide();

    let img = $(this).find('.imgBox').html();
    $('.tnF').html(img);

    $('.now').addClass('active');
});

$('.tClo').click(function(){
    $('.now').removeClass('active');
    $('.toon').fadeOut();
    $('.tTit').hide();
    $('.cTit').show();
});

$('.event').click(function(e){
    e.preventDefault();
    $('.popUp').fadeIn();

    let txt1 = $(this).find('h4').text();
    $('.popUp h4').text(txt1);

    let txt2 = $(this).find('p').html();
    $('.popUp p').html(txt2);
});

$('.popCl').click(function(){
    $('.popUp').fadeOut();
});



let winHeight = window.innerHeight;

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray("section");

let scrollTween = gsap.to(sections, {
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".s1Wrap",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: `+=${winHeight + 400}`,
    }
  });

gsap.set("article", {opacity: 0});
gsap.set(".intCh", {opacity: 1}); //인형사라지는거
gsap.set(".s1Tit", {opacity: 1});


gsap.to("article", {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '.s1Wrap',
      start: 'top top',
      end: 'bottom top',
      scrub: true}
  });

  gsap.to(".intCh", {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.s1Wrap',
      start: 'top top',
      end: 'bottom top',
      scrub: true}
  }); //인형사라지는거

  gsap.to(".s1Tit", {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.s1Wrap',
      start: 'top top',
      end: 'bottom top',
      scrub: true}
  }); 