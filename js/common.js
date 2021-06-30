$(document).ready(function() {

  const $gnb = $('#gnb > ul');
  const $gnbDep2 = $gnb.find('li ul');

  $gnbDep2.hide();
 
  $gnb.children().on('mouseenter focusin', function () {
    
    $(this).addClass('on').siblings('#header.on').removeClass('on');
    
    $gnbDep2.stop().slideDown();

    $('#header').addClass('on').find('#gnb').addClass('active');
  });

  // 3) depth1 ul에서 마우스(mouseleave) 이탈
  $gnb.on('mouseleave', function () {
    // depth1 li.on 제거 하고 depth2 ul 닫기 => #gnb.active 제거
    $(this).children().removeClass('on').children('ul').stop().slideUp(function () {
      // 추가사항 : 1) #gnb.active 제거 2) #header.on 제거 #gnb.active 제거 
      if ($(window).scrollTop() > 10) {
        $('#gnb').removeClass('active');
      } else {
        $('#header').removeClass('on').find('#gnb').removeClass('active');
      }
    });
  });



  

 




  $('.family_site button').on('click', function() {
    $('.family_site ul').fadeToggle('fast')
    $('.family_site').toggleClass('active')
  });
    $('.family_site button').on('keydown', function(e){
      console.log(e.keyCode);  //tab 9
      if (e.shiftKey && e.keyCode === 9) $('.family_site button').trigger('click')
    });
    $('.family_site a').last().on('keydown', function(e){
      if (!e.shiftKey && e.keyCode === 9) $('.family_site button').trigger('click')
    });


    

}); 





