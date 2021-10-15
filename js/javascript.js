$(function(){

  const arrTopVal = [];

  arrTopVal[0] = $('.aboutMe').offset().top;
  arrTopVal[1] = $('.mnu1').offset().top;
  arrTopVal[2] = $('.mnu2').offset().top;
  arrTopVal[3] = $('.mnu3').offset().top;
  arrTopVal[4] = $('.mnu4').offset().top;
  arrTopVal[5] = $('.mnu5').offset().top;
  arrTopVal[6] = $('.mnu6').offset().top;

  console.log('arrTopVal =',arrTopVal);

  const moveFn = function(idx){
    $('html,body').animate({scrollTop:arrTopVal[idx]},'easeInOutCubic');

    $mnu.eq(idx).parent().addClass('on');
    $mnu.eq(idx).parent().siblings().removeClass('on');
  };

  const $mnu = $('.gnb>li>a');

  $mnu.on('click', (evt)=>{
    evt.preventDefault();

    const nowIdx = $mnu.index(evt.currentTarget);

    moveFn(nowIdx);
  });

  $(window).on('load', function(){
    moveFn(0);
  });

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    console.log(scroll);
      
    if(scroll >= 0 && scroll < 970){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(1)>a').css('font-weight', '800');
      }
      
      else if(scroll >= 970 && scroll < 1940){
      $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(2)>a').css('font-weight', '800');
      }

      else if(scroll >= 1940 && scroll < 2910){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(3)>a').css('font-weight', '800');
      }
      
      else if(scroll >= 2910 && scroll < 3880){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(4)>a').css('font-weight', '800');
      }
      
      else if(scroll >= 3880 && scroll < 4670){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(5)>a').css('font-weight', '800');
      }
      
      else if(scroll >= 4670 && scroll < 5460){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(6)>a').css('font-weight', '800');
      }

      else if(scroll >= 5460 && scroll < 6250){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(7)>a').css('font-weight', '800');
      }

      else if(scroll >= 6250 && scroll < 7220){
        $('.gnb>li>a').css('font-weight', '500');
        $('.gnb>li:nth-of-type(7)>a').css('font-weight', '800');
      }
    });

    function copyToClipboard(val) {
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      }
  
      $('.link').click(function() {
        copyToClipboard('hsvk4@naver.com');
        alert('주소를 복사하였습니다');
      });
});

$(function(){

  const $indicator = $('#screen>.slides-pagination>li>a');
  const $container = $('#screen>.imgFrame');
  const $btnPrev = $('#screen>.slides-nav.slides-prev');
  const $btnNext = $('#screen>.slides-nav.slides-next');

  let nowIdx = 0;

  const slideFn = function(){
    $container.stop().animate({
      left : -(100 * nowIdx)+'%'
    });    
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };
  
    $indicator.on('click', function(evt){
     evt.preventDefault();

     nowIdx = $indicator.index(this);
     slideFn();
   });

    $btnPrev.on('click', function(evt){
      evt.preventDefault();
      if(nowIdx>0){
        nowIdx--;
      }else{
        nowIdx=9;
      }
      slideFn();
    });      
      
    $btnNext.on('click', function(evt){
      evt.preventDefault();
      if(nowIdx<9){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      slideFn();
    });

    const slidePC = [
      'images/busan_university_proposal01.png',
      'images/busan_university_proposal02.png',
      'images/busan_university_proposal03.png',
      'images/busan_university_proposal04.png',
      'images/busan_university_proposal05.png',
      'images/busan_university_proposal06.png',
      'images/busan_university_proposal07.png',
      'images/busan_university_proposal08.png',
      'images/busan_university_proposal09.png',
      'images/busan_university_proposal10.png'
    ];

    const slideMO = [
      'images/busan_university_proposal01.png',
      'images/busan_university_proposal02.png',
      'images/busan_university_proposal03.png',
      'images/busan_university_proposal04.png',
      'images/busan_university_proposal05.png',
      'images/busan_university_proposal06.png',
      'images/busan_university_proposal07.png',
      'images/busan_university_proposal08.png',
      'images/busan_university_proposal09.png',
      'images/busan_university_proposal10.png'
    ];

    $(window).on('load resize', function(){
      
      const $slideImg = $('#screen>ul>li>a>img');
  
      if($(window).width()<=768){
        for(let i=0;i<10;i++){
          $slideImg.eq(i).attr({
            src : slideMO[i]
          });
        }
      }else{
        for(let i=0;i<10;i++){
          $slideImg.eq(i).attr({
            src : slidePC[i]
          });
        }
      }     
  
  });
});

$(function(){

  const $indicator = $('#screen2>.slides-pagination>li>a');
  const $container = $('#screen2>.imgFrame');
  const $btnPrev = $('#screen2>.slides-nav.slides-prev');
  const $btnNext = $('#screen2>.slides-nav.slides-next');

  let nowIdx = 0;

  const slideFn = function(){
    $container.stop().animate({
      left : -(100 * nowIdx)+'%'
    });    
    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    };
  
    $indicator.on('click', function(evt){
     evt.preventDefault();

     nowIdx = $indicator.index(this);
     slideFn();
   });

    $btnPrev.on('click', function(evt){
      evt.preventDefault();
      if(nowIdx>0){
        nowIdx--;
      }else{
        nowIdx=9;
      }
      slideFn();
    });      
      
    $btnNext.on('click', function(evt){
      evt.preventDefault();
      if(nowIdx<9){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      slideFn();
    });

    const slidePC = [
      'images/Reader&Leader_proposal01.png',
      'images/Reader&Leader_proposal02.png',
      'images/Reader&Leader_proposal03.png',
      'images/Reader&Leader_proposal04.png',
      'images/Reader&Leader_proposal05.png',
      'images/Reader&Leader_proposal06.png',
      'images/Reader&Leader_proposal07.png',
      'images/Reader&Leader_proposal08.png',
      'images/Reader&Leader_proposal09.png',
      'images/Reader&Leader_proposal10.png'
    ];

    const slideMO = [
      'images/Reader&Leader_proposal01.png',
      'images/Reader&Leader_proposal02.png',
      'images/Reader&Leader_proposal03.png',
      'images/Reader&Leader_proposal04.png',
      'images/Reader&Leader_proposal05.png',
      'images/Reader&Leader_proposal06.png',
      'images/Reader&Leader_proposal07.png',
      'images/Reader&Leader_proposal08.png',
      'images/Reader&Leader_proposal09.png',
      'images/Reader&Leader_proposal10.png'
    ];

    $(window).on('load resize', function(){
      
      const $slideImg = $('#screen2>ul>li>a>img');
  
      if($(window).width()<=768){
        for(let i=0;i<10;i++){
          $slideImg.eq(i).attr({
            src : slideMO[i]
          });
        }
      }else{
        for(let i=0;i<10;i++){
          $slideImg.eq(i).attr({
            src : slidePC[i]
          });
        }
      }     
  
  });
});