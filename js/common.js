$(document).ready(function() {
  /* 
  0) depth2 ul 숨기고 시작한다
  1) 스크롤이벤트 추가 : 스크롤의 수직이동거리가 10픽셀 초과라면 #header.on 추가
  2) 네비게이션 진입 : 마우스(mouseenter), 키보드(focusin) 동시 : depth1 li
  3) 네비게이션 이탈
  마우스(mouseleave) : depth1 ul
  키보드(blur) : 첫번째 a, 마지막 a
  */
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

    // if ($(this).scrollTop() > 10) $('#header').addClass('on');
    // else $('#header').removeClass('on');
  });

  // 2) 마우스(mouseenter), 키보드(focusin) 진입 
  $gnb.children().on('mouseenter focusin', function () {
    // depth1 li.on 제어
    $(this).addClass('on').siblings('li.on').removeClass('on');
    // depth2 ul 열리기
    $gnbDep2.stop().slideDown();
    // 필수 아님 : 현재 디자인 컨셉 - depth1과 depth2를 구별하기 위한 가상요소
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

  // 4) 첫번째 a, 마지막 a 에서 키보드(blur)
  // 첫번째 a : shift + tab
  $gnb.find('a').first().on('keydown', function (e) {
    console.log(e.keyCode); //tab : 9, 오른쪽 shift : 16
    if ((e.shiftKey || e.keyCode === 16) && e.keyCode === 9) $gnb.trigger('mouseleave');
  });
  // 마지막 a : shift (x) , tab만 누르는 경우
  $gnb.find('a').last().on('keydown', function (e) {
    if ((!e.shiftKey || e.keyCode !== 16) && e.keyCode === 9) $gnb.trigger('mouseleave');
  });
});