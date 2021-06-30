$(document).ready(function() {

  const $gnb = $('#gnb > ul');
  const $gnbDep2 = $gnb.find('li ul');
  const $header = $('#header');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });
 
  $header.on('mouseenter focusin', function () {
    $gnbDep2.stop().slideDown();

    $('#header').addClass('on').find('#gnb').addClass('active');

  });

  $header.on('mouseleave', function () {
    $gnbDep2.stop().slideUp();
  
    $('#header').removeClass('on').find('#gnb').removeClass('active');

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





