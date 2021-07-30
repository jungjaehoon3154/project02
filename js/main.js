
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed : 500,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        }
    });  

    // 슬라이드 시작 정지
    $('.start').on('click', function() {
        swiper.autoplay.start();
        $(this).addClass('hidden').siblings().removeClass('hidden');
        return false;
    });
    $('.stop').on('click', function() {
        swiper.autoplay.stop();
        $(this).addClass('hidden').siblings().removeClass('hidden');
        return false;
    });

<<<<<<< HEAD
    // spec 효과
=======
    // 숫자 올라가는 효과
>>>>>>> 0b7e9e050e7b17e6d85e1047df1fe8edc0159661
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
});

