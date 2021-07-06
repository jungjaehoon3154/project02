$(document).ready(function() {

  const $gnb = $('#gnb > ul > li');
  const $gnbDep2 = $gnb.find('ul');

  $gnbDep2.hide();

  const $header = $('#header');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  }); 
 
  $gnb.on('mouseenter focusin', function () {
    $gnbDep2.stop().slideDown();

    $('#header').addClass('on').find('#gnb').addClass('active');

  });
  $header.on('mouseleave', function () {
    $gnbDep2.stop().slideUp();
  
    $('#header').removeClass('on').find('#gnb').removeClass('active');

  }); 


  $('.util .lang button').on('mouseenter click focusin', function () {
    $(this).next().stop().slideDown('fast');
  });
  $('.util .lang').on('mouseleave focusout', function () {
    $(this).children('ul').stop().slideUp('fast');
  });
 


  $('.family_site button').on('click', function() {
    $('.family_site ul').toggle()
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





