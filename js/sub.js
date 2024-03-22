/* 해당 section 이동 */ 
const menuItems = document.querySelectorAll('nav > ul > li > a');
let num = 0;

menuItems.forEach(function(item,idx){
    item.onclick = function(e){
      e.preventDefault();

   
    let tagetName = item.dataset.target;
    document.querySelector(tagetName).scrollIntoView({ 
    behavior:"smooth" })

    menuItems[num].classList.remove('on');
    remoteBtns[num].classList.remove('on');

    num = idx;
    item.classList.add('on');
    remoteBtns[idx].classList.add('on')
    }
});

/* remote 버튼 */ 
const remoteBtns = document.querySelectorAll('#remote a') ;

remoteBtns.forEach(function(btn,idx){
  btn.onclick = function(e){
    e.preventDefault();
    document.querySelector(`#section${idx+1}`).scrollIntoView({ 
    behavior:"smooth" })

    menuItems[num].classList.remove('on');
    remoteBtns[num].classList.remove('on');
  
    num = idx;
    btn.classList.add('on')
    menuItems[idx].classList.add('on')
  }
});

/* sectopn1 slide */ 
$(function(){
  $('.contents-item').eq(0).addClass('active');
  var total = $('.contents-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.contents-item').eq(prev).removeClass('active');
           $('.contents-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});

/* sectopn2 slide */ 
(function(){

  function init(item){
    var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;

        var nav = document.createElement('nav');
        nav.className = 'nav_arrows';

        var prevbtn = document.createElement('button');
		    prevbtn.className = 'prev';
		    prevbtn.setAttribute('aria-label', 'Prev');

        var nextbtn = document.createElement('button');
		    nextbtn.className = 'next';
		    nextbtn.setAttribute('aria-label', 'Next');

        var counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";
    
        if (items.length > 1) {
          nav.appendChild(prevbtn);
          nav.appendChild(counter);
          nav.appendChild(nextbtn);
          item.appendChild(nav);
        }

        items[current].className = "current";
        if (items.length > 1) items[items.length-1].className = "prev_slide";

        var navigate = function(dir) {
          items[current].className = "";
    
          if (dir === 'right') {
            current = current < items.length-1 ? current + 1 : 0;
          } else {
            current = current > 0 ? current - 1 : items.length-1;
          }
    
          var	nextCurrent = current < items.length-1 ? current + 1 : 0,
            prevCurrent = current > 0 ? current - 1 : items.length-1;
    
          items[current].className = "current";
          items[prevCurrent].className = "prev_slide";
          items[nextCurrent].className = "";
    
          //update counter
          counter.firstChild.textContent = current + 1;
        }
        item.addEventListener('mouseenter', function() {
          autoUpdate = false;
        });
    
        item.addEventListener('mouseleave', function() {
          autoUpdate = true;
        });
        setInterval(function() {
          if (autoUpdate) navigate('right');
        },timeTrans);
        prevbtn.addEventListener('click', function() {
          navigate('left');
        });
    
        nextbtn.addEventListener('click', function() {
          navigate('right');
        });

  }

  [].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});
})();

/* sectopn3 slide */ 
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

    
  
