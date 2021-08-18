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
});