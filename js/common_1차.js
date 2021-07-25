$(document).ready(function() {
  const $gnb = $('#gnb > ul');
  const $gnbDep2 = $gnb.find('li ul');

  $gnbDep2.hide();

  // 1) 스크롤이벤트 추가 : 스크롤의 수직이동거리가 10픽셀 초과라면 #header.on 추가
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  // 2) 마우스(mouseenter), 키보드(focusin) 진입 
  $gnb.children().on('mouseenter focusin', function () {
    // depth1 li.on 제어
    $(this).addClass('on').siblings('li.on').removeClass('on');
    // depth2 ul 열리기
    $gnbDep2.stop().slideDown();
    $('#header').addClass('on').find('#gnb').addClass('active');
  });

  // 3) depth1 ul에서 마우스(mouseleave) 이탈
  $gnb.on('mouseleave', function () {
    // depth1 li.on 제거 하고 depth2 ul 닫기 => #gnb.active 제거
    $(this).children().removeClass('on').children('ul').stop().slideUp(function () {
      // 스크롤바가 10픽셀 보다 더 많이 움직인 경우라면 #gnb.active만 제거 => 적게 움직였다면 #header.on 제거 #gnb.active 제거 
      if ($(window).scrollTop() > 10) {
        $('#gnb').removeClass('active');
      } else {
        $('#header').removeClass('on').find('#gnb').removeClass('active');
      }
    });
  });

  // 4) 첫번째 a, 마지막 a 에서 키보드(blur)
  // 첫번째 a : shift + tab
  $gnb.find('a').first().on('keydown', function (e) {
    console.log(e.keyCode); //tab : 9
    if (e.shiftKey || e.keyCode === 16) $gnb.trigger('mouseleave');
  });
  // 마지막 a : shift (x) , tab만 누르는 경우
  $gnb.find('a').last().on('keydown', function (e) {
    if (!e.shiftKey || e.keyCode !== 16) $gnb.trigger('mouseleave');
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





