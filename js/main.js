/****** 우체부 이동 ******/ 
let proOffsetLeft, webOffsetLeft, desOffsetLeft, tabHOffsetLeft;

function handleResize() {   
    proOffsetLeft = $('.pro').offset().left;
    webOffsetLeft = $('.web').offset().left;   
    desOffsetLeft = $('.des').offset().left;  
    tabHOffsetLeft = $('.tab_h').offset().left;
    
   /* console.log("OffsetLeft values updated:");
    console.log("proOffsetLeft:", proOffsetLeft);
    console.log("webOffsetLeft:", webOffsetLeft);
    console.log("desOffsetLeft:", desOffsetLeft);
    console.log("tabHOffsetLeft:", tabHOffsetLeft);*/
}
$(window).resize(handleResize);
handleResize();

$('.pro').mouseover(function(){
    $('.car').stop().animate({left: proOffsetLeft - 125}, 700);
    $('.person').stop().animate({left: proOffsetLeft + 10}, 400);
});
$('.pro').mouseleave(function(){
    $('.car').stop().animate({left:'200px'},400);
    $('.person').stop().animate({left:'150px'},400);
});

$('.web').mouseover(function(){
    $('.car').stop().animate({left: webOffsetLeft - 125}, 700);
    $('.person').stop().animate({left: webOffsetLeft + 10}, 700);
});
$('.web').mouseleave(function(){
    $('.car').stop().animate({left:'200px'},400);
    $('.person').stop().animate({left:'150px'},400);
});

$('.des').mouseover(function(){
    $('.car').stop().animate({left: desOffsetLeft - 127}, 700);
    $('.person').stop().animate({left: desOffsetLeft + 10}, 700);
});
$('.des').mouseleave(function(){
    $('.car').stop().animate({left:'200px'},400);
    $('.person').stop().animate({left:'150px'},400);
});

$('.tab_h').mouseover(function(){
    $('.person').stop().animate({left: tabHOffsetLeft + 50}, 700);
});
$('.tab_h').mouseleave(function(){
    $('.person').stop().animate({left:'150px'},400);
});























