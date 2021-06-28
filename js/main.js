
/*
$(document).ready(function () {
    const $firstMenu = $('#gnb > ul > li')
        $gnb = $('#gnb');
    $firstMenu.mouseover(function () {
        $gnb.stop().animate({height: '500px'},300);
    })
    .mouseout(function() {
        $gnb.stop().animate({height: '100px'},300);
    });   
});
*/

$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        }

    });  
});